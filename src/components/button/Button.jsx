import PropTypes from "prop-types";

import "./button.scss";

const Button = ({ children, onClick, className }) => {
	return (
		<button onClick={onClick} className={className}>
			{children}
		</button>
	);
};

Button.propTypes = {
	children: PropTypes.node,
	onClick: PropTypes.func,
	className: PropTypes.string,
};

export default Button;
