import React, {Component} from 'react';

import './styles.css';
import Cross from '../../assets/icons/cross';
import Circle from '../../assets/icons/circle';
import Map from '../../assets/icons/map';
import Game from  '../../game';

class Room extends Component{

    state = {
        game: new Game(),
        draw: false,
        winner: null as any
    }
    
    constructor(props:any){
        super(props);
        const {game} = this.state;

        game.setPlayersId(["1", "2"]);
        game.tossCoin();
    }

    render(){
        const {game} = this.state;
        const {map} = game.getState();

        const handlePutMark = ( i:number, j:number)=>{
            const {winner} = this.state;
            if(winner===null){
                game.putMark(game.whoPlayNow(),[i,j]);
                this.setState({game:game});
    
                this.setState({draw: game.verifyDraw()});
                this.setState({winner: game.verifyWinner()});
            }
        }

        

        return (
            <div id="room">
                <div className="container">

                    <div className="game-over">

                    </div>

                    <div className="header">
                        <h1>Jogador {game.getState().x}</h1>
                        <h1>Jogador {game.getState().o}</h1>
                    </div>

                    <div className="content">
                        <div className="x play" style={game.whoPlayNow()==='x'?{}:{visibility: "hidden"}}>
                            <Cross/>
                        </div>

                        <div className="hash">
                            <Map/>
                            {map?.map((rows,i)=>{
                                return rows.map((cell,j)=>(
                                <div key={`${i}${j}`} className={`cell c${i}${j}`}>
                                    {   
                                        
                                        map[i][j]!==null?
                                        (
                                            <div>
                                                {map[i][j]==='x'?(<Cross/>):(<Circle/>)}
                                            </div>
                                        ):
                                        (
                                            <div className="choosing" onClick={()=>{handlePutMark(i,j)}}>
                                                {game.whoPlayNow()==='x'?(<Cross/>):(<Circle/>)}
                                            </div>
                                        )
                                    }
                                    
                                </div>
                                ))
                            })}

                            <div className="line row-0" style={game.verifyWinner()?.type==='row-0'?{}:{visibility: "hidden"}}/>
                            <div className="line row-1" style={game.verifyWinner()?.type==='row-1'?{}:{visibility: "hidden"}}/>
                            <div className="line row-2" style={game.verifyWinner()?.type==='row-2'?{}:{visibility: "hidden"}}/>
                            <div className="line col-0" style={game.verifyWinner()?.type==='col-0'?{}:{visibility: "hidden"}}/>
                            <div className="line col-1" style={game.verifyWinner()?.type==='col-1'?{}:{visibility: "hidden"}}/>
                            <div className="line col-2" style={game.verifyWinner()?.type==='col-2'?{}:{visibility: "hidden"}}/>
                            <div className="line diag-0" style={game.verifyWinner()?.type==='diag-0'?{}:{visibility: "hidden"}}/>
                            <div className="line diag-1" style={game.verifyWinner()?.type==='diag-1'?{}:{visibility: "hidden"}}/>
                            
                        </div>

                        <div className="o play"  style={game.whoPlayNow()==='o'?{}:{visibility: "hidden"}}>
                            <Circle/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Room;