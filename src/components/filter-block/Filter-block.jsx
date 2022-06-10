import PropTypes from "prop-types";
import BtnFilter from "../btn-filter/Btn-filter";

const FilterBlock = ({ changeFilter, filter }) => {
	return (
		<div className='filter-btns mb'>
			<BtnFilter active={filter === "all" ? true : false} changeFilter={changeFilter} filter={"all"}>
				All
			</BtnFilter>
			<BtnFilter active={filter === "active" ? true : false} changeFilter={changeFilter} filter={"active"}>
				Active
			</BtnFilter>
			<BtnFilter active={filter === "completed" ? true : false} changeFilter={changeFilter} filter={"completed"}>
				Completed
			</BtnFilter>
		</div>
	);
};

FilterBlock.propTypes = {
	changeFilter: PropTypes.func.isRequired,
	filter: PropTypes.string.isRequired,
};

export default FilterBlock;
