import React, { Component } from "react";
import unsplash from "../api/unsplash";

import SearchBar from "./SearchBar";

const container_style = {
    marginTop: "10px"
};

class App extends Component {
    state = {
        images: []
    };

    onSearchSubmit = async term => {
        const response = await unsplash.get("search/photos", {
            params: { query: term }
        });

        this.setState({ images: response.data.results });
    };

    render() {
        return (
            <div className="ui container" style={container_style}>
                <SearchBar onSearch={this.onSearchSubmit} />
                <div>Found {this.state.images.length} images</div>
            </div>
        );
    }
}

export default App;
