import SearchCard from './SearchCard'


function SearchContainer({brackets, addedSongs, setAddedSongs, chosenTracks, searchArtist, setChosenTracks}) {


    const eachSearchItem = searchArtist
      .map((song) => 
            <SearchCard 
            brackets={brackets}
            addedSongs = {addedSongs}
            setAddedSongs={setAddedSongs}
            chosenTracks={chosenTracks}
            setChosenTracks={setChosenTracks}
                song={song}
              key={song.id}
              spotify_id={song.spotify_id}
              artists={song.artists}
              album={song.album}
              uri={song.uri}
              image={song.image}
              name={song.name}
            /> 
            
      )

      return (
          eachSearchItem
      )

}

export default SearchContainer