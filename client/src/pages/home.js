import { useAuthContext } from "../context/authContext"
import { useEffect, useState } from "react"
import axios from "axios"
import { useGetCurrentUser } from "../hooks/useGetCurrentUser"

export const Home = () => {
  const { token } = useAuthContext()
  const { user } = useGetCurrentUser()
  return  <div className=''>
    <div className="">
      <h1>Your money:</h1>
    {user && user.balance}
    </div>
    
    </div>
}
