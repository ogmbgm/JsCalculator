// import './Operation.css';
import React, {Component} from 'react';

class Operation extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div id={this.props.name} className="operator number">{this.props.icon}</div>
        );
    }
}

export default Operation;