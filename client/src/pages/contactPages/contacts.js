import { useEffect, useState } from "react";
import axios from "axios";
import { useGetContacts } from "../../hooks/useGetContacts";
import { FaPhoneAlt } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { useAuthContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import { IoIosAdd } from "react-icons/io";

export const Contacts = () => {
  const { token } = useAuthContext();
  const { contacts, refreshContacts } = useGetContacts();
  const navigate = useNavigate();
  const [addContactArea, setAddContactArea] = useState(false);
  const [phone, setPhone] = useState("");

  const deleteContact = async (phone) => {
    try {
      await axios.delete(`/bank/contacts/${phone}`, {
        headers: {
          Authorization: `Bearer ${token.data.token}`,
        },
      });
      refreshContacts();
    } catch (error) {
      console.log(error);
    }
  };

  const addContact = async (phone) => {
    try {
      await axios.post(
        "/bank/add-contact",
        { phone },
        {
          headers: {
            Authorization: `Bearer ${token.data.token}`,
          },
        }
      );
      refreshContacts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-100 p-6">
      <div className="flex justify-center bg-white border-2 rounded-xl py-3 px-6 mb-10">
        {!addContactArea && (
          <div>
            <IoIosAdd
              onClick={() => setAddContactArea(!false)}
              className="border-2 border-neutral-700 rounded-[100%]"
              size={80}
            />
          </div>
        )}
        {addContactArea && (
          <div className="flex items-center justify-around">
            <input
            className="border-b-2 w-[40%]"
              onChange={(e) => setPhone(e.target.value)}
              type="text"
              placeholder="contact number"
            ></input>
            <button
              className="py-1 px-3 border-2 rounded-xl bg-yellow-500 border-yellow-200 text-white"
              onClick={() => {
                setAddContactArea(!true);
                addContact(phone);
              }}
            >
              add contact
            </button>
          </div>
        )}
      </div>
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
              <button
                className="bg-green-500 text-white px-3 py-1 rounded-xl border-green-200 border-2"
                onClick={() => navigate(`/bank/pay-contact/${el.phone}`)}
              >
                Send money
              </button>
              <button
                className="bg-red-500 text-white px-3 py-1 rounded-xl border-red-200 border-2"
                onClick={() => deleteContact(el.phone)}
              >
                delete contact
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};
