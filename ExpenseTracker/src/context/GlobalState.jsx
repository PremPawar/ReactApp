import React, { createContext, useReducer } from "react";
import AppReducer from './AppReducer'

//inital state
const initialState = {
    transactions: []
}

//Create context
export const GlobalContext = createContext(initialState);

//Provider Component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function deleteTrasaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTrasaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return(<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTrasaction,
        addTrasaction
    }}>
        {children}
    </GlobalContext.Provider>)
}