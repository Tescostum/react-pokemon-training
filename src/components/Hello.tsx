import * as React from "react"

interface HelloProps {
    compiler: String,
    framework: String
}

function Hello(props: HelloProps) {
    return (<div>
        <a href="https://github.com/Tescostum/react-pokemon-training">Github - react-pokemon-training</a>
        <h1>Hello from {props.compiler} and {props.framework}!!</h1>
    </div>)
}

export default Hello;