import PropTypes from "prop-types";

import "./btnClearBlock.scss";

const BtnClearBlock = ({ handleClear, children }) => {
	return (
		<button className='btn_generalStyle btn-clear' onClick={handleClear}>
			{children}
		</button>
	);
};

BtnClearBlock.propTypes = {
	handleClear: PropTypes.func.isRequired,
	children: PropTypes.string.isRequired,
};

export default BtnClearBlock;
