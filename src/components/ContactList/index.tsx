import css from "./ContactList.module.css";
import { useAppSelector } from "../../hooks";
import { Contact } from "../Contact";
import { selectFilteredContacts, selectLoading } from "../../redux/store-typed";

export default function ContactList() {
  const contacts = useAppSelector(selectFilteredContacts);
  const loading = useAppSelector(selectLoading);

  return (
    <div className={css.contactListContainer}>
      {loading && <div className={css.loadingOverlay}>Loading...</div>}
      <ul className={css.contactList}>
        {contacts.map((c) => (
          <li key={c.id}>
            <Contact contact={c} />
          </li>
        ))}
      </ul>
    </div>
  );
}
