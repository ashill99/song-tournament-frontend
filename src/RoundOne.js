import React, { useState } from 'react';
import SongCard from './SongCard';

function RoundOne({songs, setSongs }) {

    function handleVotes(updatedSong) {
        const updatedSongs = songs.map((song) =>
          song.id === updatedSong.id ? updatedSong : song
        );
        setSongs(updatedSongs);
      }

      function handleLikeClick(event) {
        const updateObj = {
          round1winner: true
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
        .map((song) => 
                    <SongCard 
                    key={song.id}
                    id={song.id}
                    title={song.title}
                    artist={song.artist}
                    album={song.album}
                    votes={song.votes}
                    round1winner={song.round1winner}
                    round2winner={song.round2winner}
                    onUpdateSong={handleVotes}
                    onLikeClick={handleLikeClick}
                    /> 
        )

    return (
        <div className="round-one">{songChoices}</div>
    )
}

export default RoundOne;