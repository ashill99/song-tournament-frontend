import React from 'react'

function NewBracketItem({ deleteTrack, addedSongs, chosenTracks, setChosenTracks }) {

    function handleDeleteTrack(e) {
        deleteTrack(e)
        const itemObj = document.getElementById(e.target.id)
        itemObj.remove()
    }


    const eachTrack = chosenTracks.map((track, index) => {

    return <div id={track.spotify_id}>{index + 1}: {track.name} by {track.artists}
        <button className="delete-button" id={track.spotify_id} onClick={handleDeleteTrack}> X</button>
    </div>

    })

    return (
        <div>{eachTrack}</div>
    )
}

export default NewBracketItem