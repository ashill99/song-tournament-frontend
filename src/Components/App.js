import React, { useEffect, useState } from 'react';
import { Redirect, Link, Route, Switch } from "react-router-dom";

import BracketList from '../Components/BracketList'
import SearchBar from './SearchBar'
import SearchContainer from './SearchContainer'
import Header from './Header'
import NewBracketForm from './NewBracketForm'
import NewBracketItem from './NewBracketItem'
import BracketRound from './BracketRound'
import HomePage from './HomePage'
import Bracket from './Bracket'
import PopUp from './PopUp'
import TopBangers from './TopBangers'

function App() {

  const [songs, setSongs] = useState([])
  const [brackets, setBrackets] = useState([])
  const [showBrackets, setShowBrackets] = useState(false)
  const [searchArtist, setSearchArtist] = useState([])
  const [chosenTracks, setChosenTracks] = useState([])
  const [addedSongs, setAddedSongs] = useState([])
  const [bracketId, setBracketId] = useState('')
  const [roundOneTracks, setRoundOneTracks] = useState([])
  // const [searchLength, setSearchLength] = useState(0)
  const [search, setSearch] = useState(0)
  const [seen, setSeen] = useState(false)

  const accessToken = 'BQBh4Y0wvuK4k_PXkmS19VUGqU6WyjB1qFh_pN0Z1Lzaa3NJA8myWNCjIy-n6Tl5PlrefDvY80wYUIW4WHFzbG0eEPvY86CeLpQdKX1irsezELNBFMJfzIe2VNcZ7b71-iyANxNgOHb36ztXov7Oqz_MZpjr'

  useEffect(() => {
    fetch("http://localhost:3000/brackets")
        .then((response) => response.json())
        .then(setBrackets)
    },[])

    function handleNewBracket(newBracket) {
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
    
  function searchForTrack(searchTerm) {
    fetch(`https://api.spotify.com/v1/search?type=track&q=${searchTerm}&limit=10`, {
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

  function deleteTrack(e) {
    console.log(e.target.id)
    let oldId = e.target.id
    const sameSongObj = addedSongs.filter((song) => {
        if (song.spotify_id === oldId) {
            return song 
        }
    })
    let id = sameSongObj[0].id 

    fetch(`http://localhost:3000/songs/${id}`, {
          method: "DELETE",})
          .then(r => r.json())
          .then(setChosenTracks(chosenTracks.filter((track) => track.id !== id)))
}

function renderNewTrackList(id) {
  console.log(id)
  console.log(chosenTracks)
  setChosenTracks(chosenTracks.filter((track) => track.id !== id))
}

function renderOldBracketSongs(bracketObj) {
  setRoundOneTracks(bracketObj)
  console.log(roundOneTracks)
}

function onUpdateSong() {

      console.log('hi')
      // setAddedSongs(updatedSongs);
    }


    function handleUpdateVotes(id, song) {

      console.log(addedSongs)
      const updateObj = {
        votes: song.votes + 1
      };
      console.log(updateObj)
      fetch(`http://localhost:3000/songs/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateObj),
      })
        .then(r => r.json())
        .then(setRoundOneTracks);
      }


console.log(roundOneTracks)

function togglePop() {
  setSeen(!seen)
  console.log(seen)
  return (
    <PopUp seen={seen} setSeen={setSeen} /> 
    
  )
}

  return (
    <div>

      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route exact path="/brackets/:id">

          <BracketRound 
              roundOneTracks={roundOneTracks}
              onUpdateSong={onUpdateSong}
              setAddedSongs={setAddedSongs}
              handleUpdateVotes={handleUpdateVotes}
              seen={seen}
              setSeen={setSeen}
              togglePop={togglePop}
          />

        </Route>

        <Route path="/brackets">
          <h2 className="bracket-list=title">Past Brackets</h2>
          <BracketList 
              brackets={brackets} 
              setBrackets={setBrackets} 
              getRoundOneTracks={getRoundOneTracks} 
              setRoundOneTracks={setRoundOneTracks} 
              roundOneTracks={roundOneTracks}
              renderOldBracketSongs={renderOldBracketSongs}
          />
        </Route>
      
        <Route path='/search'>
          <h2>Choose Your Bangers</h2>
            <NewBracketForm 
                localHandleNewBracket={handleNewBracket}
                chosenTracks={chosenTracks} 
                roundOneTracks={roundOneTracks}
                brackets={brackets}
                setChosenTracks={setChosenTracks}
                bracketId={bracketId}
              />

          <NewBracketItem 
              chosenTracks={chosenTracks} 
              setChosenTracks={setChosenTracks} 
              addedSongs={addedSongs} 
              deleteTrack={deleteTrack}
          />
          <br></br>

          <SearchBar 
              searchForTrack={searchForTrack}
              search={search}
              setSearch={setSearch}
          />
          <br></br><br></br>

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
                search={search}
                setSearch={setSearch}
              /> 
        </Route>

      </Switch>
    </div>
  )
}

export default App;
