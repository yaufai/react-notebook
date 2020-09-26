import React, { ReactElement, useState,  } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons"

type RewritableTextProps = {
    defaultValue: string,
    displayWhenEmpty: string|ReactElement,
    onChange: (value: string) => void,
    onFinalized: (value: string) => void
}

export default function RewritableText(props: RewritableTextProps) {
    let [value, setValue] = useState(props.defaultValue)
    let [isEditing, setIsEditing] = useState(false)

    let toggleEditing = () => setIsEditing(!isEditing)

    let finalize = (e?: React.FocusEvent<HTMLInputElement>) => {
        props.onFinalized(value)
        toggleEditing()
    }

    let onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            finalize()
        }
    }

    let text = <div onClick={toggleEditing} style={{ cursor: "pointer" }}>
        <span style={{ marginRight: "6px" }}>
            {value !== "" ? value : props.displayWhenEmpty}
        </span>
        <FontAwesomeIcon icon={faPencilAlt} />
    </div>

    let editor = <input
        value={value}
        onBlur={finalize}
        onChange={(e) => {
            let newValue = e.target.value
            props.onChange(newValue)
            setValue(newValue)
        }}
        onKeyUp={onKeyUp}
        autoFocus={true}
    />
    
    return isEditing ? editor : text
}