import axios from 'axios'
import React, { useEffect } from 'react'
import { useAuth } from '../../Context/AuthContext'

const BookingHistory = () => {

  const { contextState } = useAuth()
  const { authToken } = contextState

  useEffect(()=> {

    const handleSubmit = async (e) => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_URL_SERVER}package/bookings/`, {
          headers: {
            Authorization: `Bearer ${authToken.access}`,
          },
        })
        console.log(response.data);
      } catch (error) {
          console.log(error);
      }
      
    }
    handleSubmit()
  },[])

  return (
    <div>



    </div>
  )
}

export default BookingHistory