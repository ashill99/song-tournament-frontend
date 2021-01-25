import React, { useEffect, useState } from 'react';
import RoundOne from '../Components/RoundOne';
import RoundTwo from '../Components/RoundTwo';
import RoundThree from '../Components/RoundThree'
import RoundFour from '../Components/RoundFour'
import FinalRound from '../Components/FinalRound'
import BracketList from '../Components/BracketList'
import SearchBar from './SearchBar'
import SearchContainer from './SearchContainer'

function App() {

  const [songs, setSongs] = useState([])
  const [brackets, setBrackets] = useState([])
  const [showBrackets, setShowBrackets] = useState(false)
  const [searchArtist, setSearchArtist] = useState([])

  const accessToken = 'BQC73z-KrAHZ85OyByFqdBfc7Xd1UxFlYG8Pkt4S2nqpwzu0K_4W5oHIITjn6XgbjtnZLHx9JgVdi6SFfxARIoG2XwHZUG2G_JytXsHiIrHlpcnpeXVrCQovlueoNagfkfzzad3D4VHGScdgQo8swDaWKHsj'
  
    // useEffect(() => {
    //     fetch("http://localhost:3000/songs")
    //       .then((response) => response.json())
    //       .then((songs) => {
    //         const updatedSongs = songs.map((song) => {
    //           return { ...song, round1winner: false };
    //         });
    //       setSongs(updatedSongs);
    //       })   
    //   }, [])

  // useEffect(() => {
  //   fetch("http://localhost:3000/brackets")
  //       .then((response) => response.json())
  //       .then(setBrackets)
  //   }, [])
  
    // console.log(songs)
    // console.log(brackets)

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
          id: track.id,
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

  return (
    <div>
      <SearchBar searchForTrack={searchForTrack}/>
      <SearchContainer searchArtist={searchArtist} />
      
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
