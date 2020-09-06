import React, { Component } from "react";
import { SelectorContext } from "./SelectorContext";
import SelectorModal from "./SelectorModal";
import { SelectedItemStyle, SelectedListStyle } from "./Styles"
import 'bootstrap/dist/css/bootstrap.min.css';

export interface Selectable {
    id: string
    label:string
}

export type SelectorProps = {
    options : Selectable[]
    onChange: (value: Selectable[]) => void
}

export type SelectorState = {
    selected: string[]
    isModalOpen: boolean
}

export class Selector extends Component<SelectorProps, SelectorState>  {
    constructor(props: SelectorProps) {
        super(props)
        this.state = {
            selected: [ ],
            isModalOpen: false
        }
    }

    select   = (id: string) => {
        if (!this.state.selected.includes(id)) {
            this.setState({
                selected: this.state.selected.concat([id])
            })
        }
    }

    unselect = (id: string) => {
        this.setState({
            selected: this.state.selected.filter(s => s !== id)
        })
    }

    change = (id: string) => {
        if (this.state.selected.includes(id)) {
            this.unselect(id)
        } else {
            this.select(id)
        }
    }

    toggle = () => {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

    getOptionById = (id: string) => {
        let candidates = this.props.options.filter(option => option.id === id)
        if (candidates.length >= 1) {
            return candidates[0]
        } else {
            return undefined
        }
    }

    getAllSelected = () => {
        return this.state.selected
            .map(this.getOptionById)
            .filter(option => option !== undefined) as Selectable[]
    }

    componentDidUpdate() {
        this.props.onChange(this.getAllSelected())
    }

    render() {
        return (
            <SelectorContext.Provider value={{
                selected: this.state.selected,
                select  : this.select,
                unselect: this.unselect,
                options : this.props.options,
                change  : this.change,
                isSelected: (id) => this.state.selected.includes(id),
                getOptionById: this.getOptionById
            }}>
                <div style={SelectedListStyle} onClick={this.toggle}>{
                    this.getAllSelected()
                    .map((option) => <div style={SelectedItemStyle} key={option.id}>{option.label}</div>)
                }</div>
                <SelectorModal isOpen={this.state.isModalOpen} toggle={this.toggle} />
            </SelectorContext.Provider>
        )
    }
}