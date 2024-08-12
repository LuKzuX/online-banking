import axios from "axios";
import { useAuthContext } from "../context/authContext";

export const usePayContact = () => {
  const { token } = useAuthContext();

  const payContact = async (phone, value) => {
    try {
      const res = await axios.post(
        `/bank/pay-contact/${phone}`,
        { value },
        {
          headers: {
            Authorization: `Bearer ${token.data.token}`,
          },
        }
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return { payContact };
};
