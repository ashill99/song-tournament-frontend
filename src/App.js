import React, { useEffect, useState } from 'react';
import RoundOne from './RoundOne';
import RoundTwo from './RoundTwo';
import RoundThree from './RoundThree'
import RoundFour from './RoundFour'
import FinalRound from './FinalRound'

function App() {

  const [songs, setSongs] = useState([])
  
    useEffect(() => {
        fetch("http://localhost:4000/songs")
          .then((response) => response.json())
          .then(setSongs)
      }, [])
    
      console.log(songs)
    
  return (
    <div>
      <RoundOne songs={songs} setSongs={setSongs} />
      <RoundTwo songs={songs} setSongs={setSongs} />
      <RoundThree songs={songs} setSongs={setSongs} />
      <RoundFour songs={songs} setSongs={setSongs}/>
      <FinalRound songs={songs} setSongs={setSongs} />
    </div>
  )
}

export default App;
