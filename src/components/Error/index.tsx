import { useAppDispatch, useAppSelector } from "../../hooks";
import { dismissError } from "../../redux/contactsSlice";
import { selectError } from "../../redux/store-typed";
import css from "./Error.module.css";

export default function Error() {
  const dispatch = useAppDispatch();
  const error = useAppSelector(selectError);
  return error ? (
    <div className={css.error}>
      {error}
      <button
        type="button"
        className={css.dismiss}
        onClick={() => {
          dispatch(dismissError());
        }}
      >
        &times;
      </button>
    </div>
  ) : null;
}
