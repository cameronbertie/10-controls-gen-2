import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";

function F1ConstructorStanding({
  constructorPosition,
  team,
  constructorPoints,
}) {
  const [selectedTeam, setSelectedTeam] = useState();
  const [selectedTeamColor, setSelectedTeamColor] = useState();

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
  }, []);

  return (
    <tr>
      <td>
        <TeamLeft>
          <h6>{constructorPosition ? constructorPosition : "-"}</h6>
          <TeamRectangle
            style={{ backgroundColor: `#${selectedTeamColor}` }}
          ></TeamRectangle>
        </TeamLeft>
      </td>
      <td>
        <TeamDetails>
          <h6>{selectedTeam}</h6>
          <TeamLogo src={`/teams/${team}.png`} alt="" />
        </TeamDetails>
      </td>
      <ConstructorPoints>
      <h6>{constructorPoints}</h6>
      </ConstructorPoints>
    </tr>
  );
}

export default F1ConstructorStanding;

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

const TeamDetails = styled.div`
  display: flex;
  column-gap: 5px;
`;

const TeamLogo = styled.img`
  height: 16px;
  width: auto;

  @media (max-width: 799px) {
    height: 13px;
  }  
`;

const ConstructorPoints = styled.td`

  > h6 {
    text-align: right;
  }
  
`;
