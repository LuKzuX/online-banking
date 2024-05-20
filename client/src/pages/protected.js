import { AuthContext } from "../context/authContext";
import { useContext } from "react";
import {useEffect} from "react"


export const Protected = () => {
  const {token} = useContext(AuthContext)
  return ( 
    <div className="">{console.log(token)}
    {token && <div className="">WELCOME</div>}
    </div>

   );
}
 