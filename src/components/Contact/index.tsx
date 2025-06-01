import { FaPhone, FaUser } from "react-icons/fa";
import { useAppDispatch } from "../../hooks";
import type { ContactModel } from "../../model";
import css from "./Contact.module.css";
import { deleteContact, fetchContacts } from "../../redux/contactsOps";

export function Contact({ contact: c }: { contact: ContactModel }) {
  const dispatch = useAppDispatch();
  const handleClick = (id: string) => {
    dispatch(deleteContact(id)).then(() => {
      dispatch(fetchContacts());
    });
  };
  return (
    <div className={css.contact}>
      <div>
        <p>
          <FaUser /> {c.name}
        </p>
        <p>
          <FaPhone /> {c.number}
        </p>
      </div>
      <button onClick={() => handleClick(c.id)}>Delete</button>
    </div>
  );
}
