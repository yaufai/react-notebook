import React, { Component } from "react";
declare type RewritableTextProps = {
    defaultValue: string;
    onChange: (newValue: string) => void;
    onFinalized: (value: string) => void;
};
declare type RewritableTextState = {
    value: string;
    isEditing: boolean;
};
export default class RewritableText extends Component<RewritableTextProps, RewritableTextState> {
    constructor(props: RewritableTextProps);
    toggleEditing: () => void;
    onValueChange: (newValue: string) => void;
    finalizeByKey: (e: React.KeyboardEvent) => void;
    render(): JSX.Element;
}
export {};
