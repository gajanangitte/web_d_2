import { combineReducers } from 'redux';
// import { selectSong } from '../actions';

const songsReducer = () => {
    return [
        {title: 'No Scrubs' , duration: '4:05'},
        {title: 'Macarena' , duration: '2:30'},
        {title: 'All Stars' , duration: '3:15'},
        {title: 'I Want it that Way' , duration: '2:25'},
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers( {
    songs: songsReducer,
    selectedSong: selectedSongReducer,
})