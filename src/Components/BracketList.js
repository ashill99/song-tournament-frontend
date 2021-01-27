import React from 'react'
import Bracket from '../Components/Bracket'
import SongCard from './SongCard'

function BracketList({ brackets, setBrackets, setRoundOneTracks, roundOneTracks }) {


function setNewTracks(e) {
    console.log(e.target.id)
    // setRoundOneTracks(songs)
    // setRoundOneTracks(songs)
    // setRoundOneTracks(bracket)
    const desiredBracket = brackets.filter((bracket) => bracket.id === e.target.id )
    console.log(desiredBracket)
    setRoundOneTracks(desiredBracket)
}

    const displayBracketList = brackets
        .map((bracket) => 
            <Bracket 
            setNewTracks={setNewTracks}
                bracket={bracket}
                id={bracket.id}
                key={bracket.id}
                name={bracket.name}
                category={bracket.category}
                songs={bracket.songs}
                
                //     .map((track) => <SongCard track={track.name} 
                // artists={track.artists} 
                // image={track.image} 
                // id={track.id} 
                />
            )



    

    return (
        <div className="parent">
        <div className="bracket-list">{displayBracketList}
        </div>
        </div>
    )
}

export default BracketList