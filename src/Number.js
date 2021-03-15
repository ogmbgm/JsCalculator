import './Number.css';
import React, {Component} from 'react';

class Number extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.props.click(this.props.number);
    }

    render(){
        return(
            <div onClick={this.handleClick} className="number" id={this.props.name}>
                {this.props.number}
            </div>
        );
    }
}

export default Number;