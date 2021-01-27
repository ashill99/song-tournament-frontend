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
import Bracket from './Bracket'



function App() {

  const [songs, setSongs] = useState([])
  const [brackets, setBrackets] = useState([])
  const [showBrackets, setShowBrackets] = useState(false)
  const [searchArtist, setSearchArtist] = useState([])
  const [chosenTracks, setChosenTracks] = useState([])
  const [addedSongs, setAddedSongs] = useState([])
  const [bracketId, setBracketId] = useState('')
  const [roundOneTracks, setRoundOneTracks] = useState([])

  const accessToken = 'BQA8kPun0v5ysNNVfjQiZGF-0de80yEi-jIrUHjMCFrkgqjwlve3uNr-kxsd1hH2SMSNJ9ODvh2RD2z_C-1UAWgkzD0jd9FLwegdOU65DTGpKuWBsGOzKXFuB6ftLUydYXR15bS5U-2XoAPsH-3kVkMK-zD2'

console.log(addedSongs)
console.log(roundOneTracks)

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


  function deleteTrack(e) {
    console.log(e.target.id)
    let oldId = e.target.id
    const sameSongObj = addedSongs.filter((song) => {
        if (song.spotify_id === oldId) {
            return song 
        }
    })
    let id = sameSongObj[0].id 
    console.log(oldId)
    console.log(sameSongObj)
    console.log(id)
    // const updatedChosenTracks = chosenTracks.filter((t) => t.id !== id)
    fetch(`http://localhost:3000/songs/${id}`, {
          method: "DELETE",})
          .then(r => r.json())
          .then(setChosenTracks(chosenTracks.filter((track) => track.id !== id)))
}

function renderNewTrackList(id) {
  console.log(id)
  console.log(chosenTracks)
  setChosenTracks(chosenTracks.filter((track) => track.id !== id))
  // const updatedChosenTracks = chosenTracks.filter((t) => t.id !== id)
  console.log(chosenTracks)
  // console.log(updatedChosenTracks)
  // setChosenTracks(updatedChosenTracks)
}

  return (
    <div>

      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route exact path="/brackets/:id">
      <BracketRound roundOneTracks={roundOneTracks}/>

      {/* <Bracket 
            setNewTracks={setNewTracks}
                bracket={bracket}
                id={bracket.id}
                key={bracket.id}
                name={bracket.name}
                category={bracket.category}
                songs={bracket.songs}
                
                //     .map((track) => <SongCard track={track.name} 
                // artists={track.artists} 
                // image={track.image} 
                // id={track.id} 
                /> */}

      </Route>

      <Route path="/brackets">
        <h2>Past Brackets</h2>
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
              bracketId={bracketId}
            />

         <NewBracketItem chosenTracks={chosenTracks} setChosenTracks={setChosenTracks} addedSongs={addedSongs} deleteTrack={deleteTrack}/>

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
