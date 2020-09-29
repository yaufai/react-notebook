import React from "react"
import { RewritableText } from "./src/RewritableText"

export default () => <RewritableText
                defaultValue="ここのテキストは編集できます"
                displayWhenEmpty={<span style={{color: "red"}}>クリックして編集を開始します</span>}
                onChange={(v) => console.log(v)}
                onFinalized={(v) => console.log("Final: ", v)}
                validation={(v) => (v.length > 0) && (v.length <= 20)}
                validationErrMsg={(v) => {
                    if (v.length === 0) {
                        return "必ず何か文字列を入力してください"
                    } else if (v.length > 20) {
                        return "20文字より多く入力することはできません"
                    } else {
                        return ""
                    }
                }}
            />
