import React, { Component } from "react";
import "../public/css/Die.css";

class Die extends Component {
    render() {
        return (
            <div className="Die">
                <i
                    className={`fas fa-dice-${this.props.num} ${
                        this.props.roll ? "shake" : ""
                    }`}
                ></i>
            </div>
        );
    }
}

export default Die;
