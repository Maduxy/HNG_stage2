import React, { useEffect, useState } from 'react'
import { styled } from "styled-components";
import { Link, useParams } from 'react-router-dom';
function Top_10() {
  const [topMovies, setTopMovies]=useState([])
  useEffect(()=>{getPopular()}
  ,[])
  const getPopular = async () => {
    const check = localStorage.getItem('topMovies');
    if (check) {
      setTopMovies(JSON.parse(check));
    } else {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNDk0N2RkMDZlZGM3NWFhMWM0MjFjZWIzM2U1MDRmNyIsInN1YiI6IjY1MDA3MzQ4ZTBjYTdmMDEwZGVhMTJiNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SEXYknosDiUD8rEooqoKQxai_5eEGXUp4LPgOgsAT_4',
        }
      };

      try {
        const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options);
        const data = await response.json();
        console.log(data);

        // Slice the data to only keep the first 10 results
        const first10Results = data.results.slice(0, 10);

        setTopMovies(first10Results); // Set the top movies state with the first 10 results

        // Save the first 10 results to local storage
        localStorage.setItem('topMovies', JSON.stringify(first10Results));
      } catch (err) {
        console.error(err);
      }
    }
  }
  return (
    <div>
      <h2>Top movies</h2>
    <Grid>
      {topMovies.map((item)=>{
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

  )
}

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(15rem,1fr));
    grid-gap: 3rem;
    margin: 2rem;
    margin-top: 3rem;

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
    padding: 1rem;
}`
export default Top_10