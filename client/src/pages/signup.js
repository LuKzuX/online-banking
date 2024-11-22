import { useSignup } from "../hooks/useSignup";
import { useState } from "react";

export const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const { signup } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(username, password, phone);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="mt-10 text-4xl font-semibold">Signup</h1>
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
        <input
          className="border-b p-2"
          placeholder="phone"
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        ></input>
        <button onClick={handleSubmit}>Signup</button>
      </form>
    </div>
  );
};
