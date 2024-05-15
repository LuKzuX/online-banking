import axios from "axios"

export const useSignin = () => {

  const signin = async (username, password) => {
    try {
      const res = await axios.post('/bank/signin', {username, password})
      localStorage.setItem('user', JSON.stringify(res))
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
  return {signin}
}