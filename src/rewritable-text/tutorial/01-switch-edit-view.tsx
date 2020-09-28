import React, { useState } from "react"

type RewritableTextProps = {
    defaultValue: string
}

export default function RewritableText(props: RewritableTextProps) {
    let [value, setValue] = useState(props.defaultValue)
    let [isEditing, setIsEditing] = useState(false)

    let toggleEditing = () => setIsEditing(!isEditing)
    
    let text = <div onClick={toggleEditing}>
        {value !== "" ? value : "クリックしてテキストを編集を開始"}
    </div>

    let editor = <input
        value={value}
        onBlur={toggleEditing}
        onChange={(e) => setValue(e.target.value)}
        autoFocus={true}
    />
    
    return isEditing ? editor : text
}