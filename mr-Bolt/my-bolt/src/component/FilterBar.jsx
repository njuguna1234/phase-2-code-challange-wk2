import React from 'react';

function FilterBar({ handleFilter }) {
  return (
    <div className="filter-bar">
      <label>
        <input type="checkbox" onChange={() => handleFilter('Support')} /> Support
      </label>
      <label>
        <input type="checkbox" onChange={() => handleFilter('Medic')} /> Medic
      </label>
      {/* Add other class checkboxes */}
    </div>
  );
}

export default FilterBar;
