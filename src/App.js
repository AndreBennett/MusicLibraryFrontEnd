import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayMusic from './MusicTable/DisplayMusic/DisplayMusic';
import SearchBar from './MusicTable/DisplayMusic/SearchBar/SearchBar';


function App() {

  const [songs, setSongs] = useState([]);

  function addNewSong(song){

    let tempSongs = [...songs, song];

    setSongs(tempSongs);
}

    useEffect(() => {
      getAllSongs();
  }, [])

    async function getAllSongs(){
      let response = await axios.get('http://127.0.0.1:8000/api/Song/');
      setSongs(response.data);
  }
    return (
      <div>
        <DisplayMusic parentSongs={songs} />
        <SearchBar addNewSong={addNewSong} />
      </div>
  );
}

export default App;
