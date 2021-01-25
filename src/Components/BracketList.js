import React from 'react'
import Bracket from '../Components/Bracket'

function BracketList({ brackets, setBrackets }) {
    const displayBracketList = brackets
        .map((bracket) => 
            <Bracket 
                key={bracket.id}
                name={bracket.name}
                category={bracket.category}
            />)

    return (
        <div className="parent">
        <div className="bracket-list">{displayBracketList}</div>
        </div>
    )
}

export default BracketList