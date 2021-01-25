

function SearchCard({brackets, addedSongs, setAddedSongs, chosenTracks, song, setChosenTracks, key, spotify_id, artists, album, uri, image, name}) {
    
    const lastBracket = brackets[brackets.length - 1]

    function addNewSong(){

    const newSongObj = {
        name: name,
        artists: artists,
        spotify_id: spotify_id, 
        album: album, 
        image: image, 
        uri: uri,
        bracket_id: lastBracket
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
              })
            }

    function handleChooseTrack(e) {
        e.preventDefault()
        console.log(e.target.id)
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