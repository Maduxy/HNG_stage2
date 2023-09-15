import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { styled } from "styled-components";
import LoadingIndicator from './LoadingIndicator';

function Searched() {
    const [searchedMovies, setSearchedMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const params = useParams();
    const getSearched = async (name)=>{
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNDk0N2RkMDZlZGM3NWFhMWM0MjFjZWIzM2U1MDRmNyIsInN1YiI6IjY1MDA3MzQ4ZTBjYTdmMDEwZGVhMTJiNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SEXYknosDiUD8rEooqoKQxai_5eEGXUp4LPgOgsAT_4'
            }
          };

          try {
            const api = await fetch(`https://api.themoviedb.org/3/search/movie?query=${name}&include_adult=false&language=en-US&page=1`, options);
            const recipes = await api.json();
            setSearchedMovies(recipes.results);

            // Data has been loaded, set loading state to false
            setLoading(false);
          } catch (err) {
            console.error(err);

            // Handle errors by setting loading to false
            setLoading(false);
          };
    };
    useEffect(()=>{
        getSearched(params.search);
    },[params.search]);

  return (
    <div>
        {loading ? (
      <LoadingIndicator /> // Show loading indicator while fetching data
    ) : (
        <Grid>
        {searchedMovies.map((item)=>{
            return(

                <Card key={item.id} data-testid="movie-card">
                    <img data-testid="movie-poster" src={"https://image.tmdb.org/t/p/original"+item.poster_path} alt={item.title}/>
                    <h4 data-testid="movie-title">{item.title} </h4>
                    <p data-testid="movie-release-date">Release date: {item.release_date} </p>
                    <Link to={"movies/"+ item.id}>
                        <p>more details</p>
                    </Link>
                </Card>

            );
        })}
        </Grid>
    )}
    </div>
    
  )
}

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(15rem,1fr));
    grid-gap: 3rem;
    margin: 2rem;

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
}
`
export default Searched