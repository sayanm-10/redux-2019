const songsReducer = () => {
    return [
        { title: "No Tears", duration: "3:05" },
        { title: "Divine", duration: "4:13" },
        { title: "Hallelujah", duration: "3:16" },
        { title: "November Rain", duration: "7:10" }
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === "SONG_SELECTED") {
        return action.payload;
    }

    return selectedSong;
};
