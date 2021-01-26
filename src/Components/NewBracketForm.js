import React, { useState } from 'react'
import BracketRound from './BracketRound'
import { BrowserRouter, useHistory, Switch, Route, Link } from 'react-router-dom'

function NewBracketForm({ chosenTracks, localHandleNewBracket, roundOneTracks, brackets }) {

    const [name, setName] = useState("")
    const [category, setCategory] = useState("")

    function handleSubmit(event) {
        event.preventDefault();
    fetch("http://localhost:3000/brackets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        category: category
      }),
    })
    .then(r => r.json())
    .then(newBracket => localHandleNewBracket(newBracket))
  }

  const lastBracket = [brackets.length - 1]
  let id = lastBracket
  console.log(id)


// function handleLinkNewBracket() {
//     <Link to="localhost:3001/brackets"></Link>
//   // console.log('link clicked')
// }

  return (
    <div>        

    <form onSubmit={handleSubmit} className="new-bracket-form">

      <input 
        name="name"
        placeholder="Name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br></br>

      <input 
        name="category"
        placeholder="Category..."
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <br></br>
      <input  
        type="submit" 
        onClick={console.log("bracket created")}
        value="Create New Bracket" 
      />

    </form>
    <Link to={`/brackets/${id}`}>Start Bracket</Link>

       {/* <Switch>
         <Route path="/brackets">  */}
      <BracketRound roundOneTracks={roundOneTracks} />
        {/* </Route>
       </Switch> */}

    </div>
);
}

export default NewBracketForm;