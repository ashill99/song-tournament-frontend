import React, { useState, useEffect } from 'react'

function BracketRound({ roundOneTracks }) {

// const [defaultTracks, setDefaultTracks] = useState([])
    console.log(roundOneTracks)
    console.log(typeof roundOneTracks.songs)
    // console.log(Object.keys(roundOneTracks.songs).length)

    // const [roundOneTracks, setRoundOneTracks] = useState([])

// function getRoundOneTracks(id) {       
//      fetch(`http://localhost:3000/brackets/${id}`)
//             .then((r) => r.json())
//             .then(setRoundOneTracks)
// }

// console.log(roundOneTracks.songs.length)
// const result = Object.values(roundOneTracks.songs);

const eachR1Track = roundOneTracks.songs ? roundOneTracks.songs.map((track) => {
        console.log(track)
        return (
    <div key={track.id}>
        <h3>{track.name}</h3>
        <p>{track.artists}</p> 
        <img src={track.image} alt={track.name}></img> 
   </div>
    ) 
    }) : null
    // console.log(eachR1Track)

// useEffect(() => {
//     // const eachR1Track = roundOneTracks.songs.map((track) => {
// //         console.log(track)
// //     //     return (
// //     //     <div>{track.name}, {track.artists}</div>
// //     // ) 
// //     })
// },[roundOneTracks])

// const eachR1Track = roundOneTracks.songs.map((track) => {
//         console.log(track)
//     //     return (
//     //     <div>{track.name}, {track.artists}</div>
//     // ) 
//     })

    return (
        <div className="bracket-card">
            {eachR1Track}
        </div>
    )
}

export default BracketRound