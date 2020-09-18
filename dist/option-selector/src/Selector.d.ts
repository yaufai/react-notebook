import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
export interface Selectable {
    id: string;
    label: string;
}
export declare type SelectorProps = {
    options: Selectable[];
    onChange: (value: Selectable[]) => void;
};
export declare type SelectorState = {
    selected: string[];
    isModalOpen: boolean;
};
export declare class Selector extends Component<SelectorProps, SelectorState> {
    constructor(props: SelectorProps);
    select: (id: string) => void;
    unselect: (id: string) => void;
    change: (id: string) => void;
    toggle: () => void;
    getOptionById: (id: string) => Selectable | undefined;
    getAllSelected: () => Selectable[];
    componentDidUpdate(): void;
    render(): JSX.Element;
}
