"use client";

import { useState } from "react";
import Link from 'next/link';
import ItemList from './item-list.js';
import NewItem from "./new-item.js";
import itemsData from "./items.json";

const allItems = [...itemsData];

export default function Page() {
  const [items, setItems] = useState(allItems);

  function handleAddItem(newItem) {
    // Update the items state with the new item
    setItems((prevItems) => [...prevItems, newItem]);
  }

  return (
    <div className="flex-col">
      <h1 className="text-3xl font-bold text-center mt-5 mb-5">Shopping List (week6)</h1>
      <NewItem onAddItem={handleAddItem}></NewItem>
      <div className="flex justify-center">
        <ItemList items={items} /> {/* Pass the items state to ItemList as a prop */}
      </div>
      <Link href="/" className="font-bold">Back to HomePage</Link>
    </div>
  );
}
