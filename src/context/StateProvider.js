import React, { createContext, useReducer, useContext } from "react";
import { StateReducer } from "./StateReducer";

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
	const initialState = {
		questions: [],
	};

	const [state, dispatch] = useReducer(StateReducer, initialState);
	return (
		<StateContext.Provider value={{ state, dispatch }}>
			{children}
		</StateContext.Provider>
	);
};

export const useStateContext = () => {
	return useContext(StateContext);
};
