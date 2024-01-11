import React, { useState } from 'react'

const SearchBox = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('')

    const handleChange = (event) => {
        const newSearchterm = event.target.value;
        setSearchTerm(newSearchterm);
        onSearch(newSearchterm);
    }
  return (
    <div>
        <label htmlFor='search'>Search:</label>
        <input type='text' id='search' value={searchTerm}
                onChange={handleChange} placeholder='Search something from my blogs'/>
    </div>
  )
}

export default SearchBox