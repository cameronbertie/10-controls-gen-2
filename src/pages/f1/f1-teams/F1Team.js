import React, { useEffect, useState } from "react";
// import * as S from "../../../../styles/styles";
import styled from "styled-components";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from "react-router-dom";

function F1Team({ team, driver1Name, driver1flag, driver2Name, driver2flag }) {

  const [selectedTeam, setSelectedTeam] = useState();
  const [selectedTeamColor, setSelectedTeamColor] = useState();

  useEffect(() => {
      if(team === 'red-bull') {
          setSelectedTeam('Red Bull')
          setSelectedTeamColor('3671C6')
      } else if(team === 'alfa-romeo') {
          setSelectedTeam('Alfa Romeo')
          setSelectedTeamColor('C92D4B')
      } else if(team === 'aston-martin') {
          setSelectedTeam('Aston Martin')
          setSelectedTeamColor('358C75')
      } else if(team === 'alpha-tauri') {
          setSelectedTeam('AlphaTauri')
          setSelectedTeamColor('5E8FAA')
      } else if (team === 'ferrari'){
          setSelectedTeam(team)
          setSelectedTeamColor('F91536')
      } else if (team === 'mercedes'){
        setSelectedTeam(team)
        setSelectedTeamColor('6CD3BF')
      } else if (team === 'mclaren'){
        setSelectedTeam(team)
        setSelectedTeamColor('F58020')
      } else if (team === 'alpine'){
        setSelectedTeam(team)
        setSelectedTeamColor('2293D1')
      } else if (team === 'williams'){
        setSelectedTeam(team)
        setSelectedTeamColor('37BEDD')
      } else if (team === 'haas'){
        setSelectedTeam(team)
        setSelectedTeamColor('B6BABD')
      }
    }, []);

  return (
    <F1TeamContainer id="f1TeamContainer">
      <F1TeamTop>
        <F1TeamTopLeft>
          <F1TeamRectangle style={{backgroundColor: `#${selectedTeamColor}`}}></F1TeamRectangle>
          <h2>{selectedTeam}</h2>    
        </F1TeamTopLeft>
        <F1TeamTopRight>
          <F1TeamLogo src={`/teams/${team}.png`} alt="" />
        </F1TeamTopRight>
      </F1TeamTop>
      <F1TeamDrivers>
        <F1TeamDriver>
          <h4>{driver1Name}</h4>
          <F1TeamDriverFlag src={`/flags/${driver1flag}.png`} alt="" />
        </F1TeamDriver>
        <F1TeamDriver>
          <h4>{driver2Name}</h4>
          <F1TeamDriverFlag src={`/flags/${driver2flag}.png`} alt="" />
        </F1TeamDriver>
      </F1TeamDrivers>
      <F1TeamCarImage src={`/cars/${team}.png`} alt="" />
    </F1TeamContainer>
  );
}

export default F1Team;

const F1TeamContainer = styled.div`
  border: 2px solid;
  border-bottom: none;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding-top: 16px;
  display: flex;
  flex-direction: column;
  width: 516px;
  row-gap: 16px;
  
  @media (max-width: 799px) {
    width: 100%;
  }
  
`;

const F1TeamTop = styled.div`
    display: flex;
    justify-content: space-between;
    border-color: inherit;
    column-gap: 5px;
    padding: 0 16px;
    align-items: center;
`;

const F1TeamDrivers = styled.div`
    padding: 5px 0;
    display: flex;
    align-items: center;
    column-gap: 10px;
    row-gap: 5px;
    padding: 0 16px;
    border-color: inherit;

    @media (max-width: 799px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const F1TeamTopLeft = styled.div`
display: flex;
column-gap: 10px;
align-items: center;
`;

const F1TeamRectangle = styled.div`
    width: 6px;
    height: 45px;

    @media (max-width: 799px) {
    height: 30px;
  }
`;

const F1TeamTopRight = styled.div`
border-color: inherit;
`;

const F1TeamMiddle = styled.div`
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

const F1TeamBottom = styled.div`
display: flex;
justify-content: space-around;
margin-top: 15px;
border-color: inherit;
column-gap: 16px;
`;

const F1TeamBottomLeft = styled.div`
border-color: inherit;
width: 50%;
`;

const F1TeamBottomRight = styled.div`
border-color: inherit;
width: 50%;
`;

const F1TeamLogo = styled.img`
  height: 39px;
  width: auto;

  @media (max-width: 799px) {
    height: 24px;
    width: auto;
  }
`;

const F1TeamAssets = styled.div`
  display: flex;
  column-gap: 5px;
  align-items: center;
  border-color: inherit;
`;


const F1TeamDriver = styled.div`
display: flex;
align-items: center;
column-gap: 5px;
border-color: inherit;
width: 50%;

@media (max-width: 799px) {
    width: 100%;
  }

`;

const F1TeamDriverFlag = styled.img`
  height: 23px;
  width: 34.5px;
  border-radius: 2px;
  border: 1px solid;
  border-color: inherit;

  @media (max-width: 799px) {
    height: 16px;
    width:  24px;
  }
`;

const F1TeamCarImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
`;

const F1TeamAsset = styled.img`
  height: 23px;
  width: auto;
  object-fit: contain;
  border-radius: 2px;
`;

const F1TeamAssetFlag = styled.img`
  height: 23px;
  width: 34.5px;
  border-radius: 2px;
  border: 1px solid;
  border-color: inherit;
`;