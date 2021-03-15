import './Calculator.css';
import React, {Component} from 'react';
import Display from './Display';
import Clear from './Clear';
import Number from './Number';
import Operation from './Operation';
import Equals from './Equals';

class Calculator extends Component{
    constructor(props){
        super(props);
        this.state = {
            inputs: [],
            operations: [],
            output: 0,
            canOperate: true
        }
        this.onNumberClick = this.onNumberClick.bind(this);
        this.onOperatorClick = this.onOperatorClick.bind(this);
        this.onEqualClick = this.onEqualClick.bind(this);
        this.onClearClick = this.onClearClick.bind(this);
    }

    onNumberClick(i){
        console.log(i);
        if(i == '.' && this.state.output.indexOf(".") != -1){
            i = '';
        }
        this.setState({
            output: (this.state.output == '0') ? i : this.state.output+i,
            canOperate: true
        });
    }

    onOperatorClick(i){
        if(i != '-'){
            if(!this.state.canOperate){
                return false;
            }
        }
        this.setState({
            inputs: [...this.state.inputs, parseFloat(this.state.output)],
            operations: [...this.state.operations, i],
            output: '0',
            canOperate: false
        });
    }

    onEqualClick(){
        console.log(this.state.output);
        let val = this.calculate([...this.state.inputs,parseFloat(this.state.output)], this.state.operations);
        console.log(val);
        this.setState({
            inputs: [],
            operations: [],
            output: val
        });

    }

    onClearClick(){
        this.setState({
            inputs: [],
            operations: [],
            output: 0
        });
    }

    calculate(input, opp){
        console.log(input,opp);
        if(opp.length === 0){
            console.log(input[0]);
            return input[0];
        }
        switch(opp[0]){
            case '+':
                input = [input[0] + input[1], ...input.splice(2, input.length-1)];
                break;
            case '-':
                input = [input[0] - input[1], ...input.splice(2, input.length-1)];
                break;
            case 'x':
                input = [input[0] * input[1], ...input.splice(2, input.length-1)];
                break;
            case '/':
                input = [input[0] / input[1], ...input.splice(2, input.length-1)];
                break;
        }
        opp.shift();
        return this.calculate(input, opp)
    }

    render(){
        return(
            <div id="calc">
                <Display text={this.state.output}/>
                <div id="top-row">
                    <Clear click={this.onClearClick}/>
                    <Operation click={this.onOperatorClick} icon="/" name="divide"/>
                    <Operation click={this.onOperatorClick} icon="x" name="multiply"/>
                </div>
                <div id="numbers">
                    <Number click={this.onNumberClick} name="seven" number="7"/>
                    <Number click={this.onNumberClick} name="eight" number="8"/>
                    <Number click={this.onNumberClick} name="nine" number="9"/>

                    <Number click={this.onNumberClick} name="four" number="4"/>
                    <Number click={this.onNumberClick} name="five" number="5"/>
                    <Number click={this.onNumberClick} name="six" number="6"/>

                    <Number click={this.onNumberClick} name="one" number="1"/>
                    <Number click={this.onNumberClick} name="two" number="2"/>
                    <Number click={this.onNumberClick} name="three" number="3"/>

                    <Number click={this.onNumberClick} name="zero" number="0"/>
                    <Number click={this.onNumberClick} name="decimal" number="."/>
                </div>
                <div id="right-row">
                    <Operation click={this.onOperatorClick} icon="-" name="subtract"/>
                    <Operation click={this.onOperatorClick} icon="+" name="add"/>
                    <Equals click={this.onEqualClick}/>
                </div>
            </div>
        );
    }
}

export default Calculator;