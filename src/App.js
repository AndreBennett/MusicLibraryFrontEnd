import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayMusic from './MusicTable/DisplayMusic/DisplayMusic';

function App() {

  const [songs, setSongs] = useState([]);

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
    </div>
  );
}

export default App;
