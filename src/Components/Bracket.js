import React from 'react';
import { Link, Route, Switch } from "react-router-dom";
import SongCard from './SongCard'
import vinyl from './vinyl.png'

function Bracket({ bracket, setNewTracks, setRoundOneTracks, name, category, songs, id }) {

    const eachSong = bracket.songs.map((track, index) => {
    return (<p className="bracket-list-item">{index + 1}: {track.name} by {track.artists}</p>)
})

    // const totalVotesArray = songs.map((song) => song.votes)
    // totalVotesArray.sort((b, a) => (a - b))

    const songVotesInOrder = songs.sort((a, b) => (a.votes < b.votes) ? 1 : -1)
console.log(songVotesInOrder)

const mostVotes = songVotesInOrder.map((song) => {
    return ( 
        <div>
            <p>{song.name}: {song.votes} wins</p>
        </div>
    )
})


    const totalSongArray = songs.map((song) => song)
console.log(totalSongArray)
    // totalSongArray.sort((votes Descending) => (a - b))
    return (
        <div className="container">
        <div className="old-bracket-card">
            <img className="bracket-image" src={vinyl} alt="vinyl icon"></img>
            <b className="old-bracket-name"><h3>{name}</h3></b><br></br>
            <div className="prepare-wrapper">
                <button id={id} className="prepare-button" onClick={setNewTracks}>Load</button>
            </div>
            <div className="link-wrapper">
                <Link to={`/brackets/${id}`} className="replay-link">Play</Link>
            </div>
        </div>
        </div>
    )
}

export default Bracket