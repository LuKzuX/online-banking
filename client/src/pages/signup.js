import { useSignup } from "../hooks/useSignup"
import { useState } from "react"

export const Signup = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [phone, setPhone] = useState("")
  return (
    <div className=''>
      <form className=''>
        <input
          placeholder='username'
          onChange={(e) => {
            setUsername(e.target.value)
          }}
        ></input>
        <input
          placeholder='password'
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        ></input>
        <input
          placeholder='phone'
          onChange={(e) => {
            setPhone(e.target.value)
          }}
        ></input>
      </form>
    </div>
  )
}
