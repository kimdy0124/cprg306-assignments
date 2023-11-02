"use client";

import { useState } from "react";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");

  // Create a copy of the items prop to maintain immutability
  const sortedItems = [...items];

  sortedItems.sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    } else {
      return 0;
    }
  });

  return (
    <div>
      <div className="text-center">
        <label>Sort by:</label>
        <button
          onClick={() => setSortBy("name")}
          className={`bg-blue-500 text-white mx-4 px-4 py-2 rounded ${
            sortBy === "name" ? "bg-blue-700" : ""
          }`}
        >
          Name
        </button>
        <span className="mx-2"></span>
        <button
          onClick={() => setSortBy("category")}
          className={`bg-blue-500 text-white px-4 py-2 rounded ${
            sortBy === "category" ? "bg-blue-700" : ""
          }`}
        >
          Category
        </button>
      </div>

      {/* Render the sorted items using the sortedItems copy */}
      {sortedItems.map((item) => (
        <div key={item.id}>
          <p>Name: {item.name}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Category: {item.category}</p>
        </div>
      ))}
    </div>
  );
}
