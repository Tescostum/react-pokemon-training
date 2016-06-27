/// <reference path="../../typings/index.d.ts" />
import * as React from "react"
import {PokemonBox} from "./PokemonBox"

export class PokemonList extends React.Component<{}, {}> {
    render() {
        return <div class="pokemonList">
          <PokemonBox></PokemonBox>
        </div>;
    }
}