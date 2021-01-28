import React, { useEffect } from 'react'
import Bracket from '../Components/Bracket'
import SongCard from './SongCard'

function BracketList({getRoundOneTracks, renderOldBracketSongs, brackets, setBrackets, setRoundOneTracks, roundOneTracks }) {

function setNewTracks(e) {
    let id = parseInt(e.target.id)
    console.log(id)
    // setRoundOneTracks(songs)
    // setRoundOneTracks(songs)
    // setRoundOneTracks(bracket)
    console.log(brackets)
    // const desiredBracket = brackets
    //     .filter((bracket.id => bracket.id === e.target.id))
    // console.log(desiredBracket)
    console.log(roundOneTracks)
    const desiredBracketObj = brackets.filter((bracket) => bracket.id === id ? bracket : null)
    console.log(desiredBracketObj)
    getRoundOneTracks(id)
    // setRoundOneTracks(desiredBracketObj)
    console.log(roundOneTracks)
    // renderOldBracketSongs(desiredBracketObj)
}

useEffect(() => {
    fetch("http://localhost:3000/brackets")
        .then((response) => response.json())
        .then(setBrackets)
    },[])

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