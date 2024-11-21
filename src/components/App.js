import React, { useState } from "react";

// Initial packing items
const initialItems = [
  { id: 1, description: "Shirt", quantity: 5, packed: false },
  { id: 2, description: "Pants", quantity: 2, packed: false },
];

function Logo() {
  return <h1>My Travel List</h1>;
}

function Form({ handleAddItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  // Handle form submission
  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return; // Don't add if there's no description

    // Create a new item based on user input
    const newItem = {
      id: Date.now(), // Unique ID
      description,
      quantity: Number(quantity),
      packed: false,
    };

    // Call the parent function to add the item
    handleAddItem(newItem);

    // Reset form fields
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need to pack?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      >
        {[...Array(10)].map((_, i) => (
          <option key={i + 1} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">ADD</button>
    </form>
  );
}

function Item({ item, onTogglePacked }) {
  return (
    <li>
      <span
        style={{
          textDecoration: item.packed ? "line-through" : "none",
        }}
      >
        {item.description} ({item.quantity})
      </span>
      <button onClick={() => onTogglePacked(item.id)}>
        {item.packed ? "Unpack" : "Pack"}
      </button>
    </li>
  );
}

function PackingList({ items, onTogglePacked }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item key={item.id} item={item} onTogglePacked={onTogglePacked} />
        ))}
      </ul>
    </div>
  );
}

function Stats({ items }) {
  const totalItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const packedPercentage =
    totalItems === 0 ? 0 : Math.round((packedItems / totalItems) * 100);

  return (
    <footer className="stats">
      <em>
        You have {totalItems} items in the list. You already packed {packedItems}{" "}
        ({packedPercentage}%).
      </em>
    </footer>
  );
}

function App() {
  const [items, setItems] = useState(initialItems);

  // Function to handle adding new items
  function handleAddItem(newItem) {
    setItems((prevItems) => [...prevItems, newItem]);
  }

  // Function to toggle packed status
  function handleTogglePacked(id) {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form handleAddItem={handleAddItem} /> {/* Pass function as prop */}
      <PackingList items={items} onTogglePacked={handleTogglePacked} />
      <Stats items={items} />
    </div>
  );
}

export default App;




