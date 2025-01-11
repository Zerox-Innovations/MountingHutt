import React from 'react'

const NewBooking = () => {

  const NewBookingView = async () => {

    const response = await axios.post(`${process.env.REACT_APP_URL_SERVER/package/booking/}`)
  }


  return (
    <div>



    </div>
  )
}

export default NewBooking