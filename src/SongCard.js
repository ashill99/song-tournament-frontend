import React from 'react'

function SongCard({title, artist, album, isWinner}) {

    function handleVoteClick() {
        console.log('r1 click')
        }

    return (
        <div className="song-card">
            <h2>{title}</h2>
            <h4>{artist}</h4>
            <h4>{album}</h4>
            <button onClick={handleVoteClick}>Vote</button>
        </div>
    )
}

export default SongCard;