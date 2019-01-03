import React, { Component } from "react";

export class SearchBar extends Component {
    state = {
        term: ""
    };

    onFormSubmit = event => {
        event.preventDefault();

        // TODO: Call parent props method
    };

    render() {
        return (
            <div className="ui segment search-bar">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label htmlFor="search">Video Search</label>
                        <input
                            name="search"
                            type="text"
                            value={this.state.term}
                            onChange={e =>
                                this.setState({ term: e.target.value })
                            }
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
