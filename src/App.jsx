
import { Suspense } from 'react'
import './App.css'
import Countries from './Components/Countries/Countries'
import Country from './Components/Country/Country'

const countriesPromise = fetch("https://openapi.programming-hero.com/api/all").then(res => res.json())

function App() {
 

  return (
    <>
      
      <h1>Vite + React</h1>
      <Suspense>
        <Countries countriesPromise ={countriesPromise}></Countries>
        
      </Suspense>
    </>
  )
}

export default App
