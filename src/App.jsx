
import { Suspense } from 'react'
import './App.css'
import Countries from './Components/Countries/Countries'

 const CountriesPromise = fetch('https://openapi.programming-hero.com/api/all')
 .then(res => res.json())

function App() {
  
   return (
    <>     
      {/* <h1> React World on the goo...</h1> */}
       <Suspense fallback={<h2>Data Lodding..</h2>}>
         <Countries CountriesPromise={CountriesPromise}></Countries>   
       </Suspense>
     
    </>
  )
}
export default App
