import React, { Component } from "react";

type RewritableTextProps = {
    defaultValue: string
    onChange    : (newValue: string) => void
    onFinalized : (value: string) => void
}

type RewritableTextState = {
    value: string,
    isEditing: boolean
}


export default class RewritableText extends Component<RewritableTextProps, RewritableTextState> {
    constructor(props: RewritableTextProps) {
        super(props)
        this.state = {
            value: this.props.defaultValue,
            isEditing: false
        }
    }

    toggleEditing = () => {
        if (this.state.isEditing) {
            this.props.onFinalized(this.state.value)
        }
        this.setState({isEditing: !this.state.isEditing})
    }

    onValueChange = (newValue: string) => {
        this.props.onChange(newValue)
        this.setState({ value: newValue })
    }

    finalizeByKey = (e: React.KeyboardEvent) => {
        if (e.key.toLowerCase() === "enter") {
            e.preventDefault()
            this.toggleEditing()
        }
    }

    render() {
        let text = <div onClick={this.toggleEditing}>
            {this.state.value}
        </div>

        let editor = <input
            value={this.state.value}
            onBlur={this.toggleEditing}
            onChange={(e) => this.onValueChange(e.target.value)}
            onKeyUp={this.finalizeByKey}
        ></input>
        return this.state.isEditing ? editor : text
    }
}