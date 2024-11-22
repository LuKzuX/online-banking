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
    <div className="flex flex-col justify-center items-center">
    <h1 className="mt-10 text-4xl font-semibold">Signin</h1>
    <form className="mt-10 border-2 border-neutral-800 rounded-xl flex flex-col gap-8 items-center p-6">
      <input
        className="border-b p-2"
        placeholder="username"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      ></input>
      <input
        className="border-b p-2" 
        placeholder="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      ></input>
      <button onClick={handleSubmit}>Signup</button>
    </form>
  </div>
  )
}
