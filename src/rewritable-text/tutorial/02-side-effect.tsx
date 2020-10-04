import React, { useState } from "react"

type RewritableTextProps = {
    defaultValue: string,
    onChange: (value: string) => void,
    onFinalized: (value: string) => void
}

export function RewritableText(props: RewritableTextProps) {
    let [value, setValue] = useState(props.defaultValue)
    let [isEditing, setIsEditing] = useState(false)

    let toggleEditing = () => setIsEditing(!isEditing)
    
    let text = <div onClick={toggleEditing}>
        {value !== "" ? value : "クリックしてテキストを編集を開始"}
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