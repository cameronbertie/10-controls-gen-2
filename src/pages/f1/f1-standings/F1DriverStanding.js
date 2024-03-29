import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";

function F1DriverStanding({
  driverPosition,
  driverName,
  driverFlag,
  team,
  driverPoints,
  status,
}) {
  const [selectedTeam, setSelectedTeam] = useState();
  const [selectedTeamColor, setSelectedTeamColor] = useState();
  const [rowBackgroundColor, setRowBackgroundColor] = useState();
  const [fontColor, setFontColor] = useState();

  useEffect(() => {
    if (team === "red-bull") {
      setSelectedTeam("Red Bull");
      setSelectedTeamColor("3671C6");
    } else if (team === "alfa-romeo") {
      setSelectedTeam("Alfa Romeo");
      setSelectedTeamColor("C92D4B");
    } else if (team === "aston-martin") {
      setSelectedTeam("Aston Martin");
      setSelectedTeamColor("358C75");
    } else if (team === "alpha-tauri") {
      setSelectedTeam("AlphaTauri");
      setSelectedTeamColor("5E8FAA");
    } else if (team === "ferrari") {
      setSelectedTeam(team);
      setSelectedTeamColor("F91536");
    } else if (team === "mercedes") {
      setSelectedTeam(team);
      setSelectedTeamColor("6CD3BF");
    } else if (team === "mclaren") {
      setSelectedTeam(team);
      setSelectedTeamColor("F58020");
    } else if (team === "alpine") {
      setSelectedTeam(team);
      setSelectedTeamColor("2293D1");
    } else if (team === "williams") {
      setSelectedTeam(team);
      setSelectedTeamColor("37BEDD");
    } else if (team === "haas") {
      setSelectedTeam(team);
      setSelectedTeamColor("B6BABD");
    }

    if (status === "promotion" ) {
      setRowBackgroundColor("rgb(25, 135, 84, 0.4)");
    }

    if (status === "demotion" ) {
      setRowBackgroundColor("rgb(220, 53, 69, 0.4)");
    }
  }, []);

  return (
    <tr style={{ backgroundColor: `${rowBackgroundColor}` }}>
      <td>
        <TeamLeft>
          <h6>{driverPosition ? driverPosition : "-"}</h6>
          <TeamRectangle
            style={{ backgroundColor: `#${selectedTeamColor}` }}
          ></TeamRectangle>
        </TeamLeft>
      </td>
      <td>
        <h6>{driverName}</h6>
      </td>
      <DriverFlagData>
        <DriverFlagContainer>
        <DriverFlag className="" src={`/flags/${driverFlag}.png`} />
        </DriverFlagContainer>
      </DriverFlagData>
      <TeamDetailsData>
        <TeamDetails>
          <h6>{selectedTeam}</h6>
          <TeamLogo src={`/teams/${team}.png`} alt="" />
        </TeamDetails>
      </TeamDetailsData>
      <DriverPoints>
        <h6>{driverPoints}</h6>
      </DriverPoints>
    </tr>
  );
}

export default F1DriverStanding;

const TeamLeft = styled.div`
  display: flex;
  column-gap: 10px;
  align-items: center;
  justify-content: space-between;
`;

const TeamRectangle = styled.div`
  width: 3px;
  height: 20px;

  @media (max-width: 799px) {
    height: 18px;
  }
`;

const DriverFlag = styled.img`
  height: 16px;
  width: 24px;
  border-radius: 2px;
  border: 1px solid;
  border-color: inherit;
`;

const DriverFlagContainer = styled.div`
  display: flex;
  align-items: center;
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

const DriverPoints = styled.td`
  > h6 {
    text-align: right;
  }
`;
