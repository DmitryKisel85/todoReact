import { useDispatch, useSelector } from "react-redux";
import { activeFilterChanged } from "./filterSlice";

import BtnFilterBlock from "../btnFilterBlock/BtnFilterBlock";

const FilterBlock = () => {
	const dispatch = useDispatch();

	const activeFilter = useSelector((state) => state.filter.activeFilter);

	// смена активного фильтра в зависимости от нажатой кнопки
	const handleChangeFilter = (filter) => {
		dispatch(activeFilterChanged(filter));
	};

	return (
		<div>
			<BtnFilterBlock active={activeFilter === "all" ? true : false} handleChangeFilter={handleChangeFilter} filter={"all"}>
				All
			</BtnFilterBlock>
			<BtnFilterBlock active={activeFilter === "active" ? true : false} handleChangeFilter={handleChangeFilter} filter={"active"}>
				Active
			</BtnFilterBlock>
			<BtnFilterBlock active={activeFilter === "completed" ? true : false} handleChangeFilter={handleChangeFilter} filter={"completed"}>
				Completed
			</BtnFilterBlock>
		</div>
	);
};

export default FilterBlock;
