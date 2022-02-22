import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Countries extends Component {
    constructor(props) {
        super(props);
        this.state= {
            countries: []
        }
    }

    componentDidMount = () =>{
        const api= 'https://restcountries.com/v3.1/all';
        axios.get(api)
            .then (res => {
                console.log(res);
                this.setState({
                    countries: res.data
                })
            })
            .catch(err => console.log(err))
    }

    render() {
        const {countries} = this.state;
        return (
        <div>
            <h3>Countries</h3>
            {countries.length===0 && <p>Loading...please wait...</p>}
            <div className='countries'>
            {
                countries && countries.map((country, index) =>{
                    return (
                        <div key={index} className='country'>
                            <p>{country.name.common}</p>
                            <Link to={`/country/${country.name.common}`}><img src={country.flags.png} alt={country.name.common} /></Link>
                        </div>
                    )
                })
            }
            </div>
        </div>
        )
    }
}

export default Countries