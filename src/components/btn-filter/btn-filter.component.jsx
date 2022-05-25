import "./btn-filter.styles.css";

const BtnFilter = ({ children, active, changeFilter, filter }) => {
	return (
		<button className={`btn-filter ${active ? "btn-filter_active" : ""}`} onClick={() => changeFilter(filter)}>
			{children}
		</button>
	);
};

export default BtnFilter;
