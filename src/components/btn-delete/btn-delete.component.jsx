import "./btn-delete.styles.css";

const BtnDelete = ({ id, deleteTask }) => {
	return (
		<button className='btn-delete' id='btn-delete' onClick={() => deleteTask(id)}>
			<i className='fas fa-times'></i>
		</button>
	);
};

export default BtnDelete;
