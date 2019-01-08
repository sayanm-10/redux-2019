import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
    if (!song) {
        return <div>Select a song</div>;
    }

    return (
        <div>
            <h3>Details:</h3>
            <div>
                <p>{song.title}</p>
                <p>{song.duration}</p>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
