import React, {Component} from 'react';
import { RouteComponentProps } from 'react-router-dom';

import './styles.css';

class Begin extends Component<RouteComponentProps>{

    render(){

        const playLocal = ()=>{
            this.props.history.push("room", {online: false});
        }

        return (
            <div id="begin">
                <div className="container">
                    <div className="menu">
                        <h1 className="title">
                            Tic Toc Toe
                        </h1>

                        <h2 onClick={playLocal} className="option">Partida local</h2>
                        <h2 className="option">Partida online</h2>
                    </div>

                    <div className="hash">
                        <div></div>
                        <div className="line one"></div>
                        <div className="line two"></div>
                        <div className="line three"></div>
                        <div className="line four"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Begin;