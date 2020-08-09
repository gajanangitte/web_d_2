import {useState, useEffect} from 'react';
import youtube from '../api/youtube';

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);
    
    useEffect(() => {
        search(defaultSearchTerm);
    }, [defaultSearchTerm])

    const search = async (term) => {
        let response = await youtube.get("/search", {
             params: {
               q: term,
               part: "snippet",
               type: 'video',
               maxResults: 8,
               key: 'AIzaSyAZkLEGgQPgk6ugx0imES7dcEwgD_Dqeec'
             }
           });
         
         setVideos(response.data.items);
     }

     return [videos, search];
}

export default useVideos;