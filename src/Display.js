import './Display.css';
import React, {Component} from 'react';

class Display extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div id="display">0.0</div>
        );
    }
}

export default Display;