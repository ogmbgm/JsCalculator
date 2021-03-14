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
    }

    render(){
        return(
            <div id="calc">
                <Display/>
                <div id="top-row">
                    <Clear/>
                    <Operation icon="/" name="divide"/>
                    <Operation icon="x" name="multiply"/>
                </div>
                <div id="numbers">
                    <Number name="seven" number="7"/>
                    <Number name="eight" number="8"/>
                    <Number name="nine" number="9"/>

                    <Number name="four" number="4"/>
                    <Number name="five" number="5"/>
                    <Number name="six" number="6"/>

                    <Number name="one" number="1"/>
                    <Number name="two" number="2"/>
                    <Number name="three" number="3"/>

                    <Number name="zero" number="0"/>
                    <Number name="decimal" number="."/>
                </div>
                <div id="right-row">
                    <Operation icon="-" name="subtract"/>
                    <Operation icon="+" name="add"/>
                    <Equals/>
                </div>
            </div>
        );
    }
}

export default Calculator;