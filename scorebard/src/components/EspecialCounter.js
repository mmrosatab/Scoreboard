import React, {Component} from 'react';
import '../App.css';
import GolButton from './GolButton';

class EspecialCounter extends Component 
{

    constructor()
    {
        super();

        this.state = ({
            score: 0
        });
    }

    increment()
    {
        this.setState({
            score: this.state.score + 1
        });
    }

    render()
    {
        return(
            
            <div className="scoreboard">
                <h3>{this.props.team}</h3>
                <h1>{this.state.score}</h1>
                <GolButton increment={this.increment.bind(this)}/>
            </div>
        );
    }

}


export default EspecialCounter;