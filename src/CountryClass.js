import React, { Component } from 'react';
import {Link, useLocation} from 'react-router-dom';

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
            flagUrl:'',
            result:'loading'
        }
    }

    componentDidMount = () => {

        const name = window.location.href.split('/')[window.location.href.split('/').length - 1];
        
        this.setState({
            name
        });
        const api= `https://restcountries.com/v3.1/name/${name}`;

        axios.get(api)
            .then(res =>{
                const data=res.data[0];

                this.setState({
                    name,
                    officialName:data.name.official,
                    capital:data.capital,
                    population: data.population,
                    region:data.region,
                    flagUrl: data.flags.png,
                    result:'found'
                })
            })
            .catch(err => {
                console.log(err);
                this.setState({
                    result:'notfound'
                })
            })

    }

    render() {
        const {name,officialName,capital,population,region,flagUrl} = this.state;
        return (
        <div>
            <h3>Country: {name} {this.state.result==='loading' && <label>Loading... please wait...</label>}</h3>
            {this.state.result==='notfound' && <label style={{color:'red'}}>Country not found!</label>}
            {this.state.result==='found' && (
                <div>
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
            )}
            <Link to='/countries'>Go Back</Link>
        </div>
        )
    }
}

export default CountryClass