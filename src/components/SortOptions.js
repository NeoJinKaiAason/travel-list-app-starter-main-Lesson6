import React from "react";

function SortOptions({ sortOrder, setSortOrder }) {
    return (
        <div>
            <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
                <option value="input">Default</option>
                <option value="description">Sort by Description</option>
                <option value="quantity">Sort by Quantity</option>
                <option value="priority">Sort by Priority</option>
            </select>
        </div>
    );
}

export default SortOptions;
