import React, {Component} from 'react';
import '../App.css';

class GolButton extends Component 
{
    render()
    {
        return(
            <button id='gol-button' onClick={this.props.increment}>Gol</button>
        );
    }
}


export default GolButton;