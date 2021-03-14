import './Number.css';
import React, {Component} from 'react';

class Number extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="number" id={this.props.name}>
                {this.props.number}
            </div>
        );
    }
}

export default Number;