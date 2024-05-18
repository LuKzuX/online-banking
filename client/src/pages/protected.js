import { useAuthContext } from "../context/authContext"

export const Protected = () => {
  const {token} = useAuthContext()
  return ( 
    <div className="">{console.log(token)}
    {token && <div className="">WELCOME</div>}
    </div>

   );
}
 