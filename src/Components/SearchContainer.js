import SearchCard from './SearchCard'

function SearchContainer({ search, setSearch, brackets, addedSongs, setAddedSongs, chosenTracks, searchArtist, setChosenTracks }) {

  const newArray = [] 

    const eachSearchItem = searchArtist
      .map((song) => 
            <SearchCard 
            brackets={brackets}
            addedSongs = {addedSongs}
            setAddedSongs={setAddedSongs}
            chosenTracks={chosenTracks}
            setChosenTracks={setChosenTracks}
            song={song}
            id={song.id}
            key={song.id}
            spotify_id={song.spotify_id}
            artists={song.artists}
            album={song.album}
            uri={song.uri}
            image={song.image}
            name={song.name}
          /> 
          
      )
          newArray.push(eachSearchItem)

      return (
        <>
        {search === 0 ? null :
    eachSearchItem}
        </>
      )

}

export default SearchContainer