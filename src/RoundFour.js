import React from 'react';
import SongCard from './SongCard'

function RoundFour({songs, setSongs}) {

    function handleVotes(updatedSong) {
        const updatedSongs = songs.map((song) =>
          song.id === updatedSong.id ? updatedSong : song
        );
        setSongs(updatedSongs);
      }
    
      function handleR4Click(event) {
        const updateObj = {
          round4winner: true
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
            .map((song) => (song.round3winner === true ? 
                        <div className="song-card-four">
                        <SongCard 
                        key={song.id}
                        id={song.id}
                        title={song.title}
                        artist={song.artist}
                        album={song.album}
                        votes={song.votes}
                        // onUpdateSong={handleVotes}
                        round1winner={song.round1winner}
                        round2winner={song.round2winner}
                        round3winner={song.round3winner}
                        round4winner={song.round4winner}
                        onUpdateSong={handleVotes}
                        onLikeClick={handleR4Click}
                        />
                </div> : null)
            )
    
        return (
            <div>{songChoices}</div>
        )
    }

export default RoundFour;