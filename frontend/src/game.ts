const X = 'x';
const O = 'o';

type Mark = typeof X | typeof O | null;
type PlayerId = string;
type GameState = {
    playersId?:[PlayerId, PlayerId];
    x?: PlayerId;
    o?: PlayerId;
    playNow:Mark;
    map: [
        [Mark, Mark, Mark],
        [Mark, Mark, Mark],
        [Mark, Mark, Mark]
    ];
}; 

class Game {
    private state:GameState;

    constructor(){
        this.state = {
            playNow:'x',
            map:[
                [null, null, null],
                [null, null, null],
                [null, null, null]
            ]
        };

        
    }

    private observers = [] as any; 

    public subscribe(observerFunction:any){
        this.observers.push(observerFunction);
    }

    private notifyAll(command:any){
        for(let observerFunction of this.observers){
            observerFunction(command)
        }
    }

    public getState(){
        return this.state;
    }

    setPlayersId(playersId:[PlayerId,PlayerId]){
        this.state.playersId = playersId;
    }

    private random(){
        return Math.round(Math.random());
    }
    
    tossCoin(){
        if(!this.state.playersId){
            return;
        }

        const [player1, player2] = this.state.playersId;
        switch (this.random()) {
            case 0:
                this.state.x = player1;
                this.state.o = player2;
                break;
        
            case 1:
                this.state.x = player2;
                this.state.o = player1;
                break;
        }
    }
    
    whoPlayNow(){
        return this.state.playNow;
    }
    
    private canPutMark(){
        const {map} = this.state;
        if(map){
            for(let row=0; row<3;row++){
                for(let col = 0; col<3; col++){
                    if(map[row][col]===null){
                        return true;
                    }
                }
            }
        }
        return false;
    }

    verifyDraw(){
        return !this.canPutMark();
    }
    
    putMark(mark:Mark, position:[number, number]){
        const [row,col] = position;
        if(this.state.map){
            this.state.map[row][col] = mark;
        }
        this.changeHowPlay();
    }
    
    
    verifyWinner(){
        const {map} = this.state;
        if(!map){
            return null;
        }
        //verify rows
        for(let row=0; row<3; row++){
            if(map[row][0] === X && map[row][1] === X && map[row][2] === X){
                return {player:X, type:`row-${row}`};
            }else if(map[row][0] === O && map[row][1] === O && map[row][2] === O){
                return {player:O, type:`row-${row}`};
            }
        }
        
        //verify cols
        
        for(let col=0; col<3; col++){
            if(map[0][col] === X && map[1][col] === X && map[2][col] === X){
                return {player:X, type:`col-${col}`};
            }else if(map[0][col] === O && map[1][col] === O && map[2][col] === O){
                return {player:O, type:`col-${col}`};
            }
        }
        
        //verify main diagonal of the matrix
        
        if(map[0][0] === X && map[1][1] === X && map[2][2] === X){
            return {player:X, type:`diag-0`};
        }else if(map[0][0] === O && map[1][1] === O && map[2][2] === O){
            return {player:O, type:`diag-0`};
        }
        
        //verify secondary diagonal of the matrix
        
        if(map[0][2] === X && map[1][1] === X && map[2][0] === X){
            return {player:X, type:`diag-1`};
        }else if(map[0][2] === O && map[1][1] === O && map[2][0] === O){
            return {player:O, type:`diag-1`};
        }
        
        return null;
    }

    private changeHowPlay(){
        if(this.state.playNow===X){
            this.state.playNow = O;
        }else if(this.state.playNow===O){
            this.state.playNow = X;
        }
    }
}

export default Game;