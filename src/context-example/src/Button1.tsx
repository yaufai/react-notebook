import React, { Component } from "react";
import { MyContext } from "./Context";

export class Button1 extends Component<{}, {}> {
    render() {
        return (
            <button
                onClick={this.context.toggle}
                style={{
                    backgroundColor: this.context.on ? "black" : "white"
                }}
            >1</button>
        )
    }
}
Button1.contextType = MyContext