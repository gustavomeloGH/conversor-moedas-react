import React, { Component } from 'react';
import './Converter.css';

export default class Converter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currencyFromValue: "",
            currencyToValue: 0,
        }

        this.convert = this.convert.bind(this);

    }

    convert() {
        const { currencyFrom, currencyTo } = this.props;

        const fromTo = `${currencyFrom}_${currencyTo}`;
        const url = `https://free.currconv.com/api/v7/convert?q=${fromTo}&compact=ultra&apiKey=key_aqui`;

        fetch(url)
            .then(res => res.json())
            .then(json => {
                const quotation = json[fromTo];
                const currencyToValue = (parseFloat(this.state.currencyFromValue) * quotation).toFixed(2);
                this.setState({currencyToValue});
            })
    }

    render() {
        return (
            <div className="converter">
                <h2>{this.props.currencyFrom} para {this.props.currencyTo}</h2>
                <input type="number" onChange={(event)=>{this.setState({currencyFromValue:event.target.value})}}></input>
                <input type="button" value="Converter" onClick={this.convert}></input>
                <h2>R$ {this.state.currencyToValue}</h2>
            </div>
        )
    }
}