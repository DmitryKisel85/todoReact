import "./btn-check.css";

const BtnCheck = ({ modifyEditing }) => {
	return (
		<button className='btn-edit' onClick={modifyEditing}>
			<i className='fas fa-check'></i>
		</button>
	);
};

export default BtnCheck;
