import React, { useState } from 'react'
import NewBracketItem from './NewBracketItem'

function NewBracketForm({chosenTracks, localHandleNewBracket }) {
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


  return (

    <form onSubmit={handleSubmit} className="new-bracket-form">
      <input 
        name="name"
        placeholder="Bracket Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br></br>

      <input 
        name="category"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <br></br>

      <NewBracketItem chosenTracks={chosenTracks}/>
        <br></br>
      <input type="submit" value="Create New Bracket" />

    </form>
);
}
export default NewBracketForm;