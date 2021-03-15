// import './Operation.css';
import React, {Component} from 'react';

class Operation extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.props.click(this.props.icon);
    }

    render(){
        return(
            <div id={this.props.name} onClick={this.handleClick} className="operator number">{this.props.icon}</div>
        );
    }
}

export default Operation;