import React from "react"
import RewritableText from "./src/RewritableText"

export default () => <RewritableText
    defaultValue="ここのテキストは編集できます"
    onChange={(value) => { console.log(value) }}
    onFinalized={(value) => { console.log("GET FINALIZED VALUE: ", value) }}
/>