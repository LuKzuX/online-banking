import { useEffect, useState } from "react";
import axios from "axios";
import { useGetContacts } from "../../hooks/useGetContacts";

export const Contacts = () => {
  const { contacts } = useGetContacts();

  return (<div>
    {contacts && contacts.map((el, index) => (
        <div key={el._id}>
            <p>{el.username}</p>
        </div>
    ))}
  </div>
  )
};
