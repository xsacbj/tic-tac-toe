import React, {Component} from 'react';

import './styles.css';

import Game from  '../../game';
import { verify } from 'crypto';

class Room extends Component{

    state = {
        game: new Game()
    }
    
    constructor(props:any){
        super(props);
        const {game} = this.state;

        game.setPlayersId(["1", "2"]);
        game.tossCoin();
    }

    render(){
        const {game} = this.state;
    
        return (
            <h1>Room</h1>
        );
    }
}

export default Room;