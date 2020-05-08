import React from 'react';

const SearchBar = ({ movie, handleInputChange, handleFormSubmit }) => {
    return (
        <>
            <form inline='true' onSubmit={handleFormSubmit}>
                <label hidden>Search for a movie.</label>
                <input
                    type="text"
                    name="movie"
                    id="movie"
                    placeholder="Enter a movie"
                    value={movie}
                    onChange={handleInputChange}
                />
                <button onClick={handleFormSubmit}>Movie Search</button>
            </form>
        </>
    )
}

export default SearchBar;