import { configureStore } from "@reduxjs/toolkit";

import todos from "../components/todoList/todosSlice";
import filter from "../components/filterBlock/filterSlice";

const store = configureStore({
	reducer: {
		todos: todos,
		filter: filter,
	},
	devTools: process.env.NODE_ENV !== "production",
});

export default store;
