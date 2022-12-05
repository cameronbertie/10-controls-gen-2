import React from "react";
import styled from "styled-components";
import * as S from "../styles/styles";
import { Link } from "react-router-dom";

function PageHero2({
  smallHeading,
  mainHeading,
  subHeading,
  backgroundImageURL,
}) {
  return (
    <S.SectionFull
      id="pageHero2"
      style={{
       
      }}
    >
      <PageHero2Container>
        <PageHero2Text>
        <h2>{mainHeading}</h2>
        <h3>{subHeading}</h3>
        </PageHero2Text>
      </PageHero2Container>
    </S.SectionFull>
  );
}

export default PageHero2;

const PageHero2Container = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    max-width: 1120px;
    height: 360px;
    margin: 0 auto;
    padding: 0 8%;
    text-align: left;
  

  @media (max-width: 1023px) {
      height: 300px;
    }

    @media (max-width: 799px) {
      height: 180px;
    }
`;

const PageHero2Text = styled.div`
    width: 60%;

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
