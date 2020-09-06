import React, { Component } from "react";

type RewritableTextProps = {
    defaultValue: string
    onChange    : (e: Event) => void
}

type RewritableTextState = {
    value: string
}

export default class RewritableText extends Component<RewritableTextProps, {}> {
    constructor(props: RewritableTextProps) {
        super(props)
        this.state = {
            value: this.props.defaultValue
        }
    }
}