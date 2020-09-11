import React from "react"

export type Context = {
    on: boolean,
    toggle: () => void
}

export const defaultContext: Context = {
    on: true,
    toggle: () => {}
}

export const MyContext = React.createContext(defaultContext)
