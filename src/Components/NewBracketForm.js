import React, { useState } from 'react'
import BracketRound from './BracketRound'
import { BrowserRouter, useHistory, Switch, Route, Link } from 'react-router-dom'

function NewBracketForm({ chosenTracks, localHandleNewBracket, roundOneTracks }) {

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
        onClick={console.log('we want this to link to /brackets/:id')} 
        value="Create New Bracket" 
      />

    </form>

       {/* <Switch>
         <Route path="/brackets">  */}
      <BracketRound roundOneTracks={roundOneTracks} />
        {/* </Route>
       </Switch> */}
    </div>
);
}

export default NewBracketForm;