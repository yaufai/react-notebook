import React, { ReactElement, useState,  } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons"

type RewritableTextProps = {
    defaultValue: string,
    displayWhenEmpty: string|ReactElement,
    onChange: (value: string) => void,
    onFinalized: (value: string) => void,
    validation: (value: string) => boolean,
    validationErrMsg: (value: string) => string
}

export function RewritableText(props: RewritableTextProps) {
    let [value, setValue] = useState(props.defaultValue)
    let [isEditing, setIsEditing] = useState(false)
    let [hasError, setHasError] = useState(false)

    let toggleEditing = () => setIsEditing(!isEditing)

    let finalize = (e?: React.FocusEvent<HTMLInputElement>) => {
        props.onFinalized(value)
        toggleEditing()
    }

    let onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && props.validation(value)) {
            finalize()
        }
    }

    let commonStyle = {
        fontSize: "14px",
        paddingTop: "5px",
        paddingBottom: "5px",
        paddingRight: "8px",
        paddingLeft: "8px"
    }

    let text = <div onClick={toggleEditing} style={{ cursor: "pointer" }}>
        <span style={{ ...commonStyle, marginRight: "3px" }}>
            {value !== "" ? value : props.displayWhenEmpty}
        </span>
        <FontAwesomeIcon icon={faPencilAlt} />
    </div>

    let editor = <div>
        <input
            value={value}
            onBlur={(e) => {
                if (props.validation(value)) {
                    finalize(e)
                }
            }}
            onChange={(e) => {
                let newValue = e.target.value
                props.onChange(newValue)
                setValue(newValue)
                setHasError(!props.validation(newValue))
            }}
            onKeyUp={onKeyUp}
            autoFocus={true}
            style={{
                ...commonStyle,
                width: "100%"
            }}
        />
        <div style={{
            color: "red",
            visibility: hasError ? "visible" : "hidden"
        }}>
            {props.validationErrMsg(value)}
        </div>
    </div>
    
    return isEditing ? editor : text
}