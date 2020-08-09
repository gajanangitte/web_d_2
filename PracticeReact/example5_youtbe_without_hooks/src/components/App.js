import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoDetail from "./VideoDetail";


export default class App extends React.Component {
    
    state = {
        videos: [],
        selectedVideo: null,
    };
    
    KEY = 'AIzaSyAZkLEGgQPgk6ugx0imES7dcEwgD_Dqeec';

    componentDidMount() {
        this.onSubmit('Beatles')
    }

    onSubmit = async (term) => {
       let response = await youtube.get("/search", {
            params: {
              q: term,
              part: "snippet",
              type: 'video',
              maxResults: 8,
              key: this.KEY
            }
          });
        
        console.log(response.data.items);
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        })
    }

    onVideoSelect = (video) => {
        // console.log('From the App', video);
        this.setState({ selectedVideo: video })
    }
    

    render() {
        return (
            <div className='ui container'>
                {/* <div className='ui container'> */}
                    <SearchBar onSubmit={this.onSubmit}/>
                {/* </div> */}

                <div className='ui grid'>
                 <div className='ui row'>   
                    <div className='eleven wide column'>
                        <VideoDetail video={this.state.selectedVideo} />
                    </div>
                    
                    <div className='five wide column'>
                        <VideoList 
                            videos={this.state.videos} 
                            onVideoSelect={this.onVideoSelect}
                        />
                    </div>

                 </div>
                </div>
                  </div>
        )
    }
}