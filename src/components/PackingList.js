import React from "react";
import Item from "./Item"; // Import the Item component

function PackingList({
                         items,
                         onUpdateItem,
                         onDeleteItem,
                         sortOrder,
                         setSortOrder,
                     }) {
    return (
        <div className="list">
            <div className="sort-options">
                <label>Sort by:</label>
                <select
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                >
                    <option value="input">Input Order</option>
                    <option value="description">Description</option>
                    <option value="packed">Packed Status</option>
                    <option value="quantity">quantity</option>
                </select>
            </div>
            <ul>
            {items.map((item) => (
                    <Item
                        key={item.id}
                        item={item}
                        onUpdateItem={onUpdateItem}
                        onDeleteItem={onDeleteItem}
                    />
                ))}
            </ul>
        </div>
    );
}

export default PackingList;



