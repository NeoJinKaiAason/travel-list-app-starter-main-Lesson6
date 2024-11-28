import React from "react";

function Item({ item, onUpdateItem, onDeleteItem }) {
    return (
        <li>
            <input
                type="checkbox"
                checked={item.packed}
                onChange={(e) => onUpdateItem(item.id, e.target.checked)}
            />
            <span
                style={{
                    textDecoration: item.packed ? "line-through" : "none",
                }}
            >
        {item.description} ({item.quantity})
      </span>
            <button onClick={() => onDeleteItem(item.id)}>❌</button>
        </li>
    );
}

export default Item;

