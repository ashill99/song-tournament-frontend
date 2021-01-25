

function SearchCard({key, id, artists, album, uri, image, name}) {
    
    function handleChooseTrack(e) {
        e.preventDefault()
        console.log(e.target.id)
    }
    return(

        <div className="song-card">
            <h1>{artists}</h1>
            <p>{name}</p>
            <img src={image} height="50px"></img>
            <button id={id} onClick={handleChooseTrack}>Choose Track </button>
        </div>
    )
}

export default SearchCard