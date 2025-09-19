import React from 'react';
import "./Country.css"
const Country = ({country}) => {

    // console.log(country.name.common)
    // console.log(country.flags.flags.png)

    const handleVisit = () => {
        console.log("Button clicked")
    }

    return (
        <div className='country'>
             <img src={country.flags.flags.png} alt="" />
            <h3> Name : {country.name.common} </h3>
            <h3> Population : {country.population.population}</h3>
            <p> Area : {country.area.area} {country.area.area > 300000 ? "Big Country" : "Small Country"}</p>
           <button onClick={handleVisit}>Not Visited</button>
        </div>
    );
};

export default Country;