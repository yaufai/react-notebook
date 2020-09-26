import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons"

type RewritableTextProps = {
    defaultValue: string,
    onChange: (value: string) => void,
    onFinalized: (value: string) => void
}

export default function RewritableText(props: RewritableTextProps) {
    let [value, setValue] = useState(props.defaultValue)
    let [isEditing, setIsEditing] = useState(false)

    let toggleEditing = () => setIsEditing(!isEditing)
    
    let text = <div onClick={toggleEditing} style={{ cursor: "pointer" }}>
        <span style={{ marginRight: "6px" }}>
            {value !== "" ? value : "クリックしてテキストを編集を開始"}
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