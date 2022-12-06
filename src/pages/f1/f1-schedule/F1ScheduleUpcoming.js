import React from "react";
import * as S from "../../../styles/styles";
import styled from "styled-components";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from "react-router-dom";

function F1ScheduleUpcoming({roundNumber, days, month, raceCountryFlag, raceName, raceDetailLink}) {
  return (
    <F1ScheduleUpcomingContainer id="f1ScheduleUpcomingContainer">
      <F1ScheduleUpcomingTop>
        <F1ScheduleUpcomingTopLeft>
          <h5 id="raceRoundTitle">Round {roundNumber}</h5>
          <h4>{days}</h4>
          <h6>{month}</h6>
          
        </F1ScheduleUpcomingTopLeft>
        <F1ScheduleUpcomingTopRight>
          <F1ScheduleUpcomingRaceFlag src={`/flags/${raceCountryFlag}.png`} alt="" />
        </F1ScheduleUpcomingTopRight>
      </F1ScheduleUpcomingTop>
      <F1ScheduleUpcomingRaceTitle>
          <h4>{raceName}</h4>
        </F1ScheduleUpcomingRaceTitle>
      <Link to={raceDetailLink}>
      <F1ScheduleUpcomingMiddle id="f1ScheduleUpcomingMiddle">
      <h6>VIEW RACE DETAILS</h6>
      <ArrowForwardIosIcon />
      </F1ScheduleUpcomingMiddle>
      </Link>
      <Link to="/f1/register">
      <F1ScheduleUpcomingMiddle id="f1ScheduleUpcomingMiddle">
      <h6>REGISTER</h6>
      <ArrowForwardIosIcon />
      </F1ScheduleUpcomingMiddle>
      </Link>
      {/* <F1ScheduleUpcomingBottom>
      <F1ScheduleUpcomingBottomLeft>
      <F1ScheduleUpcomingDriver>
      
      <F1ScheduleUpcomingAssets>
      <F1ScheduleUpcomingAssetFlag src={`/flags/${tierADriverFlag}.png`} alt="" />
      <F1ScheduleUpcomingAsset src={`/teams/${tierADriverTeam}.png`} alt="" />
        </F1ScheduleUpcomingAssets>
        <h5>{tierADriver}</h5>
        <h6>Tier A Winner</h6>
        </F1ScheduleUpcomingDriver>
      </ F1ScheduleUpcomingBottomLeft>

      <F1ScheduleUpcomingBottomRight>
      <F1ScheduleUpcomingDriver>
   <F1ScheduleUpcomingAssets>
      <F1ScheduleUpcomingAssetFlag src={`/flags/${tierBDriverFlag}.png`} alt="" />
      <F1ScheduleUpcomingAsset src={`/teams/${tierBDriverTeam}.png`} alt="" />
    </F1ScheduleUpcomingAssets>
            <h5>{tierBDriver}</h5>
            <h6>Tier B Winner</h6>
        </F1ScheduleUpcomingDriver>
      </F1ScheduleUpcomingBottomRight>
        
      </F1ScheduleUpcomingBottom> */}
    </F1ScheduleUpcomingContainer>
  );
}

export default F1ScheduleUpcoming;

const F1ScheduleUpcomingContainer = styled.div`
  border: 2px solid;
  border-bottom: none;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  width: 326px;
  height: 289px;
  
  @media (max-width: 799px) {
    width: 100%;
  }
  
`;

const F1ScheduleUpcomingTop = styled.div`
    display: flex;
    justify-content: space-between;
    border-color: inherit;
    
`;

const F1ScheduleUpcomingRaceTitle = styled.div`
    padding: 5px 0;
    border-bottom: solid 1px;
    border-color: inherit;
    display: flex;
    align-items: center;
    column-gap: 8px;
    justify-content: space-between;
`;

const F1ScheduleUpcomingTopLeft = styled.div``;

const F1ScheduleUpcomingTopRight = styled.div`
border-color: inherit;
`;

const F1ScheduleUpcomingMiddle = styled.div`
    padding: 15px 16px;
    border-bottom: solid 1px;
    border-color: inherit;
    display: flex;
    align-items: center;
    column-gap: 8px;
    justify-content: space-between;

    :hover {
    cursor: pointer;
    transition: 0.3s;
  }

  > .MuiSvgIcon-root:hover {
    opacity: 1;
  }
`;

const F1ScheduleUpcomingBottom = styled.div`
display: flex;
justify-content: space-around;
margin-top: 15px;
border-color: inherit;
column-gap: 16px;

`;

const F1ScheduleUpcomingBottomLeft = styled.div`
border-color: inherit;
width: 50%;
`;

const F1ScheduleUpcomingBottomRight = styled.div`
border-color: inherit;
width: 50%;
`;

const F1ScheduleUpcomingRaceFlag = styled.img`
  height: 23px;
  width: 34.5px;
  border-radius: 2px;
  border: 1px solid;
  border-color: inherit;
`;

const F1ScheduleUpcomingAssets = styled.div`
  display: flex;
  column-gap: 5px;
  align-items: center;
  border-color: inherit;
`;


const F1ScheduleUpcomingDriver = styled.div`
display: flex;
justify-content: space-between;
flex-direction: column;
align-items: center;
row-gap: 5px;
border-color: inherit;

> h6, h5 {
    text-align: center;
  }
`;

const F1ScheduleUpcomingAsset = styled.img`
  height: 23px;
  width: auto;
  object-fit: contain;
  border-radius: 2px;
`;

const F1ScheduleUpcomingAssetFlag = styled.img`
  height: 23px;
  width: 34.5px;
  border-radius: 2px;
  border: 1px solid;
  border-color: inherit;
`;