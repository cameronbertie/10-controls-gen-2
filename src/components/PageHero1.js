import React from "react";
import styled from "styled-components";
import * as S from "../styles/styles";
import { Link } from "react-router-dom";

function PageHero1({
  smallHeading,
  mainHeading,
  subHeading,
  backgroundImageURL,
}) {
  return (
    <S.SectionFull
      id="pageHero1"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(73,40,51,0.87) 0%, rgba(73,40,51,0.87) 100%), url(" +
          backgroundImageURL +
          ")",
      }}
    >
      <PageHero1Container>
        <h1>{smallHeading}</h1>
        <h2>{mainHeading}</h2>
        <h3>{subHeading}</h3>
      </PageHero1Container>
    </S.SectionFull>
  );
}

export default PageHero1;

const PageHero1Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-width: 1120px;
    height: 360px;
    margin: 0 auto;
    padding: 0 8%;
  text-align: center;
  color: rgba(255, 255, 255, 0.87) !important;

  @media (max-width: 1023px) {
      height: 300px;
    }

    @media (max-width: 799px) {
      height: 180px;
    }

  h1,
  h2,
  h3 {
    color: #ffffff !important;
  }

  > h1 {
    font-size: 24px;

    @media (max-width: 1023px) {
      font-size: 18.72px;
    }
  }

  > h2 {
    font-size: 90px;

    @media (max-width: 1023px) {
      font-size: 60px;
    }

    @media (max-width: 799px) {
      font-size: 32px;
    }
  }

  > h3 {
    font-size: 16px;
 
  @media (max-width: 1023px) {
    font-size: 13.28px;
  }
  }
`;
