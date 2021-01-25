import React from 'react'

function SearchBar({searchForTrack}) {

function handleNewSearch(e) {
    e.preventDefault()
    console.log(e.target.value)
    searchForTrack(e.target.value)
}
    return (
        <form className="form" id="addItemForm">
        <input
          type="text"
          className="input"
          id="addInput"
          placeholder="Search Tracks..."
          onChange={handleNewSearch}
        />
      </form>   
    )

}

export default SearchBar