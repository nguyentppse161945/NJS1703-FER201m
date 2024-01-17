


import React, {Component} from 'react'
import {dataa} from '../Share/ListOfPlayers';
import PlayersPresentation from './PlayersPresentation';
export class Main extends Component{
    constructor(){
        super();
        this.state={
            players: dataa
        }
    }
    render(){
        return<PlayersPresentation players={this.state.players}/>
    }
}

export default Main