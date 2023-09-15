import { styled } from "styled-components";
import React, { useEffect, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import Image from "../images/Poster.png"
import IMDB from "../images/Imdb.png"
import Tomatoe from "../images/Tomatoes.png"
import { useNavigate } from "react-router-dom";

function Search() {

  const [input, setInput] = useState("");
  const navigate = useNavigate()
  const submitHandler = (e) => {
    e.preventDefault();
    navigate('searched/'+ input )
  }

  return (
    <Wrapper>
      <BackgroundImage>
        <img src={Image} alt="unavailable"/>
      </BackgroundImage>
      <FormStyle onSubmit={submitHandler}>
        <div>
            <FaSearch></FaSearch>
            < input type="text" onChange={(e)=> setInput(e.target.value) } value={input} placeholder="Search Movies" />
        </div>
      </FormStyle>
      <section>
        <h1>John Wick 3 : Parabellum</h1>
        <div>
          <span>
            <img src={IMDB} alt="IMDB" />
            <p>86.0 / 100</p>
          </span>
          <span>
            <img src={Tomatoe} alt="rotten_tomatoes" />
            <p>97%</p>
          </span>
        </div>
        
        <p className="text">John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>
        <button>Watch later</button>
      </section>
    </Wrapper>
    
  )
}
const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 80vh;
  margin-bottom: 0rem;
  padding-left:4rem;
  

  section{
    padding:2rem 2rem 8rem 0rem;
    color:white;
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width:30rem;
  }
  section h1{
    margin-left: -3.5rem;
    width: 404px;
    color: #FFF;
    font-family: DM Sans;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 56px; /* 116.667% */
  }
  section .text {
    width: 302px;
    color: #FFF;
    font-family: DM Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px; /* 128.571% */
    text-align: left;
  }
  section div{
    display:flex;
    gap:2rem
  }
  section div span{
    display: inline-flex;
    gap:1rem
  }
  section div img{
    object-fit: contain;
  }
`
const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover; /* Adjust this as needed */
  opacity: 1; /* Adjust the opacity as needed */
  z-index: -1; /* Place the background image behind other content */
`;
const FormStyle =styled.form`
    flex-grow: 2;
    display: flex;
    flex-direction: column; /* Align items in a column */
    align-items: center; /* Center horizontally */
    justify-content: flex-start; /* Align items at the top */
    padding: 1rem;

    margin: 1rem 30rem;
    div{
        z-index: 3;
        width: 150% ;
        position: relative;
    }
    input {
        
        border-style: ridge;
        // background:linear-gradient(35deg,#494949,#393939) ;
        background-color: transparent;
        color: white;
        font-size: 1rem;
        padding: 1rem 1rem;
        border-radius: 1rem;
        outline: none;
        width: 100% ;
      }
    
    svg{
        position: absolute; 
        color: white;
        top: 50%;
        right: 0%;
        transform: translate(100%,-50%);
    }
    
`
export default Search