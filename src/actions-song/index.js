//Action creater 

export const selectSong = (song) =>{
    //Action to be returned
    return{
        type: 'SONG_SELECTED',
        payload: song
    };
};