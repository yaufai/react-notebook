import React from "react"
import { Selector } from "./src/Selector"

export const ExplanationStyle  = {
    paddingLeft : "30px",
    marginBottom: "0px",
    marginTop   : "10px"
    
}

export default () => <div>
    <p style={ExplanationStyle}>今後勉強してみたいJavaScript関連技術を教えてください。</p>
    <Selector
        options={[
            { id: "react"  , label: "React"   },
            { id: "vue"    , label: "Vue"     },
            { id: "angular", label: "Angular" },
            { id: "jquery" , label: "jQuery"  }
        ]}
        onChange={(value) => console.log(value)}
    />
</div>