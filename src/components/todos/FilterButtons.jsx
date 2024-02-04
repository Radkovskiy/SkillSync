import { useDispatch } from "react-redux"
import { statusFilters } from "./constants";

const FilterButtons = () => {
  const dispatch = useDispatch();

  const handleFilterChange = filter => dispatch({
    type: 'filterByStatus',
    payload: {
      filter
    }
  }
  );


  return (
    <div>
      <button onClick={() => handleFilterChange(statusFilters.all)} /* selected={filter === statusFilters.all} */>All</button>
      <button onClick={() => handleFilterChange(statusFilters.active)} /* selected={filter === statusFilters.active} */>Active</button>
      <button onClick={() => handleFilterChange(statusFilters.completed)} /* selected={filter === statusFilters.completed} */>Completed</button>
    </div>
  )
}

export default FilterButtons