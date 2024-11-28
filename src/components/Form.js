import React, { useState } from "react";

function Form({ handleAddItem }) {
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);

    function handleSubmit(e) {
        e.preventDefault();
        if (!description) return;

        const newItem = {
            id: Date.now(),
            description,
            quantity: Number(quantity),
            packed: false,
        };

        handleAddItem(newItem);
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

export default Form;



