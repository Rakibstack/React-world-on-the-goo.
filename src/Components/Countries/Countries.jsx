import React, { use, useState } from 'react';
import Countrie from '../Countrie.jsx/Countrie';
import './Countries.css'

const Countries = ({CountriesPromise}) => {
    const [VisitedCountrie,SetVisitedCountrie] = useState([])

    const HandlevisitedCountry = (Country) =>{
       const NewVisitedcontry = [...VisitedCountrie,Country]
       SetVisitedCountrie(NewVisitedcontry);
        
    }
     const CountriesData = use(CountriesPromise);
     const Countries = CountriesData.countries
    
    return (
        <div>
            <h1>in the Countries:{Countries.length}</h1>
            <p>Tottal Countries visit:{VisitedCountrie.length}</p>
           <ol>
            {
                 VisitedCountrie.map((Country,index) => <li key={index}> {Country.name.common} </li>)
            }
           </ol>
           <div>
            {
                VisitedCountrie.map((Country,index) => <img key={index} className='imgcss' src={Country.flags.flags.png}></img>)
            }
           </div>
           <div className='countries'>
            {
              Countries.map(Country => <Countrie
                 key={Country.cca3.cca3}
                 HandlevisitedCountry={HandlevisitedCountry}
                  Country={Country}></Countrie>) 
            }
           </div>
        </div>
    );
};

export default Countries;