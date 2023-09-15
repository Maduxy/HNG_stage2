import { styled } from "styled-components";
import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import {GrHomeRounded} from "react-icons/gr"
import {BiCameraMovie,BiCalendar} from "react-icons/bi"
import {PiVideo} from "react-icons/pi"
import {TbLogout} from "react-icons/tb"

function Nav() {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  return (
    <div>
        <h2>MovieBox</h2>
        <List>
            <SLink to={"/"}  onClick={() => handleLinkClick("home")}
            className={activeLink === "home" ? "active" : ""}>
                <GrHomeRounded/>
                <h4>Home</h4>
            </SLink>
            <SLink to={"/movies/847"}  onClick={() => handleLinkClick("movies")}
          className={activeLink === "movies" ? "active" : ""}>
                <BiCameraMovie/>
                <h4>Movies</h4>
            </SLink>
            <SLink to={"/movies/785"}  onClick={() => handleLinkClick("series")}
          className={activeLink === "series" ? "active" : ""}>
                <PiVideo/>
                <h4>Tv Series</h4>
            </SLink>
            <SLink to={"/movies/845"}  onClick={() => handleLinkClick("upcoming")}
          className={activeLink === "upcoming" ? "active" : ""}>
                <BiCalendar/>
                <h4>Upcoming</h4>
            </SLink>
            <SLink to={"/movies/hbj"}  onClick={() => handleLinkClick("logout")}
          className={activeLink === "logout" ? "active" : ""}>
                <TbLogout/>
                <h4>Logout</h4>
            </SLink>
        </List>
        
    </div>
  )
}
const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 2rem 2rem;
`
const SLink = styled(NavLink)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 10%;
  margin-right: 0.5rem;
  text-decoration: none;
  background: linear-gradient(40deg, #494949, #313131);
  width: 8rem;
  height: 6rem;
  cursor: pointer;
  transform:scale(0.8) ;

  h4{
    color: white;
    font-size: 1rem;
    }
  svg{
    color: white;
    font-size: 1.5rem;
  }
  &.active{
    background: linear-gradient(to right, #f27121,#e94057);
  }
`

export default Nav