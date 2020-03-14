import React, {Component} from 'react';
import '../App.css';

class Counter extends Component 
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

    decrement()
    {
        this.setState({
            score: this.state.score - 1
        });
    }

    render()
    {
        return(
            
            <div>
                <h1>{this.state.score}</h1>
                <button onClick={this.decrement.bind(this)}>-</button>
                <button onClick={this.increment.bind(this)}>+</button>
            </div>
        );
    }


}


export default Counter;