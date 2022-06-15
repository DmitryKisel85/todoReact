import InputTodo from "../inputTodo/InputTodo";
import TodosCounter from "../todosCounter/TodosCounter";
import FilterBlock from "../filterBlock/FilterBlock";
import ClearBlock from "../clearBlock/ClearBlock";
import TodoList from "../todoList/TodoList";

import "./mainBlock.css";

import { motion } from "framer-motion";

const MainBlock = () => {
	return (
		<motion.main layout className='main'>
			<InputTodo />
			<TodoList />
			<TodosCounter />
			<FilterBlock />
			<ClearBlock />
		</motion.main>
	);
};

export default MainBlock;
