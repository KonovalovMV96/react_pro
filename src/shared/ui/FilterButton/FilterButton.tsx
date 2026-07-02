import type { FC } from "react";
import { FILTERS, type Filter } from "./types";

type FilterButtonProps = {
  onFilterChange: (filter: Filter) => void;
};

export const FilterButton: FC<FilterButtonProps> = ({ onFilterChange }) => {
  const handleFilterClick = (filter: Filter) => {
    onFilterChange(filter);
  };

  return (
    <div>
      {FILTERS.map((filter) => (
        <button key={filter} onClick={() => handleFilterClick(filter)}>
          {filter === "all" && "Все"}
          {filter === "completed" && "Завершенные"}
          {filter === "incomplete" && "Незавершенные"}
        </button>
      ))}
    </div>
  );
};
