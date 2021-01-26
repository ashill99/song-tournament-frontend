import React, { useState } from 'react'
import SongCard from './SongCard'

function BracketRound({ roundOneTracks }) {

    const [r1Winner, setR1Winner] = useState([])
    const [r2Winner, setR2Winner] = useState([])
    const [r3Winner, setR3Winner] = useState([])
    const [r4Winner, setR4Winner] = useState([])

    const eachR1Track = roundOneTracks.songs ? roundOneTracks.songs
    .map((track) => {
        return <SongCard 
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
            return <h1>Banger Bracket Round One</h1>
        } else if 
            (r2Winner.length < 2) {
                return <h1>Banger Bracket Round Two</h1>
        } else { 
            return <h1> Banger Bracket Round Three </h1>
        }
    }

console.log(r1Winner)

    return (
<>
        {displayRightTitle()}
        <div className="bracket-card">
            <div>{/* First Round SongCards */}
            {eachR1Track}
            </div>
        <div>
            {/* Round 2 */}
        </div>
        <div className="empty-songcard">
            {r1Winner[0] ? eachR2Track[0] : null}
        </div>
        <div className="empty-songcard">
            {r1Winner[1] ? eachR2Track[1] : null}
        </div>
        <div className="empty-songcard">
            {r1Winner[2] ? eachR2Track[2] : null}
        </div>
        <div className="empty-songcard">
            {r1Winner[3] ? eachR2Track[3] : null}
        </div>
        {/* Round 3 */}
        <div>
            <div className="empty-songcard">
            {r2Winner[0] ? eachR3Track[0] : null}
        </div>
        <div className="empty-songcard">
            {r2Winner[1] ? eachR3Track[1] : null}
        </div>
        </div>
        {/* Final Round */}
        <div>
        <div className="empty-songcard">
            {r3Winner[0] ? eachR4Track[0] : null}
        </div>
        </div>
        </div>
        </>
    )
}

export default BracketRound