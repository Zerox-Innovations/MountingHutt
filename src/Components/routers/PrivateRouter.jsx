import React from 'react'
import { useAuth } from '../Context/AuthContext'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {

  const { contextState } = useAuth();
  const { user } = contextState()

  return (
    <>
          {
             !user? <Navigate to= '/login' />: children
          }
    </>
  )
}

export default PrivateRoute                                   