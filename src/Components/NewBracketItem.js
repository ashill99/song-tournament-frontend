import React from 'react'

function NewBracketItem({ chosenTracks }) {

    const eachTrack = chosenTracks.map((track, index) => {

        while (chosenTracks.length < 9) {return <div>{index + 1}: {track.name} by {track.artists}</div>}

    })

    return (
        <div>{eachTrack}</div>
    )
}

export default NewBracketItem