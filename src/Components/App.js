import React, { useEffect, useState } from 'react';
import { Redirect, Link, Route, Switch } from "react-router-dom";
import RoundOne from '../Components/RoundOne';
import RoundTwo from '../Components/RoundTwo';
import RoundThree from '../Components/RoundThree'
import RoundFour from '../Components/RoundFour'
import FinalRound from '../Components/FinalRound'
import BracketList from '../Components/BracketList'
import SearchBar from './SearchBar'
import SearchContainer from './SearchContainer'
import Header from './Header'
import NewBracketForm from './NewBracketForm'
import NewBracketItem from './NewBracketItem'
import BracketRound from './BracketRound'
import HomePage from './HomePage'


function App() {

  const [songs, setSongs] = useState([])
  const [brackets, setBrackets] = useState([])
  const [showBrackets, setShowBrackets] = useState(false)
  const [searchArtist, setSearchArtist] = useState([])
  const [chosenTracks, setChosenTracks] = useState([])
  const [addedSongs, setAddedSongs] = useState([])
  const [bracketId, setBracketId] = useState('')
  const [roundOneTracks, setRoundOneTracks] = useState([])

  const accessToken = 'BQDSylvhSpr8BQNGBuLFiQnByAhq3pBvPCCUMfimLU0n53yJUy2ISqN-H8YRVgoR6bPhAsrzLvcrcIm--re313goVm9ISpnz6fL5hBTm1ugKIqpMziQT-bMHWSepgYR257ffeo-OpP0OrMnFPvU74hEBWxVW'

console.log(addedSongs)

  useEffect(() => {
    fetch("http://localhost:3000/brackets")
        .then((response) => response.json())
        .then(setBrackets)
    }, [])

    function handleNewBracket(newBracket) {
      // setBrackets([...brackets, newBracket])
      console.log(newBracket)
      setBracketId(newBracket.id)
      handleNewJoin(newBracket.id)
      getRoundOneTracks(newBracket.id)
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
                     .then(setRoundOneTracks)
         }

  // function clickHandler() {
  //   setShowBrackets((showBrackets) => !showBrackets)
  // }

  // function handleVotes(updatedSong) {
  //   const updatedSongs = songs.map((song) =>
  //     song.id === updatedSong.id ? updatedSong : song
  //   );
  //     setSongs(updatedSongs);
  // }
    
  function searchForTrack(searchTerm) {
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

  console.log(roundOneTracks)

  return (
    <div>

      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route exact path="/brackets/:id">
      <BracketRound roundOneTracks={roundOneTracks}/>
      </Route>

      <Route path="/brackets">
        <BracketList brackets={brackets} setBrackets={setBrackets} getRoundOneTracks={getRoundOneTracks} setRoundOneTracks={setRoundOneTracks} roundOneTracks={roundOneTracks}/>
      </Route>

      {/* <Route path="/search" */}
          <Route path='/search'>
          <NewBracketForm 
              localHandleNewBracket={handleNewBracket}
              chosenTracks={chosenTracks} 
              roundOneTracks={roundOneTracks}
              brackets={brackets}
              setChosenTracks={setChosenTracks}
            />
         <NewBracketItem chosenTracks={chosenTracks} setChosenTracks={setChosenTracks} addedSongs={addedSongs}/>

      <SearchBar searchForTrack={searchForTrack}/>
      <SearchContainer 
              brackets={brackets} 
              addedSongs={addedSongs} 
              searchArtist={searchArtist} 
              chosenTracks={chosenTracks} 
              setChosenTracks={setChosenTracks} 
              setAddedSongs={setAddedSongs} 
              localHandleNewBracket={handleNewBracket} 
              chosenTracks={chosenTracks} 
              roundOneTracks={roundOneTracks}
            /> 
      </Route>


<Route path='/newbracket'>
          </Route>
</Switch>
    </div>
  )
}

export default App;
