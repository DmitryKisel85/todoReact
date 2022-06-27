import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
	todos: [],
};

const todosSlice = createSlice({
	name: "todosReducer",
	initialState,
	reducers: {
		addTodo: (state, action) => {
			state.todos.push(action.payload);
		},
		toggleCompleted: (state, action) => {
			const completedTodo = state.todos.find((todo) => todo.id === action.payload);
			completedTodo.completed = !completedTodo.completed;
		},
		editTodo: (state, action) => {
			const editedTodo = state.todos.find((todo) => todo.id === action.payload.id);
			editedTodo.description = action.payload.updatedValue;
		},
		deleteTodo: (state, action) => {
			state.todos = state.todos.filter((todo) => {
				return action.payload !== todo.id;
			});
		},
		clearAllTodos: (state, action) => {
			state.todos = [];
		},
		clearCompletedTodos: (state, action) => {
			state.todos = state.todos.filter((todo) => {
				return todo.completed === false;
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

export const { addTodo, toggleCompleted, editTodo, deleteTodo, clearAllTodos, clearCompletedTodos } = actions;
