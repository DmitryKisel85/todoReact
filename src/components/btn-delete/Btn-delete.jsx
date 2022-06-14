import "./btn-delete.css";

const BtnDelete = ({ handleDelete }) => {
	// const handleClick = () => {
	// 	deleteTask(id);
	// 	setIsDeleting((prev) => !prev);
	// };

	return (
		<button className='btn-delete' id='btn-delete' onClick={handleDelete}>
			<i className='fas fa-times'></i>
		</button>
	);
};

export default BtnDelete;
