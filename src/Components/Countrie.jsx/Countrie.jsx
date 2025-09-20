
import React, { useState } from 'react';
import "./Countrie.css"

const Countrie = ({Country,HandlevisitedCountry}) => {
    const [visited, setvisited] = useState(false);
      
  
    const Handlevisit = () =>{
       setvisited(!visited)
       HandlevisitedCountry(Country)
     
    }
    return (
        <div className={`countrie ${visited && 'visitedcss'}`}>
            <img src={Country.flags.flags.png} alt={Country.flags.flags.alt} />
            <h3>Name:{Country.name.common} </h3>
            <p>Population:{Country.population.population}</p>
            <p>Area:{Country.area.area}   {Country.area.area> 300000 ?"Big Countrie" : 'Small Countrie'}</p>
            <button onClick={Handlevisit} >{visited ? 'Visited':'Not Visited'} </button>
        </div>
    );
};
export default Countrie; 