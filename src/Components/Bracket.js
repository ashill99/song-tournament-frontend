import React from 'react';
import { Link, Route, Switch } from "react-router-dom";
import SongCard from './SongCard'

function Bracket({ bracket, setNewTracks, setRoundOneTracks, name, category, songs, id }) {

    const eachSong = bracket.songs.map((track, index) => {
    return (<p className="bracket-list-item">{index + 1}: {track.name} by {track.artists}</p>)
})

    return (
        <div className="old-bracket-card">
            <b className="old-bracket-name">{name}</b>
            <div className="prepare-wrapper">
                <button id={id} className="prepare-button" onClick={setNewTracks}>Prepare</button>
            </div>
            <div className="link-wrapper">
                <Link to={`/brackets/${id}`} className="replay-link">Play</Link>
            </div>
        </div>
    )
}

export default Bracket