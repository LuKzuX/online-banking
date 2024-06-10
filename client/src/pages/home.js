import { useAuthContext } from "../context/authContext"
import { useEffect, useState } from "react"
import axios from "axios"
import { useHomepage } from "../hooks/useHomepage"

export const Protected = () => {
  const { token } = useAuthContext()
  const { user } = useHomepage()
  return <div className=''>{user && console.log(user.balance)}</div>
}
