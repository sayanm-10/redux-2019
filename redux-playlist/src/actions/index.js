// Action Creator

export const selectSong = song => {
    // returns an Action
    return {
        type: "SONG_SELECTED",
        payload: song
    };
};
