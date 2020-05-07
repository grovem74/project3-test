import React from 'react';

const SearchBar2 = ({ movie, handleInputChange, handleFormSubmit }) => {
    return (
        <>
            <form inline='true' onSubmit={handleFormSubmit}>
                <label hidden>Search for a tv show.</label>
                <input
                    type="text"
                    name="tv-show"
                    id="tv-show"
                    placeholder="Enter a tv show"
                    value={movie}
                    onChange={handleInputChange}
                />
                <button onClick={handleFormSubmit}>TV Show Search</button>
            </form>
        </>
    )
}

export default SearchBar2;