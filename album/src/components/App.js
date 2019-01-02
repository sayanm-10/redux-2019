import React, { Component } from "react";

import SearchBar from "./SearchBar";

const container_style = {
    marginTop: "10px"
};

class App extends Component {
    onSearchSubmit(term) {
        console.log(term);
    }

    render() {
        return (
            <div className="ui container" style={container_style}>
                <SearchBar onSearch={this.onSearchSubmit} />
            </div>
        );
    }
}

export default App;
