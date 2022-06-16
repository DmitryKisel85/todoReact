import PropTypes from "prop-types";

import "./btnFilterBlock.scss";

const BtnFilterBlock = ({ children, handleChangeFilter, filter, active }) => {
	return (
		<button className={`btn_generalStyle btn-filter ${active ? "btn-filter_active" : ""}`} onClick={() => handleChangeFilter(filter)}>
			{children}
		</button>
	);
};

BtnFilterBlock.propTypes = {
	children: PropTypes.string.isRequired,
	handleChangeFilter: PropTypes.func.isRequired,
	filter: PropTypes.string.isRequired,
	active: PropTypes.bool.isRequired,
};

export default BtnFilterBlock;
