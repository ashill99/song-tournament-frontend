import React, { useEffect, useState } from 'react';
import RoundOne from './RoundOne';
import RoundTwo from './RoundTwo';
import RoundThree from './RoundThree'
import RoundFour from './RoundFour'
import FinalRound from './FinalRound'

function App() {

  // Test one two three 

  const [songs, setSongs] = useState([])
  const [winnerR1, setWinnerR1] = useState(false)
  const [winnerR2, setWinnerR2] = useState(false)
  const [winnerR3, setWinnerR3] = useState(false)
  const [winnerR4, setWinnerR4] = useState(false)



    useEffect(() => {
        fetch("http://localhost:4000/songs")
          .then((response) => response.json())
          .then(setSongs)
      }, [])

    const filteredWinners = songs.filter((song) => !song.isWinner)
      
    function handleWinnerVote(id) {
      
    }
    
  return (
    <div>
      <RoundOne filteredWinners={filteredWinners}/>
      <RoundTwo />
      <RoundThree />
      <RoundFour />
      <FinalRound />
    </div>
  )
}

export default App;
