import { Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';
// import { Visa } from "react-pay-icons";
// import { Mastercard } from "react-pay-icons";
// import { Diners } from "react-pay-icons";
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';


const Checkout = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const bookingId = queryParams.get('bookingId'); // Extracts bookingId from ?bookingId=123
  const [bookingDetails, setBookingDetails] = useState(null);
  console.log(bookingDetails, '00000000');
  const { contextState } = useAuth()
  const { authToken , formData, updateFormData  } = contextState;
  const navigate = useNavigate()
  console.log(formData);
  

   // Handle form input changes
   const handleFormChange = (e) => {
    const { name, value } = e.target;
    console.log('Form Data Before Update:', formData);  // Log before
    updateFormData({ [name]: value });  // Update the context state
    console.log('Form Data After Update:', formData);  // Log after
  };
  


  useEffect(() => {
    const fetchBookingDetails = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_URL_SERVER}package/checkout/?booking_id=${bookingId}`,
          {
            headers: {
              Authorization: `Bearer ${authToken.access}`, // Include auth header if needed
            },
          }
        );
        setBookingDetails(response.data); // Save data to state
        console.log('Package Details:', response.data);
      } catch (error) {
        console.error('Error fetching booking details:', error);
      }
    };

    if (bookingId) fetchBookingDetails(); // Ensure bookingId exists before calling the API
  }, [bookingId]);

  const handleBookNow = () => {
    navigate('/payment-view', { state: { formData, bookingId } }); // Pass data via state
  };



  return (
    <>
      <div className="min-h-[10vh] bg-blue-200"></div>

      {/* Responsive Checkout Section */}
      <div className="grid grid-cols-1 md:grid-cols-[1.7fr_0.7fr] gap-4 max-w-7xl mx-auto mt-4 px-4">
        {/* Booking Summary (Left on large screens, Top on smaller screens) */}
        <div className="h-auto p-4 border-2 border-slate-300 md:order-1 order-2 self-start">
          <p className="font-bold text-xl text-center">Your Booking Summary</p>
          <hr />
          {bookingDetails ? (
            <div className="p-1 space-y-2">
              <p className="text-lg">{bookingDetails.package_data?.title || 'N/A'}</p>
              <p className="text-sm">
                <LocalPhoneIcon /> 9876543210
              </p>
              <p className="text-sm">
                <EmailIcon /> reservations@mountinghutt.in
              </p>
              <hr />
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-start">
                  <p className="text-sm font-medium">Check-In</p>
                  <h6 className="text-lg">{bookingDetails.travel_start_date}</h6>
                </div>
                <div className="flex flex-col items-start">
                  <p className="text-sm font-medium">Check-Out</p>
                  <h6 className="text-lg">{bookingDetails.travel_end_date}</h6>
                </div>
              </div>
              <hr />
              <p>
                <span className="font-semibold">Duration:</span>{' '}
                {bookingDetails.package_data?.days}D/{bookingDetails.package_data?.nights}N
              </p>
              <p>
                <span className="font-semibold">Total Persons:</span>{' '}
                {bookingDetails.number_of_travelers}
              </p>
              <hr />
              <div className="flex justify-between">
                <div className="flex flex-col">
                  <p>
                    <span className="font-semibold">Total Room Charges</span>
                  </p>
                  <p>
                    <span className="font-semibold">Total Price (Inc. Of Taxes)</span>
                  </p>
                  <p>
                    <span className="font-semibold">Total Payable Now</span>
                  </p>
                  <p>
                    <span className="font-semibold">Amount Due at Check-in</span>
                  </p>
                </div>
                <div className="flex flex-col items-end">
                  <p>Rs {bookingDetails.total_amount}.00</p>
                  <p>Rs {bookingDetails.total_amount}.00</p>
                  <p>Rs {bookingDetails.advance_amount}.00</p>
                  <p>Rs {bookingDetails.balance_amount}.00</p>
                </div>
              </div>
              <div className="p-3 mt-2 bg-blue-500 text-white font-semibold text-lg rounded-xl shadow-lg transform transition-all hover:scale-105">
                <div className="flex justify-between items-center">
                  <p className="text-white text-xl">Pay Now</p>
                  <p className="text-white text-3xl">Rs {bookingDetails.advance_amount}.00</p>
                </div>
              </div>
              <div className="relative w-full max-w-sm mt-2">
                <input
                  type="text"
                  placeholder="Enter Promotional Code"
                  className="w-full py-2 px-4 pr-16 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="absolute top-0 right-0 h-full px-4 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 focus:outline-none">
                  Apply
                </button>
              </div>
            </div>
          ) : (
            <p className="text-center text-gray-500">No booking details available.</p>
          )}
        </div>

        {/* Guest Information (Right on large screens, Below on smaller screens) */}
        <div className="h-auto p-4 border-2 border-slate-300 md:order-2 order-1">
          <p className="font-bold text-2xl mb-4 text-blue-500">Guest Information</p>
          {/* Guest Name Fields */}
          <div className="mb-4">
            <Typography className="block mb-2 font-medium">Guest Name</Typography>
            <div className="flex flex-wrap gap-3">
              {/* Salutation Dropdown */}
              <select
                className="border rounded-md p-2 w-full md:w-24"
                defaultValue=""
                name='salutation'
                value={formData.salutation}
                onChange={handleFormChange}
                required
              >
                <option value="" disabled>
                  Select
                </option>
                <option value="Mr">Mr</option>
                <option value="Ms">Ms</option>
                <option value="Mrs">Mrs</option>
              </select>
              <input
                type="text"
                placeholder="First Name"
                className="border rounded-md p-2 flex-1 w-full md:w-auto"
                name="firstName"
                value={formData.firstName}
                onChange={handleFormChange}
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border rounded-md p-2 flex-1 w-full md:w-auto"
                name="lastName"
                value={formData.lastName}
                onChange={handleFormChange}
                required
              />
            </div>
          </div>


          <div className="mb-4 flex flex-wrap gap-4 items-center">
            <div className="flex-1 min-w-full md:min-w-[200px]">
              <Typography className="block mb-2 font-medium">Mobile</Typography>
              <input
                type="text"
                placeholder="Enter Mobile Number"
                className="border rounded-md p-2 w-full"
                name="mobile"
                value={formData.lastName}
                onChange={handleFormChange}
                required
              />
            </div>
            <div className="flex-1 min-w-full md:min-w-[200px]">
              <Typography className="block mb-2 font-medium">Email</Typography>
              <input
                type="email"
                placeholder="Enter Email Address"
                className="border rounded-md p-2 w-full"
                name="email"
                value={formData.email}
                onChange={handleFormChange}
                required
              />
            </div>
          </div>

          <hr />
          <button className="bg-blue-500 p-3 font-bold w-full mb-4">Online Payment</button>
          <hr />
          <p className="text-gray-700 text-lg font-medium mb-4">
            You will be redirected to our secure online payment site.
          </p>
          <div className="text-gray-800 font-semibold mb-2">
            <p>Cards/UPIs accepted at Payment Gateway: Visa MasterCard Diners</p>
          </div>
          <div className="mt-4">
            <h4 className="text-blue-500">Our Policy & Booking Conditions</h4>
            <div className="mt-2 text-gray-700 text-md max-w-3xl ">
              <ul className="list-disc space-y-2">
                <li>
                  Any booking cancellation requested 7 days prior to the check-in date, 80% of the booking
                  amount will be refunded (20% of the amount will be incurred for cancellation and bank
                  processing charge).
                </li>
                <li>
                  Customers can have a credit to reschedule the booking to a future date. Note: Any
                  rescheduling is only allowed once, and the booking date should be within 90 days from the
                  date of cancellation. The booking confirmation is subject to availability.
                </li>
                <li>
                  Any booking cancellation requested 3 days prior to the check-in date, 70% of the booking
                  amount will be refunded.
                </li>
                <li>
                  Customers can have a credit to reschedule the booking to a future date. Note: Any
                  rescheduling is only allowed once, and the booking date should be within 90 days from the
                  date of cancellation. The booking confirmation is subject to availability.
                </li>
                <li>
                  Any booking cancellation requested 48 hours prior to the check-in date.
                  Customers can have a credit to reschedule the booking for a future date, and no refund can
                  be processed as per this policy.
                </li>
                <li>
                  Note: Any rescheduling is only allowed once, and the booking date should be within 90 days
                  from the date of cancellation. The booking confirmation is subject to availability.
                </li>
                <li>
                  Any booking cancellation requested within 24 hours of the check-in date, no refund or
                  rescheduling is allowed if the cancellation request is received within 24 hours from the
                  check-in date.
                </li>
              </ul>
            </div>

            <div class="flex items-center">
              <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label for="link-checkbox" class="ms-2 text-sm font-medium text-black dark:text-gray-300">I acknowledge and accept the Terms of Cancellation Policy</label>
            </div>
          </div>
          <div className="flex justify-end gap-2 mt-4">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none">
              Review Your Booking
            </button>
            <button
              onClick={() => {
                window.location.href = `/payment-view?bookingId=${bookingId}`;
              }}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>


    </>
  );
};

export default Checkout;
