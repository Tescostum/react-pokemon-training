/// <reference path="../../typings/index.d.ts" />
import * as React from "react"
import * as ReactDOM from "react-dom"

export interface PokemonBoxProps { pokemonId:number }
export class PokemonBox extends React.Component<PokemonBoxProps, {}> {
    render() {
        return <div class="pokemonBox">{this.props.pokemonId}</div>;
    }
}