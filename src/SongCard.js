import React from 'react'

function SongCard({ song, title, artist, album, id, votes, round1winner, round2winner, round3winner, round4winner, onUpdateSong, onLikeClick }) {

    // function updateRoundTwo() {
    //     round2winner: true
    //   }

    // function handleLikeClick() {
    //     const updateObj = {
    //       round1winner: true
    //           };
    
    //     fetch(`http://localhost:4000/songs/${id}`, {
    //       method: "PATCH",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(updateObj),
    //     })
    //       .then((r) => r.json())
    //       .then(onUpdateSong);
    //   }

      // function handleR2Click() {
      //   const updateObj = {
      //     round2winner: true
      //         };
    
      //   fetch(`http://localhost:4000/songs/${id}`, {
      //     method: "PATCH",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify(updateObj),
      //   })
      //     .then((r) => r.json())
      //     .then(onUpdateSong);
      // }

    return (
        <div className="song-card">
            <h2>{title}</h2>
            {/* <h4>{artist}</h4>
            <h4>{album}</h4> */}
            <p>{artist} - {album} song id - {id}</p>
            <button id={id} onClick={onLikeClick}>Vote</button>
        </div>
    )
}

export default SongCard;