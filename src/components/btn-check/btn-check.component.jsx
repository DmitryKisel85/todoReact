import "./btn-check.styles.css";

const BtnCheck = ({ toggleEditing }) => {
	return (
		<button className='btn-edit' id='btn-edit' data-state='closed' onClick={toggleEditing}>
			<i className='fas fa-check'></i>
		</button>
	);
};

export default BtnCheck;
