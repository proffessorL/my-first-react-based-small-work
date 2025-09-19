import React from 'react';

const Country = ({country}) => {

    // console.log(country.name.common)
    // console.log(country.flags.flags.png)

    return (
        <div>
            <h3> Name : {country.name.common} </h3>
            <h3> Population : {country.population.population}</h3>
            <img src={country.flags.flags.png} alt="" />
        </div>
    );
};

export default Country;