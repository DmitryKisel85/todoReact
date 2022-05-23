import "./btn-filter.styles.css";

const BtnFilter = ({ children, active, changeFilter, filter }) => {
	const filterOperations = () => {
		changeFilter(filter);
	};

	return (
		// <button className={`btn-filter ${active ? "btn-filter_active" : ""}`} onClick={() => changeFilter(filter)}>
		<button className={`btn-filter ${active ? "btn-filter_active" : ""}`} onClick={() => filterOperations()}>
			{children}
		</button>
	);
};

export default BtnFilter;
