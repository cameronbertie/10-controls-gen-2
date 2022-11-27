import React from "react";
import styled from "styled-components";
import * as S from "../styles/styles";

function FeaturedSingle({ heading, imageURL, siteURL }) {
  return (
    <S.Section>
      <S.RouterLink to={siteURL}>
        <FeaturedSingleContainer>
          <img src={imageURL} alt=""/>
          <S.Heading2>{heading}</S.Heading2>
        </FeaturedSingleContainer>
      </S.RouterLink>
    </S.Section>
  );
}

export default FeaturedSingle;

const FeaturedSingleContainer = styled.div`
  width: 100%;
  cursor: pointer;
  display: flex;
  row-gap: 30px;
  flex-direction: column;

  :hover {
    text-decoration: underline;
    transition: 0.3s;
  }

  > img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
`;
