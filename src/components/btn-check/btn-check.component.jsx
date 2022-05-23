import "./btn-check.styles.css";

const BtnCheck = ({ modifyEditing }) => {
	return (
		<button className='btn-edit' id='btn-edit' data-state='closed' onClick={modifyEditing}>
			<i className='fas fa-check'></i>
		</button>
	);
};

export default BtnCheck;
