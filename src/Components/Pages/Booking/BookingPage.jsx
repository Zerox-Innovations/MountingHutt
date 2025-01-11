import { Card } from '@mui/material';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import { useAuth } from '../../Context/AuthContext';
import toast from 'react-hot-toast';

const BookingForm = () => {
  const { id } = useParams(); // Capture the `id` from the URL path
  const { contextState } = useAuth();
  const { authToken } = contextState;

  const [packageDetails, setPackageDetails] = useState(null); // State to store package details
  console.log(packageDetails);

  const navigate = useNavigate();
  // Centralized state for booking summary
  const currentDate = new Date();
  const nextDate = new Date();
  nextDate.setDate(currentDate.getDate() + 1);

  useEffect(() => {
    const fetchPackageDetails = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_URL_SERVER}package/booking/?package_id=${id}`, {
          headers: {
            Authorization: `Bearer ${authToken.access}`,
          },
        });
        setPackageDetails(response.data);
      } catch (error) {
        console.error("Error fetching package details:", error);
        if (error.response && error.response.status === 404) {
          toast.error("Package not found. Please check the package ID.");
        } else {
          toast.error("An unexpected error occurred. Please try again later.");
        }
      }
    };

    fetchPackageDetails();
  }, [id, authToken]);

  // Format date to dd/mm/yyyy
  const formatDate = (date) => {
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
  };

  // Format dd/mm/yyyy to yyyy-mm-dd for input
  const formatToInputDate = (date) => {
    const [day, month, year] = date.split('/');
    return `${year}-${month}-${day}`;
  };

  const [bookingSummary, setBookingSummary] = useState({
    checkinDate: formatDate(currentDate), // Default check-in date
    checkoutDate: formatDate(nextDate), // Default checkout date
    persons: packageDetails?.min_members || 0, // Default number of persons, set to min_members if available
  });

  // Track whether the checkout input should be disabled
  const [isCheckoutDisabled, setIsCheckoutDisabled] = useState(false);

  useEffect(() => {
    if (packageDetails) {
      const defaultDays = packageDetails.days || 3; // Default to 3 days if `packageDetails.days` is not provided
      const defaultCheckoutDate = new Date(currentDate);
      defaultCheckoutDate.setDate(defaultCheckoutDate.getDate() + defaultDays);

      setBookingSummary((prev) => ({
        ...prev,
        checkoutDate: formatDate(defaultCheckoutDate),
        persons: packageDetails.min_members, // Ensure persons start with the min_members from packageDetails
      }));
    }
  }, [packageDetails]);

  // Handle check-in date change
  const handleCheckinChange = (e) => {
    const newCheckinDate = e.target.value;

    // Calculate the checkout date as 3 days later
    const checkinDateObj = new Date(newCheckinDate);
    const checkoutDateObj = new Date(newCheckinDate);
    checkoutDateObj.setDate(checkinDateObj.getDate() + packageDetails?.days || 3);

    // Update state
    setBookingSummary((prev) => ({
      ...prev,
      checkinDate: formatDate(newCheckinDate),
      checkoutDate: formatDate(checkoutDateObj.toISOString().split('T')[0]),
    }));

    // Disable checkout input and show a toast notification
    setIsCheckoutDisabled(true);
    toast.success('The checkout date is automatically updated based on the package duration.');
  };

  // Re-enable checkout input if needed
  const enableCheckoutInput = () => {
    setIsCheckoutDisabled(false);
  };

  // Handle check-in input focus (disable checkout while selecting check-in)
  const handleCheckinFocus = () => {
    setIsCheckoutDisabled(true);
  };

  // Handle check-in input blur (enable checkout after selecting check-in)
  const handleCheckinBlur = () => {
    setIsCheckoutDisabled(false);
  };

  // Handle persons count change
  const increasePersons = () => {
    setBookingSummary((prev) => ({
      ...prev,
      persons: prev.persons + 1,
    }));
  };

  const decreasePersons = () => {
    setBookingSummary((prev) => ({
      ...prev,
      persons: Math.max(packageDetails?.min_members || 4, prev.persons - 1), // Ensure the persons count doesn't go below min_members
    }));
  };

  const NewBookingView = async () => {
    try {
      const travelStartDate = formatToInputDate(bookingSummary.checkinDate);
      const travelEndDate = formatToInputDate(bookingSummary.checkoutDate);
      const bookingData = {
        package_id: bookingSummary.package.id,  // Send package_id in the body
        travel_start_date: travelStartDate,    // The check-in date selected by the user
        travel_end_date: travelEndDate,  // The check-out date selected by the user
        number_of_travelers: bookingSummary.persons,    // The number of persons selected by the user
      };

      const response = await axios.post(
        `${process.env.REACT_APP_URL_SERVER}package/booking/`,
        bookingData,
        {
          headers: {
            Authorization: `Bearer ${authToken.access}`,
          },
        }
      );

      if (response.status === 201) {
        const bookingId = response.data.serializer.id;
        toast('Booking successfully created!');
        navigate(`/booking/billinginfo?bookingId=${encodeURIComponent(bookingId)}`);
      }
    } catch (error) {
      console.error('Error creating booking:', error.response?.data || error.message);
      alert('Failed to create booking. Please try again.');
    }
  };


  return (
    <>
      <div className="min-h-[22vh] bg-blue-200 flex items-end justify-center">
        <div className="w-full flex justify-center items-center gap-6 pb-4">
          {/* Check-in */}
          <div className="text-center">
            <p className="font-medium text-gray-700 mb-2">Check-in</p>
            <input
              type="date"
              value={formatToInputDate(bookingSummary.checkinDate)}
              onChange={handleCheckinChange}
              onFocus={handleCheckinFocus}
              onBlur={handleCheckinBlur}
              min={formatToInputDate(formatDate(currentDate))}
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Checkout */}
          <div className="text-center">
            <p className="font-medium text-gray-700 mb-2">Checkout</p>
            <input
              type="date"
              value={formatToInputDate(bookingSummary.checkoutDate)}
              readOnly={isCheckoutDisabled} // Disable the field
              className={`border border-gray-300 rounded-md p-2 focus:outline-none ${isCheckoutDisabled ? 'bg-gray-200 cursor-not-allowed' : 'focus:ring-2 focus:ring-blue-500'
                }`}
              onClick={() => toast.info('Checkout date is automatically calculated.')} // Notify user when clicked
            />
          </div>

          {/* Check Availability Button */}
          <div className="text-center mt-4">
            <button className="text-white bg-blue-500 font-semibold py-2 px-6 rounded-md transition duration-300 hover:bg-blue-600">
              Check Availability
            </button>
          </div>
        </div>
      </div>

      <div className="flex lg:justify-center gap-4 p-4">
        {/* Package Info Card */}
        <div className="flex relative text-white w-full lg:w-6/12 h-60 p-4 m-2 rounded-md bg-gray-100 shadow-md">
          {packageDetails && (
            <div>
              <h2 className="text-black">{packageDetails.title}</h2>
              <h5 className="text-black">
                {packageDetails.days} Days - {packageDetails.nights} Nights
              </h5>
              <p className="text-black">Food and Accommodation Included</p>
            </div>
          )}

          {/* Person Count and Price */}
          <div className="flex flex-col absolute bottom-5 right-5 text-md font-bold text-green-600">
            {/* Person Count */}
            <div className="flex items-center space-x-2 mb-2">
              <button
                className="bg-gray-300 text-black p-2 rounded-md"
                onClick={decreasePersons}
              >
                -
              </button>
              <span className="text-black">
                {bookingSummary.persons} Person{bookingSummary.persons > 1 ? 's' : ''}
              </span>
              <button
                className="bg-gray-300 text-black p-2 rounded-md"
                onClick={increasePersons}
              >
                +
              </button>
            </div>

            {/* Price */}
            {packageDetails && (
              <div className="m-0">
                <p className="text-3xl text-green-500 m-0">Rs {packageDetails.price}.00</p>
                <p className="text-black flex text-sm m-0">Price for One Person</p>
              </div>
            )}

            <div>
              <button
                className="flex items-center px-4 py-2 mt-2 bg-green-500 hover:bg-green-600 text-white font-medium text-sm rounded-lg shadow-md transition duration-300 ease-in-out"
                onClick={() => {
                  setBookingSummary((prev) => ({
                    ...prev,
                    package: packageDetails,
                  }));
                }}
              >
                Add Package
              </button>
            </div>
          </div>
        </div>

        {/* Booking Summary for Large Screens */}
        <div
          className="lg:block hidden lg:relative fixed bottom-0 left-0 w-full lg:w-72 h-auto lg:h-96 rounded-md bg-gray-100 shadow-md p-3 lg:mt-2 lg:p-3 flex flex-col"
        >
          <div className="text-center w-full flex flex-col">
            <p className="text-black text-md font-bold">Booking Summary</p>
            <hr className="my-2 border-t-2 border-gray-300 w-full" />

            {bookingSummary.package ? (
              <div className="text-left">
                <p className="text-black">
                  <strong>Package:</strong> {bookingSummary.package.title}
                </p>
                <p className="text-black">
                  <strong>Dates: </strong> {bookingSummary.checkinDate} - {bookingSummary.checkoutDate}
                </p>
                <p className="text-black">
                  <strong>Persons:</strong> {bookingSummary.persons}
                </p>
                <p className="text-black font-bold flex justify-end">
                  Rs {bookingSummary.package.price}
                </p>
                <hr />
                <p className="text-black font-bold flex justify-between">
                  <strong>Total Price:</strong> Rs{' '}
                  {bookingSummary.package.price * bookingSummary.persons}
                </p>
                <button
                  className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition duration-300"
                  onClick={NewBookingView}
                >
                  Book
                </button>
              </div>
            ) : (
              <div className="flex flex-col justify-center items-center h-full">
                <Inventory2Icon className="text-gray-500 mb-2" style={{ fontSize: '64px' }} />
                <h6 className="text-gray-500 text-lg">No Package Selected</h6>
              </div>
            )}
          </div>
        </div>

        {/* Booking Summary for Small Screens */}
        <div style={{ backgroundColor: "#224774" }} className="block lg:hidden fixed bottom-0 left-0 w-full shadow-md p-3 flex flex-col">
          {bookingSummary.package ? (
            <div style={{ backgroundColor: "#224774" }} className="flex justify-between items-center w-full px-4 py-2 fixed bottom-0 left-0 bg-gray-100 shadow-md">
              {/* Booking Info */}
              <div className="flex flex-col m-0">
                <span className="text-white text-2xl font-bold">
                  Rs {bookingSummary.package.price * bookingSummary.persons}.00
                </span>
                <span className="text-white text-sm">
                  {bookingSummary.persons} Person{bookingSummary.persons > 1 ? 's' : ''} |{' '} <br />
                  {bookingSummary.checkinDate} - {bookingSummary.checkoutDate} | <br />
                  {packageDetails.days} Days - {packageDetails.nights} Nights
                </span>
              </div>

              {/* Book Button */}
              <button
                className="bg-green-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-700 transition duration-300"
                onClick={NewBookingView}
              >
                Book
              </button>
            </div>

          ) : (
            <div className="flex flex-col justify-center items-center h-full">
              <Inventory2Icon className="text-gray-500 mb-2" style={{ fontSize: '20px' }} />
              <h6 className="text-gray-500 text-md">No Package Selected</h6>
            </div>
          )}
        </div>
      </div>

    </>
  );
};

export default BookingForm;

