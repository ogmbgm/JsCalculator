// import './Clear.css';
import React, {Component} from 'react';

class Clear extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div id="clear" className="number" onClick={this.props.click}>AC</div>
        );
    }
}

export default Clear;