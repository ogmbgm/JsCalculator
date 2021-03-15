// import './Equals.css';
import React, {Component} from 'react';

class Equals extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.props.click();
    }

    render(){
        return(
            <div id="equals" onClick={this.handleClick} className="number operator">=</div>
        );
    }
}

export default Equals;