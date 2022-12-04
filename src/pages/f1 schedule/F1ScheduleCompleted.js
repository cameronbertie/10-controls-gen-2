import React from "react";
import * as S from "../../styles/styles";
import styled from "styled-components";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { Link } from "react-router-dom";

function F1ScheduleCompleted({roundNumber, days, month, raceCountryFlag, raceName, tierADriver, tierADriverFlag, tierADriverTeam, tierBDriver, tierBDriverFlag, tierBDriverTeam, tierAResultsLink, tierBResultsLink}) {
  return (
    <F1ScheduleCompletedContainer id="f1ScheduleCompletedContainer">
      <F1ScheduleCompletedTop>
        <F1ScheduleCompletedTopLeft>
          <h5 id="raceRoundTitle">Round {roundNumber}</h5>
          <h4>{days}</h4>
          <h6>{month}</h6>
          
        </F1ScheduleCompletedTopLeft>
        <F1ScheduleCompletedTopRight>
          <F1ScheduleCompletedRaceFlag src={`/flags/${raceCountryFlag}.png`} alt="" />
        </F1ScheduleCompletedTopRight>
      </F1ScheduleCompletedTop>
      <F1ScheduleCompletedRaceTitle>
          <h4>{raceName}</h4>
        </F1ScheduleCompletedRaceTitle>
      <Link to={tierAResultsLink}>
      <F1ScheduleCompletedMiddle id="f1ScheduleCompletedMiddle">
      <h6>TIER A RESULTS</h6>
      <ArrowForwardIosIcon />
      </F1ScheduleCompletedMiddle>
      </Link>
      <Link to={tierBResultsLink}>
      <F1ScheduleCompletedMiddle id="f1ScheduleCompletedMiddle">
      <h6>TIER B RESULTS</h6>
      <ArrowForwardIosIcon />
      </F1ScheduleCompletedMiddle>
      </Link>
      <F1ScheduleCompletedBottom>
      <F1ScheduleCompletedBottomLeft>
      <F1ScheduleCompletedDriver>
      
      <F1ScheduleCompletedAssets>
      <F1ScheduleCompletedAssetFlag src={`/flags/${tierADriverFlag}.png`} alt="" />
      <F1ScheduleCompletedAsset src={`/teams/${tierADriverTeam}.png`} alt="" />
        </F1ScheduleCompletedAssets>
        <h5>{tierADriver}</h5>
        <h6>Tier A Winner</h6>
        </F1ScheduleCompletedDriver>
      </ F1ScheduleCompletedBottomLeft>

      <F1ScheduleCompletedBottomRight>
      <F1ScheduleCompletedDriver>
   <F1ScheduleCompletedAssets>
      <F1ScheduleCompletedAssetFlag src={`/flags/${tierBDriverFlag}.png`} alt="" />
      <F1ScheduleCompletedAsset src={`/teams/${tierBDriverTeam}.png`} alt="" />
    </F1ScheduleCompletedAssets>
            <h5>{tierBDriver}</h5>
            <h6>Tier B Winner</h6>
        </F1ScheduleCompletedDriver>
      </F1ScheduleCompletedBottomRight>
        
      </F1ScheduleCompletedBottom>
    </F1ScheduleCompletedContainer>
  );
}

export default F1ScheduleCompleted;

const F1ScheduleCompletedContainer = styled.div`
  border: 2px solid;
  border-bottom: none;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  width: 326px;
  
  @media (max-width: 799px) {
    width: 100%;
  }
  
`;

const F1ScheduleCompletedTop = styled.div`
    display: flex;
    justify-content: space-between;
    border-color: inherit;
    
`;

const F1ScheduleCompletedRaceTitle = styled.div`
    padding: 5px 0;
    border-bottom: solid 1px;
    border-color: inherit;
    display: flex;
    align-items: center;
    column-gap: 8px;
    justify-content: space-between;
`;

const F1ScheduleCompletedTopLeft = styled.div``;

const F1ScheduleCompletedTopRight = styled.div`
border-color: inherit;
`;

const F1ScheduleCompletedMiddle = styled.div`
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
`;

const F1ScheduleCompletedBottom = styled.div`
display: flex;
justify-content: space-around;
margin-top: 15px;
border-color: inherit;
column-gap: 16px;
`;

const F1ScheduleCompletedBottomLeft = styled.div`
border-color: inherit;
width: 50%;
`;

const F1ScheduleCompletedBottomRight = styled.div`
border-color: inherit;
width: 50%;
`;

const F1ScheduleCompletedRaceFlag = styled.img`
  height: 23px;
  width: 34.5px;
  border-radius: 2px;
  border: 1px solid;
  border-color: inherit;
`;

const F1ScheduleCompletedAssets = styled.div`
  display: flex;
  column-gap: 5px;
  align-items: center;
  border-color: inherit;
`;


const F1ScheduleCompletedDriver = styled.div`
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

const F1ScheduleCompletedAsset = styled.img`
  height: 23px;
  width: auto;
  object-fit: contain;
  border-radius: 2px;
`;

const F1ScheduleCompletedAssetFlag = styled.img`
  height: 23px;
  width: 34.5px;
  border-radius: 2px;
  border: 1px solid;
  border-color: inherit;
`;