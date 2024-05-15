import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export const useSignup = () => {
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const signup = async(username, password, phone) => {
    try {
      await axios.post('/bank/signup', {username, password, phone})
      navigate('/bank/signin')
    } catch (error) {
      setError(error.response.data)
    }
    return {signup, error}
  } 
}