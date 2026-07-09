import { FILTERS, type Filter } from "./types";
import React, { type FC } from "react";

type FilterButtonProps = {
  onFilterChange: (filter: Filter) => void;
};

export const FilterButton: FC<FilterButtonProps> = React.memo(
  ({ onFilterChange }) => {
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
  },
);

FilterButton.displayName = "FilterButton";
