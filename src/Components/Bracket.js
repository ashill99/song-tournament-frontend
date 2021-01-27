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
            {eachSong}
            <button id={id} onClick ={setNewTracks}>Prepare</button>
            <Link to={`/brackets/${id}`}>Click here to replay</Link>
        </div>
    )
}

export default Bracket