
// SortBar.js

import React from 'react';

function SortBar({ handleSort }) {
  // Example function for handling sorting
  const handleSortClick = () => {
    // Call the handleSort function passed as a prop
    handleSort();
  };

  return (
    <div className="sort-bar">
      <button onClick={handleSortClick}>Sort</button>
    </div>
  );
}

export default SortBar;
