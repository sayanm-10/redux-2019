import React, { Component } from "react";

export default class SearchBar extends Component {
    onInputChange(event) {
        console.log(event.target.value);
    }

    render() {
        return (
            <div className="ui segment">
                <form action="" className="ui form">
                    <div className="field">
                        <label htmlFor="search">Search</label>
                        <input
                            name="search"
                            type="text"
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}
