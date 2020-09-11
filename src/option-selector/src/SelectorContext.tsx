import React from "react"
import { Selectable } from "./Selector"

const defaultValue = {
    selected: [] as string[],
    select  : (id: string) => {},
    unselect: (id: string) => {},
    change  : (id: string) => {},
    options : [] as Selectable[],
    isSelected: ((id) => false) as (id: string) => boolean,
    getOptionById: ((id) => { return { id: "", label: "" } }) as (id: string) => Selectable|undefined
}

export const SelectorContext = React.createContext(defaultValue)