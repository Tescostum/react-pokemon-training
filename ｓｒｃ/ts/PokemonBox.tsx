/// <reference path="../../typings/index.d.ts" />
import * as React from "react"
import * as ReactDOM from "react-dom"
import * as request from "superagent"

const pokemonAPI:string = "http://pokeapi.co/api/v2/pokemon-form/"

export interface PokemonBoxProps { pokemonId:number }
export interface PokemonBoxStates { pokemonName:string, image:string }
export class PokemonBox extends React.Component<PokemonBoxProps,PokemonBoxStates> {
    constructor(props:PokemonBoxProps){
      super(props)
      this.state = { pokemonName:"Now Loading", image:"" }
    }

    componentDidMount() {
        console.log(this.props.pokemonId);
        if(this.props.pokemonId > 0) {
          request.get(pokemonAPI+String(this.props.pokemonId)+"/")
            .end((err, res) => {
              if(err) {
                  console.log(err);
                  return;
              }
              
              var pokemon:any = res.body;
              var name:string = pokemon.name
              var sprites:any = pokemon.sprites
              var image:string = sprites.front_default;

              this.setState({ pokemonName:name, image:image })
              console.log("load!");
            });
        }
    }
    render() {
        return <div className="pokemonBox">
          <img className="pokemonImage" alt={this.state.pokemonName} src={this.state.image}/>
          <p className="pokemonName">{this.state.pokemonName}</p>
        </div>;
    }
}