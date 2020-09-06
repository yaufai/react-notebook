import React from "react"
import ReactDOM from "react-dom"
import ImportedApp from "./option-selector/App"

export default function App() {
    return <ImportedApp />
}

ReactDOM.render(<App />, document.getElementById("root"))