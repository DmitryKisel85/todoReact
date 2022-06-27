import { useDispatch, useSelector } from "react-redux";
import { activeFilterChanged } from "@store/filterSlice";

import Button from "@components/button";

const FilterBlock = () => {
	const dispatch = useDispatch();

	const activeFilter = useSelector((state) => state.filter.activeFilter);

	// смена активного фильтра в зависимости от нажатой кнопки
	const handleChangeFilter = (filter) => {
		dispatch(activeFilterChanged(filter));
	};

	return (
		<div>
			<Button className={`btn_generalStyle btn-filter ${activeFilter === "all" && "btn-filter_active"}`} onClick={() => handleChangeFilter("all")}>
				All
			</Button>
			<Button className={`btn_generalStyle btn-filter ${activeFilter === "active" && "btn-filter_active"}`} onClick={() => handleChangeFilter("active")}>
				Active
			</Button>
			<Button className={`btn_generalStyle btn-filter ${activeFilter === "completed" && "btn-filter_active"}`} onClick={() => handleChangeFilter("completed")}>
				Completed
			</Button>
		</div>
	);
};

export default FilterBlock;
