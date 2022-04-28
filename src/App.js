import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayMusic from './MusicTable/DisplayMusic/DisplayMusic';
import NewSong from './MusicTable/DisplayMusic/NewSong.jsx/NewSong';
import './App.css';

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
      <div className='container-fluid'>
        <div className='row'>
          <h3 style={{margin: '.5em'}}>Music
          <small className='text-muted'>Library</small></h3>
          <div className='col-md-10'>
            <div className='border-box'>
            <DisplayMusic parentSongs={songs} />
            </div>
            <div className='row'>
            <div className='col-sm-12'>
            <div className='border-box'>
            <NewSong addNewSong={addNewSong} />
            </div>
            </div>
            </div>
          </div>
        </div>        
      </div>
  );
}

export default App;
