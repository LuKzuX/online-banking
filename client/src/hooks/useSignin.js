import axios from "axios"
import {useNavigate} from 'react-router-dom'
import { AuthContext } from "../context/authContext"
import { useContext } from "react"

export const useSignin = () => {
  const {token, setToken} = useContext(AuthContext)
  const navigate = useNavigate()

  const signin = async (username, password) => {
    try {
      const res = await axios.post('/bank/signin', {username, password})
      setToken(res)
      localStorage.setItem('user', JSON.stringify(token))
      navigate('/protected')
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
  return {signin}
}