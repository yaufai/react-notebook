import React, { Component } from "react"
import { Button1 } from "./Button1"
import { Button2 } from "./Button2"
import { MyContext } from "./Context"

export default class TopLevel extends Component<{}, {on: boolean}> {
    constructor(props: {}) {
        super(props)
        this.state = {
            on: true
        }
    }

    toggle = () => {
        this.setState({
            on: !this.state.on
        })
    }
    render() {
        return <MyContext.Provider value={{
            on: this.state.on,
            toggle: this.toggle
        }}>
            <Button1 />
            <Button2 />
        </MyContext.Provider>
    }

}