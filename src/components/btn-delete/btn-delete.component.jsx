import "./btn-delete.styles.css";

const BtnDelete = ({ id, deleteTask, setIsDeleting }) => {
	const handleClick = () => {
		deleteTask(id);
		setIsDeleting((prev) => !prev);
	};

	return (
		<button className='btn-delete' id='btn-delete' onClick={handleClick}>
			<i className='fas fa-times'></i>
		</button>
	);
};

export default BtnDelete;
