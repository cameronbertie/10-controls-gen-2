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

function Portimao() {
  return (
    <>
      
      <PageHero2
        mainHeading="Portimao"
        subHeading="Season 2 - Round 2"
      />
      <F1SecondaryNavigation
        // Please ensure that page titles are in order of how they should be displayed. Make sure that the order of the links match their respected page titles.
        pages={["Schedule", "Teams", "Standings", "Register"]}
        links={["/f1/schedule", "/f1/teams", "/f1/standings", "/f1/register"]}
      />
      <S.Section>

      <RaceDetails>
      <h2>Tier A Race Details</h2>
              <br></br>
              <h3>Practice Lobby</h3>
              <p>Friday 9th December 2022 - 18:00 GMT</p>
              <br></br>
              <h3>Race Starts</h3>
              <p>Friday 9th December 2022 - 19:30 GMT</p>
              <br></br>
              <br></br>
              <h2>Tier B Race Details</h2>
              <br></br>
              <h3>Race Starts</h3>
              <p>Saturday 10th December 2022 - 18:00 GMT</p>
              <br></br>
              <h3>Race Starts</h3>
              <p>Saturday 10th December 2022 - 19:30 GMT</p>
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

export default Portimao;

const RaceDetails = styled.div`
  text-align: center;
`;
