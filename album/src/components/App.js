import React, { Component } from "react";

import SearchBar from "./SearchBar";

const container_style = {
    marginTop: "10px"
};

class App extends Component {
    render() {
        return (
            <div className="ui container" style={container_style}>
                <SearchBar />
            </div>
        );
    }
}

export default App;
