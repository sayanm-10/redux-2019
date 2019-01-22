import React, { Component } from "react";
import LanguageContext from "../context/LanguageContext";

export class Field extends Component {
    // * this static var must be called contextType
    static contextType = LanguageContext;

    render() {
        const text = this.context === "en" ? "Name" : "Naam";
        return (
            <div className="ui field">
                <label>{text}</label>
                <input type="text" />
            </div>
        );
    }
}

export default Field;
