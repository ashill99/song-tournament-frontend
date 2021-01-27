import React from 'react'

function SongCard({handleUpdateVotes, setAddedSongs, onUpdateSong, song, track, id, winner, setWinner, image, artists }) {

    // const votes = song.votes
    // console.log(votes) 

      function handleWinner() {
        setWinner([...winner, song])
        console.log(id)
        handleUpdateVotes(id, song)
      }

console.log(song)
    return (
            // i've given each song-card div an ID set to the song_ID for matching song to div and reusing component
        <div data-id={id} className="song-card">
            <h3>{track}</h3>
            <b>{artists}</b>
            <br></br>
            <img className="round-img" src={image} alt={track}></img>
            <button id={id} onClick={handleWinner}>Banger!</button>
        </div>
    )
}

export default SongCard;