import "./todo-elem.styles.css";

const TodoElem = ({ todo: { completed, id, description }, toggleCompleted, deleteTask }) => {
	return (
		<li className={`todo-item ${completed ? "checked" : ""}`} key={id}>
			<input type='checkbox' id={`btn-complete-${id}`} className={`btn-complete ${completed ? "checked" : ""}`} onChange={() => toggleCompleted(id)} defaultChecked={completed ? true : false} />

			<label htmlFor={`btn-complete-${id}`}></label>
			<textarea id='input-description' className='description' data-autoresize rows='1' readOnly value={description}></textarea>
			<button className='btn-edit' id='btn-edit' data-state='closed'>
				<i className='far fa-edit'></i>
			</button>
			<button className='btn-delete' id='btn-delete' onClick={() => deleteTask(id)}>
				<i className='fas fa-times'></i>
			</button>
		</li>
	);
};

export default TodoElem;
