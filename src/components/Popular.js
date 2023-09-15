import React, { useEffect, useState } from 'react'
import { styled } from "styled-components";
import { Link} from 'react-router-dom';


function Popular() 
{
    const [popular, setPopular]=useState([])
    useEffect(()=>{getPopular()}
    ,[])
    const getPopular = async () => {
      const check = localStorage.getItem('popular');
      if (check) {
        setPopular(JSON.parse(check));
      } else {
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNDk0N2RkMDZlZGM3NWFhMWM0MjFjZWIzM2U1MDRmNyIsInN1YiI6IjY1MDA3MzQ4ZTBjYTdmMDEwZGVhMTJiNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SEXYknosDiUD8rEooqoKQxai_5eEGXUp4LPgOgsAT_4',
          }
        };

        try {
          const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options);
          const data = await response.json();
          console.log(data);

          setPopular(data.results); // Set the popular state with the first 10 results

          // Save the first 10 results to local storage
          localStorage.setItem('popular', JSON.stringify(data.results));
        } catch (err) {
          console.error(err);
        }
      }
    }
  
    return (
      <div>
        <h2>Popular</h2>
      <Grid>
        {popular.map((item)=>{
          return(
            <Card key={item.id} data-testid="movie-card">
              <img src={"https://image.tmdb.org/t/p/original"+item.poster_path} alt='unavailable' data-testid="movie-poster" />
              <h4 data-testid="movie-title">Title: {item.title} </h4>
              <p data-testid="movie-rating">Rating: {item.vote_average}</p>
              <p data-testid="movie-release-date"> Release date: {item.release_date} </p>
              <Link to={"movies/"+ item.id}>
                <p>more details</p>
              </Link>
          </Card>
          )
        })}
      </Grid>
      </div>
    );
  }

  const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(15rem,1fr));
    grid-gap: 3rem;
    margin: 3rem 3rem;

`
  const Card = styled.div`
  img{
      border-radius: 2rem;
      width: 100%;
  }
  a{
      text-decoration: none;
  }
  h4{
      text-align: center;
      padding: 0.5rem;
  }
  `
  export default Popular;