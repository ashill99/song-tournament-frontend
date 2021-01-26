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
import BracketRound from './BracketRound'

function App() {

  const [songs, setSongs] = useState([])
  const [brackets, setBrackets] = useState([])
  const [showBrackets, setShowBrackets] = useState(false)
  const [searchArtist, setSearchArtist] = useState([])
  const [chosenTracks, setChosenTracks] = useState([])
  const [addedSongs, setAddedSongs] = useState([])
  const [bracketId, setBracketId] = useState('')
  const [roundOneTracks, setRoundOneTracks] = useState([])


  const accessToken = 'BQDMVGFrIwFbWc8181b7UdMs8cYnDmUwHXGubnHnd4syiiMFxVEJac5pNJG8jWK5vnnSM-_epYr8RdO02jod3JsDp5F5B32pe9UdWkhyupsXmZZKlnxCfw7NzRjDI4FnW5Ls2Zf3tyPsZCmB66J0hDxtOvlL'
console.log(addedSongs)

  useEffect(() => {
    fetch("http://localhost:3000/brackets")
        .then((response) => response.json())
        .then(setBrackets)
    }, [])

    function handleNewBracket(newBracket) {
      setBrackets([...brackets, newBracket])
      console.log(newBracket)
      setBracketId(newBracket.id)
      handleNewJoin(newBracket.id)
      // getRoundOneTracks(newBracket.id)
    }

    function handleNewJoin(bracket_id) {
      addedSongs.map((song) => {
        console.log(bracket_id)
        const newSongBracketObj = {
          bracket_id: bracket_id,
          song_id: song.id
        }
        fetch("http://localhost:3000/songbrackets", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify(newSongBracketObj)
          }, getRoundOneTracks(bracket_id))
              .then(response => response.json())
              .then(newSongBracket => console.log(newSongBracket))
              })
            }

         function getRoundOneTracks(id) {       
              fetch(`http://localhost:3000/brackets/${id}`)
                     .then(r => r.json())
                     .then(roundData => {
                       console.log(roundData)
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

  <BracketRound roundOneTracks={roundOneTracks} />


      {/* <RoundOne songs={songs} setSongs={setSongs} handleVotes={handleVotes} />
      <RoundTwo songs={songs} setSongs={setSongs} />
      <RoundThree songs={songs} setSongs={setSongs} />
      <RoundFour songs={songs} setSongs={setSongs}/>
      <FinalRound songs={songs} setSongs={setSongs} /> */}
    </div>
  )
}

export default App;
