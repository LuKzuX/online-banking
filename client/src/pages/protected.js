import { useAuthContext } from "../context/authContext"
import { useEffect, useState } from "react"
import axios from "axios"

export const Protected = () => {
  const { token } = useAuthContext()
  const [user, setUser] = useState(null)

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("/bank/protected", {
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
  return (
    <div className=''>
      {user && console.log(user)}
      {user && (
        <div className=''>
          <p>sss</p>
        </div>
      )}
    </div>
  )
}
