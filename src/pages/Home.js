import React from 'react'
import Popular from '../components/Popular'
import Top_10 from '../components/Top_10'
import { styled } from "styled-components";
import Search from '../components/Search';

function Home() {
  return (
    <div>
        <div><Search/></div>
        <Top_10/>
        <Popular/>
    </div>
  )
}

export default Home