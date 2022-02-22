import React, { useState,useEffect } from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';

function Country () {

    const [officialName, setOfficialName] = useState('');
    const [population, setPopulation] = useState(0);
    const [region, setRegion] = useState('');
    const [flagUrl, setFlagUrl] = useState('');
    const [capital, setCapital] = useState([]);
    
    const {name} = useParams();
    const api= `https://restcountries.com/v3.1/name/${name}`;


    useEffect( () => {
        axios.get(api)
        .then(res =>{
            const data=res.data[0];

            setOfficialName(data.name.official);
            setPopulation(data.population);
            setRegion(data.region);
            setFlagUrl(data.flags.png);
            setCapital(data.capital);
        })
        .catch(err => console.log(err))

    },[]);
        
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

export default Country