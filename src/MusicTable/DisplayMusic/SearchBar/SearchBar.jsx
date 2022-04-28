import React, { useState } from 'react';


const SearchBar = (props) => {
    
    const [title, setTitle] = useState('');    
    const [artist, setArtist] = useState('');    
    const [album, setAlbum] = useState('');    
    const [release_date, setReleaseDate] = useState('');    
    const [genre, setGenre] = useState('');    

    function handleSubmit(event) {
        event.preventDefault();
        let newSong = {
            title: title,
            artist: artist,
            album: album,
            release_date: release_date,
            genre: genre
        };
        console.log(newSong)
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input type='title' value={title} onChange={(event) => setTitle(event.target.value)} />
            <label>Artist</label>
            <input type='artist' value={artist} onChange={(event) => setArtist(event.target.value)} />
            <label>Album</label>
            <input type='album' value={album} onChange={(event) => setAlbum(event.target.value)} />
            <label>Release Date</label>
            <input type='date' value={release_date} onChange={(event) => setReleaseDate(event.target.value)} />
            <label>Genre</label>
            <input type='genre' value={genre} onChange={(event) => setGenre(event.target.value)} />
            <button type='submit'>Add Song</button>
        </form>

     );
}
 
export default SearchBar;