import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
	todos: [],
	filteredTodos: [],
};

const todosSlice = createSlice({
	name: "todos",
	initialState,
	reducers: {
		addTodo: (state, action) => {
			state.todos.push(action.payload);
		},
		toggleCompleted: (state, action) => {
			state.todos.map((todo) => (todo.id === action.payload ? (todo.completed = !todo.completed) : todo));
		},
		editTodo: (state, action) => {
			state.todos.map((todo) => (todo.id === action.payload.id ? (todo.description = action.payload.updatedValue) : todo));
		},
		deleteTodo: (state, action) => {
			state.todos = state.todos.filter((todo) => {
				return action.payload !== todo.id;
			});
		},
	},
});

const { actions, reducer } = todosSlice;

export default reducer;

export const filteredTodosSelector = createSelector(
	(state) => state.filter.activeFilter,
	(state) => state.todos.todos,
	(filter, todos) => {
		switch (filter) {
			case "all":
				return todos;
			case "active":
				return todos.filter((todo) => !todo.completed);
			case "completed":
				return todos.filter((todo) => todo.completed);
			default:
				return todos;
		}
	}
);

export const { addTodo, toggleCompleted, editTodo, deleteTodo } = actions;
