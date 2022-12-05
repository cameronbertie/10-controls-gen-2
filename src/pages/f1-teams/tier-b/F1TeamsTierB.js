import React from "react";
import * as S from "../../../styles/styles";
import styled from "styled-components";
import F1Team from "../F1Team";

function F1TeamsTierB() {
  return (
    <>
      <F1Team  team="red-bull" driver1Name="Arab" driver1flag="us" driver2Name="Maxfan" driver2flag="pl" />
      <F1Team  team="ferrari" driver1Name="ARBITERELITE" driver1flag="it" driver2Name="LUKAS HENDRYCH" driver2flag="cz" />
      <F1Team  team="mercedes" driver1Name="UkLucasW" driver1flag="gb" driver2Name="Sp3xtre" driver2flag="se" />
      <F1Team  team="alpine" driver1Name="Kimirai" driver1flag="de" driver2Name="Vade" driver2flag="se" />
      <F1Team  team="mclaren" driver1Name="CountMuttly" driver1flag="dk" driver2Name="Melon" driver2flag="ro" />
      <F1Team  team="alfa-romeo" driver1Name="Vladredd" driver1flag="ro" driver2Name="Bald" driver2flag="ie" />
      <F1Team  team="aston-martin" driver1Name="AnOldEnemy" driver1flag="nl" driver2Name="LawrenceSelling" driver2flag="ph" />
      <F1Team  team="haas" driver1Name="Max Housley" driver1flag="gb" driver2Name="Kjaerbo" driver2flag="dk" />
      <F1Team  team="alpha-tauri" driver1Name="Br0wn" driver1flag="de" driver2Name="Zerotix" driver2flag="de" />
      <F1Team  team="williams" driver1Name="Kogoda" driver1flag="ie" driver2Name="BartusG" driver2flag="hu" />
    </>
  );
}

export default F1TeamsTierB;