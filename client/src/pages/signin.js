import { useState } from "react"
import { useSignin } from "../hooks/useSignin"

export const Signin = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const {signin} = useSignin()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await signin(username, password)
  }


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
        <button onClick={handleSubmit}>signin</button>
      </form>
    </div>
  )
}
