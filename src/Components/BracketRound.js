import React, { useState } from 'react'
import SongCard from './SongCard'
import banger from './banger.png'
import PopUp from './PopUp'

function BracketRound({togglePop, handleUpdateVotes, setAddedSongs, onUpdateSong, roundOneTracks }) {

    const [r1Winner, setR1Winner] = useState([])
    const [r2Winner, setR2Winner] = useState([])
    const [r3Winner, setR3Winner] = useState([])
    const [r4Winner, setR4Winner] = useState([])

    function handleChampion() {
        
    }
console.log(roundOneTracks)

// const oldBracketRoundOne =  roundOneTracks.map((track) => track.songs)
// console.log(oldBracketRoundOne)

// const eachOldBracketSong = oldBracketRoundOne.map((track) => {
//     return <SongCard 
//     song={track}
//     track={track.name} 
//     artists={track.artists} 
//     image={track.image} 
//     id={track.id} 
//     winner={r1Winner}
//     setWinner={setR1Winner}
//     />
// })

// const bracketWinners = 

// const songVotesInOrder = songs.sort((a, b) => (a.votes < b.votes) ? 1 : -1)
// console.log(songVotesInOrder)

// const mostVotes = songVotesInOrder.map((song) => {
//     return ( 
//         <div>
//             <p>{song.name}: {song.votes} wins</p>
//         </div>
//     )
// })

const sortedWinners = roundOneTracks.songs ? roundOneTracks.songs.sort((a, b) => (a.votes < b.votes) ? 1 : -1) : null

const bracketWinners = roundOneTracks.songs ? sortedWinners
    .map((track) => {return (<div> {track.name}: {track.votes} wins
    </div>)}
    ) : null 

console.log(bracketWinners)

function meaninglessFunction(no, args) {
    console.log('does nothing')
}

    const eachR1Track = roundOneTracks.songs ? roundOneTracks.songs
    .map((track) => {
        return <SongCard 
        handleUpdateVotes={meaninglessFunction}
        setAddedSongs={setAddedSongs}
        onUpdateSong={onUpdateSong}
        song={track}
        track={track.name} 
        artists={track.artists} 
        image={track.image} 
        id={track.id} 
        winner={r1Winner}
        setWinner={setR1Winner}
        />
    }) : null

console.log(r1Winner)
console.log(r2Winner)

    const eachR2Track = r1Winner ? r1Winner
    .map((track) => {
        return <SongCard 
        handleUpdateVotes={meaninglessFunction}
        setAddedSongs={setAddedSongs}
        onUpdateSong={onUpdateSong}
        song={track}
        track={track.name} 
        artists={track.artists} 
        image={track.image} 
        id={track.id} 
        winner={r2Winner}
        setWinner={setR2Winner}
        />
    }) : null

    const eachR3Track = r2Winner ? r2Winner.map((track) => {
        return <SongCard 
        handleUpdateVotes={handleUpdateVotes}
        setAddedSongs={setAddedSongs}
        onUpdateSong={onUpdateSong}
        song={track}
        track={track.name} 
        artists={track.artists} 
        image={track.image} 
        id={track.id} 
        winner={r3Winner}
        setWinner={setR3Winner}
        />
    }) : null

    const eachR4Track = r3Winner ? r3Winner.map((track) => {
        return <SongCard 
        handleUpdateVotes={meaninglessFunction}
        setAddedSongs={setAddedSongs}
        onUpdateSong={onUpdateSong}
        song={track}
        track={track.name} 
        artists={track.artists} 
        image={track.image} 
        id={track.id} 
        winner={r4Winner}
        setWinner={setR4Winner}
        />
    }) : null

    function displayRightTitle() {
        if (r1Winner.length < 4) {
            return <h2>Banger Bracket Round One</h2>
        } else if 
            (r2Winner.length < 2) {
                return <h2>Banger Bracket Round Two</h2>
        } else { 
            return <h2> Banger Bracket Final </h2>
        }
    }

console.log(r1Winner)

    return (
        <div>
        {displayRightTitle()}
        <div className="bracket-card">
            <div>
            {/* First Round SongCards */}
            {eachR1Track}
            </div>
        <div>
            {/* Round 2 */}
        </div>
        <div className="empty-songcard">
            <p>Round 2</p>
            {r1Winner[0] ? eachR2Track[0] : null}
        </div>
        <div className="empty-songcard">
        <p>Round 2</p>
            {r1Winner[1] ? eachR2Track[1] : null}
        </div>
        <div className="empty-songcard">
        <p>Round 2</p>
            {r1Winner[2] ? eachR2Track[2] : null}
        </div>
        <div className="empty-songcard">
        <p>Round 2</p>
            {r1Winner[3] ? eachR2Track[3] : null}
        </div>
        {/* Round 3 */}
        <div>
            <div className="empty-songcard">
            <p>Final</p>
            {r2Winner[0] ? eachR3Track[0] : null}
        </div>
        <div className="empty-songcard">
        <p>Final</p>
            {r2Winner[1] ? eachR3Track[1] : null}
        </div>
        </div>
        {r3Winner[0] ? <PopUp /> : null}
        {/* Final Round */}
        <div>
        <div className="empty-songcard-champion">
            <p className="champion">Banger Bracket Champion</p>
            {r3Winner[0] ? eachR4Track[0] : null}
        <div>
        </div>
        </div>
        </div>

        <div><br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
            <h3 className="winners-list">Winners: </h3>{bracketWinners} 
        </div>
    </div>
    </div>
    )
}

export default BracketRound