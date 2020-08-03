import * as React from "react"

interface HelloProps {
    compiler: String,
    framework: String
}

function Hello(props: HelloProps) {
    return <h1>Hello from {props.compiler} and {props.framework}.</h1>;
}

export default Hello;