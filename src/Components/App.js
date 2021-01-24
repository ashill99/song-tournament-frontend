import React, { useEffect, useState } from 'react';
import RoundOne from '../Components/RoundOne';
import RoundTwo from '../Components/RoundTwo';
import RoundThree from '../Components/RoundThree'
import RoundFour from '../Components/RoundFour'
import FinalRound from '../Components/FinalRound'

function App() {

  const [songs, setSongs] = useState([])
  
    useEffect(() => {
        fetch("http://localhost:3000/songs")
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
