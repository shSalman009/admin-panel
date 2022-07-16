import React, { createContext, useContext, useReducer } from "react";

const Context = createContext();

export const useTheme = () => {
    return useContext(Context);
};

const initialstate = {
    darkMode: false,
};
const reducer = (state, action) => {
    switch (action.type) {
        case "LIGHT":
            return { darkMode: false };

        case "DARK":
            return { darkMode: true };

        case "TOGGLE":
            return { darkMode: !state.darkMode };
        default:
            return state;
    }
};

export default function ThemeProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialstate);
    return (
        <Context.Provider value={{ darkMode: state.darkMode, dispatch }}>
            {children}
        </Context.Provider>
    );
}
