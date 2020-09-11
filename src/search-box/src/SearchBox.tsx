import React from "react"

type SearchBoxProps<T> = {
    options: T[],
    filterFunction: (word: string, option: T) => boolean,
    onChange: (word: string, options: T[]) => void
}

export default function SearchBox<T>(props: SearchBoxProps<T>) {
    return (
        <input
            onChange={(e) => {
                let word = e.target.value
                let result = props.options.filter(option => props.filterFunction(word, option))
                props.onChange(word, result)
            }}
        />
    )
}