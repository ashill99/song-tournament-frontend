import React, {useState} from 'react'

function SearchBar({ search, setSearch, searchForTrack }) {

function handleNewSearch(e) {
    e.preventDefault()
    searchForTrack(e.target.value)
    // setSearch("")
    console.log(e.target.value.length)
    setSearch(e.target.value.length)
    setSearch(e.target.value.length)
    console.log(search)
}

    return (
        <form className="search-bar-form" id="addItemForm">
        <input
          type="text"
          className="input"
          id="addInput"
          placeholder="Search Tracks..."
          // value={search}
          onChange={handleNewSearch}
        />
      </form>   
    )

}

export default SearchBar