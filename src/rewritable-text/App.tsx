import React from "react"
import RewritableText from "./src/RewritableText"

export default class App extends React.Component<{}, {value: string}> {
    constructor(props: {}) {
        super(props)
        this.state = {
            value: "この入力は変更できます"
        }
    }
    updateValue = (value: string) => {
        this.setState({ value: value })
    }
    render() {
        return <div>
            <RewritableText
                defaultValue={this.state.value}
                onChange={this.updateValue}
                onFinalized={(value) => { console.log("GET FINALIZED VALUE: ", value) }}
            />
            <div>入力内容： {this.state.value}</div>
        </div>
    }
}