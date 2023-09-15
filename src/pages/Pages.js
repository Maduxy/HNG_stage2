import React from 'react'
import Home from './Home'
import {Routes,Route} from "react-router-dom"
import Searched from '../components/Searched'
import Details from '../components/Details'

function Pages() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='searched/:search' element={<Searched/>}/>
        <Route path='movies/:name' element={<Details/>}/>
        <Route path='searched/:search/movies/:name' element={<Details/>}/>
      </Routes>
    </div>
  )
}

export default Pages