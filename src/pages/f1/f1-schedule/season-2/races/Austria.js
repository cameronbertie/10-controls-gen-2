import React from "react";
import * as S from "../../../../../styles/styles";
import styled from "styled-components";
import PageHero2 from "../../../../../components/PageHero2";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";
import Footer from "../../../../../components/Footer";
import F1RaceResult from "../../F1RaceResult";
import F1SecondaryNavigation from "../../../F1SecondaryNavigation";

function Austria() {
  return (
    <>
      
      <F1SecondaryNavigation
      />
      <S.Section>
      <h6>Season 2 - Round 6</h6>
        <br></br>
        <h1>Austria</h1>
        <br></br>
        <hr></hr>
      <RaceDetails>
      <h2>Tier A Race Details</h2>
              <br></br>
              <h3>Practice Lobby</h3>
              <p>Friday 20th January 2022 - 18:00 GMT</p>
              <br></br>
              <h3>Race Starts</h3>
              <p>Friday 20th January 2022 - 19:30 GMT</p>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <h2>Tier B Race Details</h2>
              <br></br>
              <h3>Practice Lobby</h3>
              <p>Saturday 21st January 2022 - 18:00 GMT</p>
              <br></br>
              <h3>Race Starts</h3>
              <p>Saturday 21st January 2022 - 19:30 GMT</p>
              <br></br>
              <br></br>
              <a href="/f1/register"><button>Register Now</button></a>
      </RaceDetails>
        
        
      </S.Section>

      <S.Section>
        <Footer />
      </S.Section>
    </>
  );
}

export default Austria;

const RaceDetails = styled.div`
  
`;
