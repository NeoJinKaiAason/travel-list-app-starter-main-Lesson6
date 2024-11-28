import React from "react";

function Stats({ items, onClearItems }) {
    const totalItems = items.length;
    const packedItems = items.filter((item) => item.packed).length;
    const packedPercentage =
        totalItems === 0 ? 0 : Math.round((packedItems / totalItems) * 100);

    return (
        <footer className="stats">
            <em>
                You have {totalItems} items in the list. You already packed{" "}
                {packedItems} ({packedPercentage}%).
            </em>
            {packedPercentage === 100 && (
                <p style={{ color: "green", fontWeight: "bold" }}>
                    You got everything!
                </p>
            )}
            <button onClick={onClearItems} style={{ marginTop: "10px" }}>
                Clear List
            </button>
        </footer>
    );
}

export default Stats;



