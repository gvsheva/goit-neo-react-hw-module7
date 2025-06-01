import {
    combineSlices,
    configureStore,
    createSelector,
} from "@reduxjs/toolkit";
import { contactsSlice } from "./contactsSlice";
import { filtersSlice } from "./filtersSlice";

export const rootReducer = combineSlices(contactsSlice, filtersSlice);

const store = configureStore({
    reducer: rootReducer,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const selectSelf = (state: RootState) => state;
export const selectContacts = createSelector(selectSelf, (state) =>
    [...state.contacts.items].reverse(),
);
export const selectLoading = createSelector(
    selectSelf,
    (state) => state.contacts.loading,
);
export const selectError = createSelector(
    selectSelf,
    (state) => state.contacts.error,
);
export const selectNameFilter = createSelector(
    selectSelf,
    (state) => state.filters.name,
);
export const selectFilteredContacts = createSelector(
    [selectContacts, selectNameFilter],
    (contacts, filter) => {
        if (!filter.trim()) {
            return contacts;
        }
        return contacts.filter((contact) =>
            contact.name.toLocaleLowerCase().includes(filter),
        );
    },
);
