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
        votes: 0,
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
            <h3>{name.length < 28 ? name : name.substring(0,24) + "..."} </h3>
            <b>{artists.length < 28 ? artists : artists.substring(0,24) + "..."}</b>
            <img className="round-img" src={image} alt={name}></img>
            <button className="choose-track" id={spotify_id} onClick={handleChooseTrack}>Choose Track </button>
        </div>
    )
}

export default SearchCard