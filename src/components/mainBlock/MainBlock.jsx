import InputTodo from "@components/inputTodo";
import TodosCounter from "@components/todosCounter";
import FilterBlock from "@components/filterBlock";
import ClearBlock from "@components/clearBlock";
import TodoList from "@components/todoList";

import "./mainBlock.scss";

const MainBlock = () => {
	return (
		<main className='main'>
			<InputTodo />
			<TodoList />
			<TodosCounter />
			<FilterBlock />
			<ClearBlock />
		</main>
	);
};

export default MainBlock;
