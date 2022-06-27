import "./button.scss";

const Button = ({ children, ...otherProps }) => {
	return <button {...otherProps}>{children}</button>;
};

export default Button;
