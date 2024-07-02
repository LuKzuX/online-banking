import { useNavigate } from 'react-router-dom'
import mainImage from "../images/main-image.avif"
export const Main = () => {

  const navigate = useNavigate()

  return ( 
    <div className="">
      <img src={mainImage} className='brightness-50 blur-sm relative'></img>
      <button onClick={() => {
        navigate('/signup')
      }}>Signup</button>
      <button onClick={() => {
        navigate('/signin')
      }}>Signin</button>
    </div>
   );
}
 
