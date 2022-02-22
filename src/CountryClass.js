import React, { Component } from 'react';
import axios from 'axios';

class CountryClass extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name:'',
            officialName: '',
            capital:[],
            population:0,
            region:'',
            flagUrl:''
        }
    }

    componentDidMount = () => {

        const name = window.location.href.split('/')[window.location.href.split('/').length - 1];
        const api= `https://restcountries.com/v3.1/name/${name}`;

        axios.get(api)
            .then(res =>{
                const data=res.data[0];

                this.setState({
                    name,
                    officialName:data.name.officialName,
                    capital:data.capital,
                    population: data.population,
                    region:data.region,
                    flagUrl: data.flags.png
                })
            })
            .catch(err => console.log(err))

    }

    render() {
        const {name,officialName,capital,population,region,flagUrl} = this.state;
        return (
        <div>
            <h3>Country: {name}</h3>
            <label>Official name: {officialName}</label>
            <br />
            <label>Capital: {capital}</label>
            <br />
            <label>Population: {population}</label>
            <br />
            <label>Region: {region}</label>
            <br />
            <label>Flag:</label>
            <br />
            <img src={flagUrl} alt={name} />
        </div>
        )
    }
}

export default CountryClass