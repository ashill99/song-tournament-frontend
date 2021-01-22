import React from 'react'

function SongCard({ title, artist, album, id, votes, onUpdateSong }) {

    function handleLikeClick() {
        const updateObj = {
          votes: votes + 1,
        };
    
        fetch(`http://localhost:4000/songs/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updateObj),
        })
          .then((r) => r.json())
          .then(onUpdateSong);
      }

    return (
        <div className="song-card">
            <h2>{title}</h2>
            <h4>{artist}</h4>
            <h4>{album}</h4>
            <button onClick={handleLikeClick}>Vote</button>
        </div>
    )
}

export default SongCard;