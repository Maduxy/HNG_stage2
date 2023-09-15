import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { styled } from 'styled-components'
import LoadingIndicator from './LoadingIndicator';
import Nav from './Nav';
import { FaPlayCircle } from 'react-icons/fa';

function Details() {
    const [details, setDetails]=useState({});
    const [loading, setLoading] = useState(true);
    let params = useParams()
    const getDetails = async ()=>{
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNDk0N2RkMDZlZGM3NWFhMWM0MjFjZWIzM2U1MDRmNyIsInN1YiI6IjY1MDA3MzQ4ZTBjYTdmMDEwZGVhMTJiNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SEXYknosDiUD8rEooqoKQxai_5eEGXUp4LPgOgsAT_4'
            }
          };

          try {
            const api = await fetch(`https://api.themoviedb.org/3/movie/${params.name}?language=en-US`, options);
            const detailsD = await api.json();
            setDetails(detailsD);
            console.log(detailsD)

            // Data has been loaded, set loading state to false
            setLoading(false);
          } catch (err) {
            console.error(err);

            // Handle errors by setting loading to false
            setLoading(false);
          };
    };
    useEffect(()=>{
        getDetails();
    },[params.name]);
        // Create a Date object with a default date (local time)
        const defaultDate = new Date(details.release_date); // This will be the current date and time in the local time zone

        // Convert the default date to UTC
        const utcDate = defaultDate.toUTCString();

        // console.log("Default Date (Local Time):", defaultDate);
        // console.log("UTC Date:", utcDate);
  return (
    <PageWrapper>
        <Navi>
            {<Nav/>}
        </Navi>
        <div>
            {loading ? (
        <LoadingIndicator /> // Show loading indicator while fetching data
        ) : (
            <DetailWrapper>
                <ImageWrapper>
                    <img src={"https://image.tmdb.org/t/p/original"+details.poster_path}/>
                    <PlayButton>
                        <FaPlayCircle size={48} />
                    </PlayButton>
                </ImageWrapper>
                <div className='writeup'>
                    <h2 data-testid="movie-title">Title : {details.original_title}</h2>
                    <h3 data-testid="movie-runtime"> . {details.runtime} minutes </h3>
                    <h3 data-testid="movie-release-date"> Release Date : {utcDate} </h3>
                </div>

                <div>
                    <p data-testid="movie-overview" > <b>Overview :</b> {details.overview} </p>
                </div>

            </DetailWrapper>
        )}
        </div>
    </PageWrapper>
  )
}
const PageWrapper = styled.div`
    display:flex;
    flex-direction:row;
`
const Navi = styled.div`
    display:flex;
    flex-direction: column;
    height:100%;
    border-left: 0;
    border-bottom-right-radius: 3rem;
    border-top-right-radius: 3rem;
    border-style: ridge;
    margin-bottom: 0rem;
    padding-bottom: 5rem;
    padding-top: 5rem;
`
const DetailWrapper = styled.div`
    margin-top: 2rem;
    margin-bottom: 5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: left;
    padding:1rem 8rem ;

    .writeup{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
    }

    h2{
        font-size: 1.2rem;
    }
    img{
        width: 60rem;
        height: 30rem;
        object=fit: scale-down;
        border-radius: 2rem;
    }
    p{
        width: fit-content;
        height: 5rem;
        color: #333;
        font-family: Poppins;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-align: left;
    }
    .active {
        color: white;
        background:linear-gradient(40deg, #494949, #313131);
    }
`
const ImageWrapper = styled.div`
  position: relative; /* Make the wrapper a positioned parent */
`;

const PlayButton = styled.div`
  position: absolute; /* Position the play button relative to the ImageWrapper */
  top: 50%; /* Vertically center */
  left: 50%; /* Horizontally center */
  transform: translate(-50%, -50%); /* Center the button exactly */
  cursor: pointer;
  color: #fff;
`;

export default Details