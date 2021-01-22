import React from 'react';
import SongCard from './SongCard';

function RoundTwo({songs, setSongs }) {

    function handleVotes(updatedSong) {
        const updatedSongs = songs.map((song) =>
          song.id === updatedSong.id ? updatedSong : song
        );
        setSongs(updatedSongs);
      }

      function handleR2Click(event) {
        const updateObj = {
          round2winner: true
              };
              let id = event.target.id
    
        fetch(`http://localhost:4000/songs/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updateObj),
        })
          .then((r) => r.json())
          .then(handleVotes);
      }

    const songChoices = songs
        .map((song) => (song.round1winner === true ? 
                    <div className="song-card-two">
                    <SongCard 
                    song={song}
                    key={song.id}
                    id={song.id}
                    title={song.title}
                    artist={song.artist}
                    album={song.album}
                    votes={song.votes}
                    round1winner={song.round1winner}
                    round2winner={song.round2winner}
                    onUpdateSong={handleVotes}
                    onLikeClick={handleR2Click}
                    /></div> : null )
        )

    return (
        <div>
          {songChoices}
        </div>
    )
}

export default RoundTwo;