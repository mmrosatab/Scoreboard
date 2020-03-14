import React, {Component} from 'react';
import '../App.css';
import EspecialCounter from './EspecialCounter';
import Match from './Match';

class LargerContainer extends Component 
{

    render()
    {
        return(
            
            <div className="larger-container">
                <EspecialCounter team="Flamengo"/>
                <Match/>
                <EspecialCounter team="Fortaleza"/>
            </div>
        );
    }

}


export default LargerContainer;