import "./btnFilterBlock.css";

const BtnFilterBlock = ({ children, handleChangeFilter, filter, active }) => {
	return (
		<button className={`btn_generalStyle btn-filter ${active ? "btn-filter_active" : ""}`} onClick={() => handleChangeFilter(filter)}>
			{children}
		</button>
	);
};

export default BtnFilterBlock;
