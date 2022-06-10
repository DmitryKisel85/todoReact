import "./btn-edit.css";

const BtnEdit = ({ modifyEditing }) => {
	return (
		<button className='btn-edit' onClick={modifyEditing}>
			<i className='far fa-edit'></i>
		</button>
	);
};

export default BtnEdit;
