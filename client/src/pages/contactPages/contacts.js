import { useEffect, useState } from "react";
import axios from "axios";
import { useGetContacts } from "../../hooks/useGetContacts";
import { FaPhoneAlt } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { useAuthContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";

export const Contacts = () => {
  const { token } = useAuthContext();
  const { contacts } = useGetContacts();
  const navigate = useNavigate()

  const deleteContact = async (phone) => {
    try {
      await axios.delete(`/bank/contacts/${phone}`,  {
        headers: {
          Authorization: `Bearer ${token.data.token}`,
        },
      })
    } catch (error) {
      console.log(error);
      
    }
  }

  return (
    <div className="min-h-screen bg-neutral-100 p-6">
      {contacts &&
        contacts.map((el, index) => (
          <div
            className="bg-white border-2 rounded-xl py-3 px-6 flex flex-col text-2xl gap-1"
            key={el._id}
          >
            <div className="flex items-center gap-3">
              <IoPersonSharp />
              <p>{el.username}</p>
            </div>
            <div className="flex items-center gap-3 text-xl">
              <FaPhoneAlt />
              <p>{el.phone}</p>
            </div>
            <div className="flex items-center gap-3 text-lg mt-2 justify-center">
              <button className="bg-green-500 text-white px-3 py-1 rounded-xl border-green-200 border-2" onClick={() => navigate(`/bank/pay-contact/${el.phone}`)}>Send money</button>
              <button className="bg-red-500 text-white px-3 py-1 rounded-xl border-red-200 border-2" onClick={() => deleteContact(el.phone)}>delete contact</button>
            </div>
          </div>
        ))}
    </div>
  );
};
