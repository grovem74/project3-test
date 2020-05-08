import React from 'react';

const SearchBar2 = ({ tvShow, handleInputChange, handleFormSubmit }) => {
    console.log(tvShow)
    return (
        <>
        
            <form inline='true' onSubmit={handleFormSubmit}>
                <label hidden>Search for a tv show.</label>
                <input
                    type="text"
                    name="tv"
                    id="tv"
                    placeholder="Enter a tv show"
                    value={tvShow}
                    onChange={handleInputChange}
                />
                <button onClick={handleFormSubmit}>TV Show Search</button>
            </form>
        </>
    )
   
}

export default SearchBar2;