import PropTypes from "prop-types";

import "./btnClearBlock.css";

const BtnClearBlock = ({ handleClear, children }) => {
	return (
		<button className='btn-clear' onClick={handleClear}>
			{children}
		</button>
	);
};

BtnClearBlock.propTypes = {
	handleClear: PropTypes.func.isRequired,
	children: PropTypes.string.isRequired,
};

export default BtnClearBlock;
