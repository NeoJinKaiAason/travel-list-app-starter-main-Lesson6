import React, { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

const initialItems = [
    { id: 1, description: "Shirt", quantity: 5, packed: false },
    { id: 2, description: "Pants", quantity: 2, packed: false },
];

function App() {
    const [items, setItems] = useState(initialItems);
    const [sortOrder, setSortOrder] = useState("input");

    function handleAddItem(newItem) {
        setItems((prevItems) => [...prevItems, newItem]);
    }

    function handleUpdateItem(id, packed) {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, packed } : item
            )
        );
    }

    function handleDeleteItem(id) {
        setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    }

    function handleClearItems() {
        setItems([]);
    }

    function getSortedItems() {
        if (sortOrder === "description") {
            return [...items].sort((a, b) =>
                a.description.localeCompare(b.description)
            );
        } else if (sortOrder === "packed") {
            return [...items].sort((a, b) => Number(a.packed) - Number(b.packed));
        } else if (sortOrder === "quantity") {
            return [...items].sort((a, b) => a.quantity - b.quantity); // Sort by quantity
        } else {
            return items; // Default input order
        }
    }

    return (
        <div className="app">
            <Logo />
            <Form handleAddItem={handleAddItem} />
            <PackingList
                items={getSortedItems()}
                onUpdateItem={handleUpdateItem}
                onDeleteItem={handleDeleteItem}
                sortOrder={sortOrder}
                setSortOrder={setSortOrder}
            />
            <Stats items={items} onClearItems={handleClearItems} />
        </div>
    );
}

export default App;










