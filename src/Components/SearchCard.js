import React from 'react'

function SearchCard({brackets, addedSongs, setAddedSongs, chosenTracks, song, setChosenTracks, spotify_id, artists, album, uri, id, image, name }) {
    
    function addNewSong(){
        
    const newSongObj = {
        name: name,
        artists: artists,
        spotify_id: spotify_id, 
        album: album, 
        image: image, 
        uri: uri,
        }
        
    fetch("http://localhost:3000/songs", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify(newSongObj)
          })
              .then(response => response.json())
              .then(newSong => {
                  setAddedSongs([...addedSongs, newSong])
                // setChosenTracks([...chosenTracks, newSong])
              })
            }

    function handleChooseTrack(e) {
        e.preventDefault()
        setChosenTracks([...chosenTracks, song])
        addNewSong()
    }
    return(

        <div className="song-card">
            <h3>{name}</h3>
            <p>{artists}</p>
            <img src={image} height="100px" alt={name}></img>
            <button id={spotify_id} onClick={handleChooseTrack}>Choose Track </button>
        </div>
    )
}

export default SearchCard