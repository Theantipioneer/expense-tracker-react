import {React,  createContext, useReducer } from 'react';
import AppReducer from './AppReducer';


// INITIAL STATE
const initialState = {
    transactions: [
        
    ],
};

// CREATE CONTEXT
export const GlobalContext = createContext(initialState)

// GLOBAL PROVIDER

// In the provider we need to be able to change state thus we bring in the reducer function. 
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

//ACTIONS
// Actions take in dispatch func that take in an object. 

// Delete transaction action
const deleteTransaction = (id) => {
    dispatch(
        {
        type: 'DELETE_TRANSACTION', 
        payload: id
    }
    );
};
// Add transaction action
const addTransaction = (transaction) => {
    dispatch(
        {
        type: 'ADD_TRANSACTION', 
        payload: transaction
    }
    )
};

// The value prop takes in an object, hence the double{}.So we want the tranactions object and to access is values we say state.transactions.
    return (
        <GlobalContext.Provider value = {{transactions: state.transactions, deleteTransaction, addTransaction}}>
            {children}
        </ GlobalContext.Provider>
    )
}