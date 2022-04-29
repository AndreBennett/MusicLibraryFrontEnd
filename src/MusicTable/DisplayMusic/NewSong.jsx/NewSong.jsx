import React from 'react';
import axios from 'axios';
export default class NewSong extends React.Component{
 
    state = {
        postTitle: 'title',
        postArtist: 'artist',
        postAlbum: 'album',
        postReleaseDate: 'release_date',
        postGenre: 'genre',
        
    }
    handleChange = event => {
        this.setState({ postTitle: event.target.value })
        this.setState({ postArtist: event.target.value })
        this.setState({ postAlbum: event.target.value })
        this.setState({ postReleaseDate: event.target.value })
        this.setState({ postGenre: event.target.value });
    }
    handleSubmit = event => {
        event.preventDefault();
        const post = {
            postTitle: this.state.postTitle,
            postArtist: this.state.postArtist,
            postAlbum: this.state.postAlbum,
            postReleaseDate: this.state.postReleaseDate,
            postGenre: this.state.postGenre
        };
        axios.post('http://127.0.0.1:8000/', {post})
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
        }
        render() {
            return (
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Title:
                            <input type='title' name='title' onChange={this.handleChange} />
                        </label>
                        <button type='submit'>Add Song</button>
                    </form>
                </div>
            )
        }
    }
