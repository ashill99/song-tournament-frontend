import React from 'react';
import SongCard from './SongCard';

function RoundOne({ filteredWinners }) {
    
    const songChoices = filteredWinners
    .map((song) => <SongCard 
                    key={song.id}
                    title={song.title}
                    artist={song.artist}
                    album={song.album}
                    isWinner={song.isWinner}
                    />
        )
console.log(songChoices)

    return (
        <div>{songChoices}</div>
    )
}

export default RoundOne;