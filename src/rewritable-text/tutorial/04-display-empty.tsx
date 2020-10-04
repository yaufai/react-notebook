import React, { ReactElement, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons"

type RewritableTextProps = {
    defaultValue: string,
    displayWhenEmpty: string|ReactElement,
    onChange: (value: string) => void,
    onFinalized: (value: string) => void
}

export function RewritableText(props: RewritableTextProps) {
    let [value, setValue] = useState(props.defaultValue)
    let [isEditing, setIsEditing] = useState(false)

    let toggleEditing = () => setIsEditing(!isEditing)
    
    let text = <div onClick={toggleEditing} style={{ cursor: "pointer" }}>
        <span style={{ marginRight: "6px" }}>
            {value !== "" ? value : props.displayWhenEmpty}
        </span>
        <FontAwesomeIcon icon={faPencilAlt} />
    </div>

    let editor = <input
        value={value}
        onBlur={() => {
            props.onFinalized(value)
            toggleEditing()
        }}
        onChange={(e) => {
            let newValue = e.target.value
            props.onChange(newValue)
            setValue(newValue)
        }}
        autoFocus={true}
    />
    
    return isEditing ? editor : text
}