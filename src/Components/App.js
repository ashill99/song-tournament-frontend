import React, { useEffect, useState } from 'react';
import RoundOne from '../Components/RoundOne';
import RoundTwo from '../Components/RoundTwo';
import RoundThree from '../Components/RoundThree'
import RoundFour from '../Components/RoundFour'
import FinalRound from '../Components/FinalRound'
import BracketList from '../Components/BracketList'
import SearchBar from './SearchBar'
import SearchContainer from './SearchContainer'
import NavBar from './NavBar'
import Refresh from './Refresh'
import NewBracketForm from './NewBracketForm'

function App() {

  const [songs, setSongs] = useState([])
  const [brackets, setBrackets] = useState([])
  const [showBrackets, setShowBrackets] = useState(false)
  const [searchArtist, setSearchArtist] = useState([])
  const [chosenTracks, setChosenTracks] = useState([])
  const [addedSongs, setAddedSongs] = useState([])

  const accessToken = 'BQBerqlOcjEjTRFCiRd3ghVYTgtMIRNz7b4mzvGZ47xu_S0J0M2gvZHoGjOdUw9Wca0_d6o4eZg5UlgSeK1W4OB8lgIhq8oi_1R6LSpm1g7ADlnpzdWABvZPAMubBBU2ykzj50hSzlAYbwsNHkhErZYxNs3J0w'
console.log(addedSongs)

  useEffect(() => {
    fetch("http://localhost:3000/brackets")
        .then((response) => response.json())
        .then(setBrackets)
    }, [])

    function handleNewBracket(newBracket) {
      setBrackets([...brackets, newBracket])
      console.log(newBracket)
      // handleNewJoin(newBracket.id)
    }

    function handleNewJoin(bracket_id) {
      addedSongs.map((song) => {
        console.log('i want to fetch in this map')
            })
    }

  console.log(addedSongs)
    console.log(songs)
    console.log(brackets)

  function clickHandler() {
    setShowBrackets((showBrackets) => !showBrackets)
  }
  function handleVotes(updatedSong) {
    const updatedSongs = songs.map((song) =>
      song.id === updatedSong.id ? updatedSong : song
    );
      setSongs(updatedSongs);
  }
    
  function searchForTrack(searchTerm) {
    console.log('track search')
    fetch(`https://api.spotify.com/v1/search?type=track&q=${searchTerm}&limit=8`, {
      headers: {'Authorization': 'Bearer ' + accessToken}
        })
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        if (!jsonResponse.tracks) {
          return [];
        }
        const newDetails =  jsonResponse.tracks.items.map((track) => ({
          spotify_id: track.id,
          name: track.name,
          artists: track.artists[0].name,
          album: track.album.name,
          uri: track.uri,
          image: track.album.images[0].url
        }));
        setSearchArtist(newDetails)
      });
  }

  console.log(searchArtist)
console.log(chosenTracks)
console.log(brackets)

  return (
    <div>
      <NavBar />
      
      <SearchBar searchForTrack={searchForTrack}/>
      <SearchContainer brackets={brackets} addedSongs={addedSongs} searchArtist={searchArtist} chosenTracks={chosenTracks} setChosenTracks={setChosenTracks} setAddedSongs={setAddedSongs}/>
      <NewBracketForm localHandleNewBracket={handleNewBracket} chosenTracks={chosenTracks}/>
      <Refresh />

      <button onClick={clickHandler} >Show/hide brackets list</button>
          {showBrackets ? <BracketList brackets={brackets} setBrackets={setBrackets} />
          :
          null
          } 
      <RoundOne songs={songs} setSongs={setSongs} handleVotes={handleVotes} />
      <RoundTwo songs={songs} setSongs={setSongs} />
      <RoundThree songs={songs} setSongs={setSongs} />
      <RoundFour songs={songs} setSongs={setSongs}/>
      <FinalRound songs={songs} setSongs={setSongs} />
    </div>
  )
}

export default App;
