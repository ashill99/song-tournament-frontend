import React, { useEffect, useState } from 'react';
import RoundOne from '../Components/RoundOne';
import RoundTwo from '../Components/RoundTwo';
import RoundThree from '../Components/RoundThree'
import RoundFour from '../Components/RoundFour'
import FinalRound from '../Components/FinalRound'
import BracketList from '../Components/BracketList'

function App() {

  const [songs, setSongs] = useState([])
  const [brackets, setBrackets] = useState([])
  const [showBrackets, setShowBrackets] = useState(false)
  
    useEffect(() => {
        fetch("http://localhost:3000/songs")
          .then((response) => response.json())
          .then((songs) => {
            const updatedSongs = songs.map((song) => {
              return { ...song, round1winner: false };
            });
          setSongs(updatedSongs);
          })   
      }, [])

  // useEffect(() => {
  //   fetch("http://localhost:3000/songs")
  //     .then((response) => response.json())
  //     .then(setSongs)
  // }, [])

  useEffect(() => {
    fetch("http://localhost:3000/brackets")
        .then((response) => response.json())
        .then(setBrackets)
    }, [])
  
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
    
  return (
    <div>
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
