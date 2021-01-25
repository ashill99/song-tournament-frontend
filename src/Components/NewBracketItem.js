


function NewBracketItem({chosenTracks}) {

    const eachTrack = chosenTracks.map((track) => {
        return <div>{track.name}</div>
    })

    return (
        <div>{eachTrack}</div>
    )
}

export default NewBracketItem