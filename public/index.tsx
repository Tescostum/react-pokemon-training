/// <reference path="../typings/index.d.ts" />
import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./ts/Hello";
import { PokemonList } from "./ts/PokemonList";

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById("example")
);

ReactDOM.render(
    <PokemonList/>,
    document.getElementById("pokemon")
);