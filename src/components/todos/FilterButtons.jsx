import { useDispatch } from "react-redux"
import { statusFilters } from "./constants";
import { filterByStatus } from "../../redux/todoSlice/todoSlice";

const FilterButtons = () => {
  const dispatch = useDispatch();

  const handleFilterChange = filter => dispatch(filterByStatus(filter));


  return (
    <div>
      <button
        className="button"
        onClick={() => handleFilterChange(statusFilters.all)} /* selected={filter === statusFilters.all} */>All</button>
      <button
        className="button"
        onClick={() => handleFilterChange(statusFilters.active)} /* selected={filter === statusFilters.active} */>Active</button>
      <button
        className="button"
        onClick={() => handleFilterChange(statusFilters.completed)} /* selected={filter === statusFilters.completed} */>Completed</button>
    </div>
  )
}

export default FilterButtons