import SearchCard from './SearchCard'


function SearchContainer({searchArtist}) {


    const eachSearchItem = searchArtist
      .map((song) => 
            <SearchCard 
              key={song.id}
              id={song.id}
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