import { useAuthContext } from "../context/authContext"
import { useEffect, useState } from "react"
import axios from "axios"
import { useGetCurrentUser } from "../hooks/useGetCurrentUser"

export const Home = () => {
  const { token } = useAuthContext()
  const { user } = useGetCurrentUser()
  return  <div className=''>{user && user.balance}</div>
}
