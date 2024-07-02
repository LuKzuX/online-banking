import { useAuthContext } from "../context/authContext"
import { useEffect, useState } from "react"
import axios from "axios"

export const useGetCurrentUser = () => {
  const { token } = useAuthContext()
  const [user, setUser] = useState(null)

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("/bank/home", {
          headers: {
            Authorization: `Bearer ${token.data.token}`,
          },
        })
        setUser(res.data)
      } catch (error) {
        console.log(error)
      } 
    }
    getData()
  }, [token])

  return { user }
}

