import React from "react";

import styled from "styled-components";

function F1StandingsKeyB() {
  return (
    <>
    <StandingsTable id="standingsTable">
      <tr>
        <th><h5>Key</h5></th>
      </tr>
      <tr>
        <td style={{backgroundColor: '#006400'}}><h6>Promoted to tier A</h6></td>
      </tr>
      <tr>
        <td style={{backgroundColor: '#8B0000'}}><h6>Relegated to open qualifiers</h6></td>
      </tr>
    </StandingsTable>
    </>
  );
}

export default F1StandingsKeyB;

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