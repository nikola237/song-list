import { combineReducers } from 'redux';


const songsReducer = () => {
    return [
        {title: 'No scrubs', duration: '4:05'},
        {title: 'Macarena', duration: '1:34'},
        {title: 'All star', duration: '2:45'}
    ];

};

const selectedSongReducer = (selectedSong=null, action) => {
    if(action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});