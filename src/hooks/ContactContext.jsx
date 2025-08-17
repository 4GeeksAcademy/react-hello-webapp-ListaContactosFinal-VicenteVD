import { createContext, useContext, useReducer, useEffect } from "react";
import { getContacts, createContact, updateContact, deleteContact } from "../api/contactsApi";

const ContactContext = createContext();

const initialState = {
    contacts: [],
    loading: true,
    error: null,
};

function reducer(state, action) {
    switch (action.type) {
        case "LOAD_CONTACTS":
            return { ...state, contacts: action.payload, loading: false };
        case "ADD_CONTACT":
            return { ...state, contacts: [...state.contacts, action.payload] };
        case "UPDATE_CONTACT":
            return {
                ...state,
                contacts: state.contacts.map(c => c.id === action.payload.id ? action.payload : c),
            };
        case "DELETE_CONTACT":
            return {
                ...state,
                contacts: state.contacts.filter(c => c.id !== action.payload),
            };
        case "ERROR":
            return { ...state, error: action.payload, loading: false };
        default:
            return state;
    }
}

export function ContactProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        getContacts()
            .then(data => dispatch({ type: "LOAD_CONTACTS", payload: data.contacts }))
            .catch(err => dispatch({ type: "ERROR", payload: err.message }));
    }, []);

    async function addContact(contact) {
        const newC = await createContact(contact);
        dispatch({ type: "ADD_CONTACT", payload: newC });
    }

    async function editContact(id, contact) {
        const updated = await updateContact(id, contact);
        dispatch({ type: "UPDATE_CONTACT", payload: updated });
    }

    async function removeContact(id) {
        await deleteContact(id);
        dispatch({ type: "DELETE_CONTACT", payload: id });
    }

    return (
        <ContactContext.Provider value={{ state, addContact, editContact, removeContact }}>
            {children}
        </ContactContext.Provider>
    );
}

export function useContacts() {
    return useContext(ContactContext);
}
