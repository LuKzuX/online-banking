import { useAuthContext } from "../context/authContext";
import { useEffect, useState } from "react";
import axios from "axios";

export const useGetContacts = () => {
  const [contacts, setContacts] = useState("");
  const { token } = useAuthContext();

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("/bank/contacts", {
          headers: {
            Authorization: `Bearer ${token.data.token}`,
          },
        });
        setContacts(res.data);
        
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [token]);

  return { contacts };
};
