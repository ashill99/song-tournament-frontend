import React from 'react'

function NewBracketItem({ addedSongs, chosenTracks, setChosenTracks }) {

    function deleteTrack(e) {
        let oldId = e.target.id
        const sameSongObj = addedSongs.filter((song) => {
            if (song.spotify_id === oldId) {
                return song 
            }
        })
        let id = sameSongObj.id 
        console.log(id)
        // fetch(`http://localhost:3000/songs/${id}`, {
        //       method: "DELETE"})
        //       .then(r => r.json())
        //       .then(() => {
        //           const updatedChosenTracks = chosenTracks.filter((t) => t.id !== id)
        //           setChosenTracks(updatedChosenTracks)
        //       })
    }

    const eachTrack = chosenTracks.map((track, index) => {

    return <div>{index + 1}: {track.name} by {track.artists}
        <button id={track.spotify_id} onClick={deleteTrack}>X</button>
    </div>

    })

    return (
        <div>{eachTrack}</div>
    )
}

export default NewBracketItem