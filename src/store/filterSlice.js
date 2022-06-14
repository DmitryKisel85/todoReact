import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	activeFilter: "all",
};

const filterSlice = createSlice({
	name: "filterReducer",
	initialState,
	reducers: {
		activeFilterChanged(state, action) {
			state.activeFilter = action.payload;
		},
	},
});

const { actions, reducer } = filterSlice;

export default reducer;
export const { activeFilterChanged } = actions;
