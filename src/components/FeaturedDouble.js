import React from "react";
import styled from "styled-components";
import * as S from "../styles/styles";
import { Link } from "react-router-dom";

function FeaturedDouble({
  firstHeading,
  firstImageURL,
  firstSiteURL,
  secondHeading,
  secondImageURL,
  secondSiteURL,
}) {
  return (
    <S.Section>
      <FeaturedDoubleContainer>
        <FeaturedDoubleContent to={firstSiteURL}>
          <FeaturedDoubleImage style={{backgroundImage: `url(${firstImageURL})`}}></FeaturedDoubleImage>
          <h2>{firstHeading}</h2>
        </FeaturedDoubleContent>

        <FeaturedDoubleContent to={secondSiteURL}>
        <FeaturedDoubleImage style={{backgroundImage: `url(${secondImageURL})`}}></FeaturedDoubleImage>
          <h2>{secondHeading}</h2>
        </FeaturedDoubleContent>
      </FeaturedDoubleContainer>
    </S.Section>
  );
}

export default FeaturedDouble;

const FeaturedDoubleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 24px;

  @media (max-width: 799px) {
    flex-direction: column;
        row-gap: 60px;
  }
`;

const FeaturedDoubleContent = styled(Link)`
  display: flex;
  flex-flow: column nowrap;
  row-gap: 30px;
  max-width: 548px;
  width: 48%;
  cursor: pointer;
  height: auto;

  :hover {
    text-decoration: underline !important;
    transition: 0.3s;
  }

  @media (max-width: 799px) {
    width: 100%;
    max-width: 100%;
  }
`;

const FeaturedDoubleImage = styled.div`
width: 100%;
aspect-ratio: 1 / 1;
border-radius: 10px;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`;
