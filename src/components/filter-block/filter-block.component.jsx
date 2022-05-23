import BtnFilter from "../btn-filter/btn-filter.component";

import "./filter-block.styles.css";

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

export default FilterBlock;
