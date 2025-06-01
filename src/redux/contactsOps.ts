import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../axios";
import type { ContactModel } from "../model";

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async () => {
    const response = await axiosInstance.get("/");
    return response.data as ContactModel[];
});

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (contact: ContactModel) => {
        const response = await axiosInstance.post("/", contact);
        return response.data as ContactModel;
    },
);

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (id: string) => {
        await axiosInstance.delete(`/${id}`);
        return id;
    },
);
