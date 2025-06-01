import { createSlice } from "@reduxjs/toolkit";
import type { ContactModel } from "../model";
import { addContact, deleteContact, fetchContacts } from "./contactsOps";

export const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        items: [] as ContactModel[],
        loading: false,
        error: null as string | null,
    },
    reducers: {
        dismissError: (state) => {
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.items = action.payload;
                state.loading = false;
            })
            .addCase(fetchContacts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message!;
            })
            .addCase(addContact.pending, (state) => {
                state.loading = true;
            })
            .addCase(addContact.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(addContact.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message!;
            })
            .addCase(deleteContact.pending, (state) => {
                state.loading = true;
            })
            .addCase(deleteContact.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(deleteContact.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message!;
            });
    },
});

export const { dismissError } = contactsSlice.actions;
export default contactsSlice.reducer;
