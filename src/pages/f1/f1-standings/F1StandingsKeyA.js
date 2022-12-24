import React from "react";

import styled from "styled-components";

function F1StandingsKeyA() {
  return (
    <>
    <StandingsTable id="standingsTable">
      <tr>
        <th><h5>Key</h5></th>
      </tr>
      <tr>
        <td style={{backgroundColor: "rgba(220, 53, 69, 0.4)"}}><h6>Relegated to tier b</h6></td>
      </tr>
    </StandingsTable>
    </>
  );
}

export default F1StandingsKeyA;

const StandingsTable = styled.table`
  width: 100%;
  border-spacing: 0;

  th,
  td {
    padding: 14px 20px;
    text-align: left;
    border-bottom: 1px solid;
    border-color: inherit;

    @media only screen and (max-width: 799px) {
      padding: 9px 10px 7px;
    }
  }

  th {
    text-align: left;
  }
`;