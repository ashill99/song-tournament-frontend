import React from 'react';

function Bracket({ name, category }) {

    return (
        <div className="bracket-card">
            <p>{name}</p>
            <b>{category}</b>
        </div>
    )
}

export default Bracket