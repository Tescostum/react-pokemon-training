import * as React from "react"
import * as ReactDOM from "react-dom";
import {PokemonBox} from "./PokemonBox"

export interface PokemonListState { idList:number[] }

export class PokemonList extends React.Component<{}, PokemonListState> {
    constructor(props:any) {
        super(props);
        this.state = { idList:[1,2,3,4,5,6,7,8,9,10] };
    }
    render() {
        if(!this.state) {
            return <div>準備中</div>
        }
        var node = this.state.idList.map(function (pokeId) {
            return <li key={pokeId}><PokemonBox pokemonId={pokeId}></PokemonBox></li>
        });
        return <ul className="pokemonList">{node}</ul>;
    }
}