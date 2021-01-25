import React from 'react';
import SongCard from '../Components/SongCard'
import shortid from 'shortid';

function FinalRound({songs, setSongs}) {

  function handleVotes(updatedSong) {
    const updatedSongs = songs.map((song) =>
      song.id === updatedSong.id ? updatedSong : song
    );
      setSongs(updatedSongs);
  }
    
  function handleR4Click(event) {
    const updateObj = {
      round3winner: true
    };
      let id = event.target.id
    
    fetch(`http://localhost:3000/songs/${id}`, {
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
      .map((song) => (song.round4winner === true ? 
        <div className="song-card-five" key={shortid.generate()}>
          <SongCard 
          key={shortid.generate()}
          spotify_id={song.spotify_id}
          title={song.title}
          artist={song.artist}
          album={song.album}
          votes={song.votes}
          round1winner={song.round1winner}
          round2winner={song.round2winner}
          round3winner={song.round3winner}
          round4winner={song.round4winner}
          onUpdateSong={handleVotes}
          onLikeClick={handleR4Click}
        /></div> : null)
      )
    
      return (
        <div className="parent">
          <div className="round-four">{songChoices}</div>
        </div>
      )
}

export default FinalRound;