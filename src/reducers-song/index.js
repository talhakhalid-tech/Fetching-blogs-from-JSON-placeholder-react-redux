import { combineReducers } from "redux";


//Reducers

const songsReducer= () => {

    return [
        {title: 'Bas ek baar',duration: '4:05'},
        {title: 'Tum bin',duration: '3:50'},
        {title: 'Shirfire',duration: '5:43'},
        {title: 'Daytime',duration: '6:01'},
        {title: 'Tose naina',duration: '2:56'}
    ];
}

const selectedSongReducer = (selectedSong = null,action) =>{
    if(action.type === 'SONG_SELECTED'){
        return action.payload
    }
    return selectedSong
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})