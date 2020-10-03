import React, { Component } from "react";
import "../public/css/DiceRoll.css";
import Die from "./Die";

class DiceRoll extends Component {
    numbers = ["one", "two", "three", "four", "five", "six"];

    constructor(props) {
        super(props);
        this.state = { rolling: false, die1: "one", die2: "two" };
    }

    rolling() {
        const die1 = this.numbers[
            Math.floor(Math.random() * this.numbers.length)
        ];
        const die2 = this.numbers[
            Math.floor(Math.random() * this.numbers.length)
        ];
        this.setState({ rolling: true, die1: die1, die2: die2 });
        setTimeout(() => this.setState({ rolling: false }), 1000);
    }

    render() {
        return (
            <div className="DiceRoll">
                <div>
                    <Die roll={this.state.rolling} num={this.state.die1} />
                    <Die roll={this.state.rolling} num={this.state.die2} />
                </div>
                <button
                    disabled={this.state.rolling}
                    onClick={() => this.rolling()}
                >
                    {this.state.rolling ? "Rolling..." : "Roll dice!"}
                </button>
            </div>
        );
    }
}

export default DiceRoll;
