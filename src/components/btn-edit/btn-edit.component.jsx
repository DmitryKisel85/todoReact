import "./btn-edit.styles.css";

const BtnEdit = ({ toggleEditing }) => {
	return (
		<button className='btn-edit' id='btn-edit' data-state='closed' onClick={toggleEditing}>
			<i className='far fa-edit'></i>
		</button>
	);
};

export default BtnEdit;
