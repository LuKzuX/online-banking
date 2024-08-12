import { useEffect, useState } from "react";
import axios from "axios";
import { FaPhoneAlt } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { usePayContact } from "../../hooks/usePayContact";
import { useParams } from "react-router-dom";

export const PayContact = () => {
  const { phone } = useParams();
  const [value, setValue] = useState(null);
  const { payContact } = usePayContact();

  return (
    <div className="mt-20">
      <input
        name="value"
        onChange={(e) => setValue(e.target.value)}
        type="number"
        placeholder="value to send"
      ></input>
      <button onClick={() => payContact(phone, value)}>Send</button>
    </div>
  );
};
