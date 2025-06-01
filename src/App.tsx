import { useEffect } from "react";
import css from "./App.module.css";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import SearchBox from "./components/SearchBox";
import { useAppDispatch } from "./hooks";
import { fetchContacts } from "./redux/contactsOps";
import Error from "./components/Error";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  });
  return (
    <div className={css.app}>
      <div className={css.phonebook}>
        <h1>Phonebook</h1>
        <ContactForm />
        <Error />
        <SearchBox />
        <ContactList />
      </div>
    </div>
  );
}

export default App;
