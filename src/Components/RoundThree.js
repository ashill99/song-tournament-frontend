import React from 'react';
import SongCard from '../Components/SongCard'
import shortid from 'shortid';


function RoundThree({songs, setSongs }) {

  function handleVotes(updatedSong) {
    const updatedSongs = songs.map((song) =>
      song.id === updatedSong.id ? updatedSong : song
    );
    setSongs(updatedSongs);
  }

  function handleR3Click(event) {
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
      .map((song) => (song.round2winner === true ? 
          <div className="song-card-three" key={shortid.generate()}>
            <SongCard 
            key={shortid.generate()}
            id={song.id}
            title={song.title}
            artist={song.artist}
            album={song.album}
            votes={song.votes}
            // onUpdateSong={handleVotes}
            round1winner={song.round1winner}
            round2winner={song.round2winner}
            round3winner={song.round3winner}
            onUpdateSong={handleVotes}
            onLikeClick={handleR3Click}
          /></div> : null)
      )

      return (
        <div className="parent">
          <div className="round-four">{songChoices}</div>
        </div>
      )
}

export default RoundThree;