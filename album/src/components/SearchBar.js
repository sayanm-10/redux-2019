import React, { Component } from "react";

export default class SearchBar extends Component {
    render() {
        return (
            <div className="ui segment">
                <form action="" className="ui form">
                    <div className="field">
                        <label htmlFor="search">Search</label>
                        <input name="search" type="text" />
                    </div>
                </form>
            </div>
        );
    }
}
