import { useNavigate } from 'react-router-dom'

export const Main = () => {

  const navigate = useNavigate()

  return ( 
    <div className="">
      <button onClick={() => {
        navigate('/signup')
      }}>Signup</button>
      <button onClick={() => {
        navigate('/signin')
      }}>Signin</button>
    </div>
   );
}
 
