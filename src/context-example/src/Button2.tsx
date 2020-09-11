import React from "react";
import { MyContext } from "./Context";

export function Button2() {
    return (
        <MyContext.Consumer>
            {value => <button
                onClick={value.toggle}
                style={{
                    backgroundColor: !value.on ? "black" : "white"
                }}
            >2</button>}
        </MyContext.Consumer>
    )
}