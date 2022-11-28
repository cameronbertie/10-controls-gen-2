import React from "react";
import styled from "styled-components";
import * as S from "../styles/styles";
import { Link } from "react-router-dom";

function FeaturedSingle({ heading, imageURL, siteURL }) {
  return (
    <S.Section>
      <FeaturedSingleContainer to={siteURL}>
        <img src={imageURL} alt="" />
        <h2>{heading}</h2>
      </FeaturedSingleContainer>
    </S.Section>
  );
}

export default FeaturedSingle;

const FeaturedSingleContainer = styled(Link)`
  width: 100%;
  cursor: pointer;
  display: flex;
  row-gap: 30px;
  flex-direction: column;

  :hover {
    text-decoration: underline !important;
    transition: 0.3s;
  }

  > img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
`;
