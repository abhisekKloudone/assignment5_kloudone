export const StateReducer = (state, action) => {
	switch (action.type) {
		case "SET_QUESTION":
			return {
				...state,
				questions: [state.questions, { ...action.payload, qty: 1 }],
			};

		default:
			return state;
	}
};
