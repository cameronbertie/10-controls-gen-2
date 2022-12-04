import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';

function F1RaceResult ({ driverPosition, driverName, driverFlag, team, driverTime, driverPoints }) {

    const [selectedTeam, setSelectedTeam] = useState();

    useEffect(() => {
        if(team === 'red-bull') {
            setSelectedTeam('Red Bull')
        } else if(team === 'alfa-romeo') {
            setSelectedTeam('Alfa Romeo')
        } else if(team === 'aston-martin') {
            setSelectedTeam('Aston Martin')
        } else if(team === 'alpha-tauri') {
            setSelectedTeam('AlphaTauri')
        } else {
            setSelectedTeam(team)
        }
      }, []);

    

    return (
        <tr>
        
        <td><h6>{driverPosition ? driverPosition : '-'}</h6></td>
        <td><h6>{driverName}</h6></td>
        <DriverFlagData><DriverFlag className="" src={`/flags/${driverFlag}`} /></DriverFlagData>
        <TeamDetailsData>
          <TeamDetails>
          <h6 className="team-name-driver-2">{selectedTeam}</h6>
          <TeamLogo src={`/teams/${team}.png`} alt="" />
        </TeamDetails>
        </TeamDetailsData>
        <td><h6 className="data-text">{driverTime}</h6></td>
        <td><h6 className="data-text">{driverPoints}</h6></td>
      </tr>
    )
  }

export default F1RaceResult;

const DriverFlag = styled.img`
  height: 16px;
  width: 24px;
  border-radius: 2px;
  border: 1px solid;
  border-color: inherit;
`;

const TeamDetailsData = styled.td`
  @media (max-width: 799px) {
      display: none;
    }
`;

const DriverFlagData = styled.td`
  @media (max-width: 799px) {
      display: none;
    }
`;

const TeamDetails = styled.div`
  display: flex;
  column-gap: 5px;
`;

const TeamLogo = styled.img`
  height: 16px;
  width: auto;
`;