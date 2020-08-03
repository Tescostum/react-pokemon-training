import React from 'react';

const pokemonAPI:string = "https://pokeapi.co/api/v2/pokemon-form/"

export interface PokemonBoxProps { pokemonId:number }
export interface PokemonBoxStates { pokemonName:string, image:string }
export class PokemonBox extends React.Component<PokemonBoxProps,PokemonBoxStates> {
    state = { pokemonName:"Now Loading", image:"" }

    constructor(props:PokemonBoxProps) {
        super(props);
        this.state = { pokemonName:"Now Loading", image:"" }
    }

    componentDidMount() {
        console.log(this.props.pokemonId);
        if(this.props.pokemonId > 0) {
            fetch(pokemonAPI+String(this.props.pokemonId)+"/")
                .then(response => {
                    if(!response.ok) {
                        throw new Error(response.statusText);
                    }
                    return response.json()
                })
                .then(data => {
                    var pokemon:any = data;
                    var name:string = pokemon.name
                    var sprites:any = pokemon.sprites
                    var image:string = sprites.front_default;
    
                    this.setState({ pokemonName:name, image:image })
                    console.log("load!");
                })
                .catch(err => console.log(err));
        }
    }
    render() {
        return <div className="pokemonBox">
          <img className="pokemonImage" alt={this.state.pokemonName} src={this.state.image}/>
          <p className="pokemonName">{this.state.pokemonName}</p>
        </div>;
    }
}

export default PokemonBox;