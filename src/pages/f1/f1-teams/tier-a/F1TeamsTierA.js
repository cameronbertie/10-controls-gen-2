import React from "react";
// import * as S from "../../../../../styles/styles";
import styled from "styled-components";
import F1Team from "../F1Team";

function F1TeamsTierA() {
  return (
    <>
      <F1Team
        team="red-bull"
        driver1Name="ThomasVink"
        driver1flag="nl"
        driver2Name="focuser"
        driver2flag="es"
      />
      <F1Team
        team="ferrari"
        driver1Name="Antonio Cortes"
        driver1flag="es"
        driver2Name="Antonio Branchix"
        driver2flag="it"
      />
      <F1Team
        team="mercedes"
        driver1Name="Luca"
        driver1flag="gb"
        driver2Name="Counterfeit"
        driver2flag="gb"
      />
      <F1Team
        team="alpine"
        driver1Name="Faded"
        driver1flag="us"
        driver2Name="Nik Kei"
        driver2flag="ua"
      />
      <F1Team
        team="mclaren"
        driver1Name="Luc"
        driver1flag="nl"
        driver2Name="Brim"
        driver2flag="nl"
      />
      <F1Team
        team="alfa-romeo"
        driver1Name="Nydrow"
        driver1flag="be"
        driver2Name="Veixel"
        driver2flag="se"
      />
      <F1Team
        team="aston-martin"
        driver1Name="Kudos"
        driver1flag="de"
        driver2Name="Im3j3n"
        driver2flag="de"
      />
      <F1Team
        team="haas"
        driver1Name="Daniel Bodnar"
        driver1flag="sk"
        driver2Name="Philip"
        driver2flag="nl"
      />
      <F1Team
        team="alpha-tauri"
        driver1Name="Kalcess"
        driver1flag="no"
        driver2Name="Cheers"
        driver2flag="de"
      />
      <F1Team
        team="williams"
        driver1Name="Flaw"
        driver1flag="nl"
        driver2Name="AlphaRomeo"
        driver2flag="nl"
      />
    </>
  );
}

export default F1TeamsTierA;
