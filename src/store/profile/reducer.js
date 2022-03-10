import { TOGGLE_VISIBLE_PROFILE, UPDATE_PROFILE } from "./types";

const InitialState = {
	firstName: "User",
	lastName: "",
	isVisible: true,
};

export const profileReducer = (state = InitialState, action) => {
	switch (action.type) {
		case TOGGLE_VISIBLE_PROFILE:
			return { ...state, isVisible: !state.isVisible };
		case UPDATE_PROFILE:
			return { ...state, ...action.payload };
		default:
			return state;
	}
};
