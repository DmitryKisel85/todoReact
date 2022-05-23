import "./btn-edit.styles.css";

const BtnEdit = ({ modifyEditing }) => {
	return (
		<button className='btn-edit' id='btn-edit' data-state='closed' onClick={modifyEditing}>
			<i className='far fa-edit'></i>
		</button>
	);
};

export default BtnEdit;
