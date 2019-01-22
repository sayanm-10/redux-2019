import React, { Component } from "react";
import LanguageContext from "../context/LanguageContext";

export class Button extends Component {
    // * this static var must be called contextType
    static contextType = LanguageContext;

    render() {
        const text = this.context === "en" ? "Submit" : "Voorleggen";
        return <button className="ui primary button">{text}</button>;
    }
}

export default Button;
