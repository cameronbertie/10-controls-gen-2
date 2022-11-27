import styled from "styled-components";
import { Link } from "react-router-dom";



export const RouterLink = styled(Link)`
  color: #c18794;
  text-decoration: none;

  :hover {
    color: white;
    cursor: pointer;
    transition: 0.3s;
  }
`;

export const Anchor = styled.a`
  color: #c18794;
  text-decoration: none;

  :hover {
    color: white;
    cursor: pointer;
    transition: 0.3s;
  }
`;

export const Heading1 = styled.h1`
  font-size: 90px;
  opacity: 0.87;

  @media (max-width: 1023px) {
    font-size: 60px;
  }

  @media (max-width: 799px) {
    font-size: 32px;
  }
`;

export const Heading2 = styled.h2`
  font-size: 32px;
  opacity: 0.87;
`;

export const Heading3 = styled.h3`
  font-size: 24px;
  opacity: 0.87;
`;

export const Heading4 = styled.h4`
  font-size: 18.72px;
  opacity: 0.87;
`;

export const Heading5 = styled.h5`
  font-size: 16px;
  opacity: 0.87;
`;

export const Heading6 = styled.h6`
  font-size: 13.28px;
  opacity: 0.87;
`;

export const Paragraph = styled.p`
  font-size: 16px;
  opacity: 0.87;
`;

export const Section = styled.section`
  padding: 30px 8%;
  max-width: 1120px;
  margin: 0 auto;
`;

export const SectionFull = styled.section`
  padding: 30px 0;
  width: 100%;
`;

export const Button = styled.button`
  background-color: #c18794;
  color: black;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  border-radius: 25px;
  padding: 13px 16px;
  text-transform: uppercase;
  font-weight: 900;
  border: none;
  cursor: pointer;
  width: auto;

  :hover {
    transition: 0.3s;
    background-color: white;
  }

  @media (max-width: 1023px) {
    font-size: 13.28px;
  }
`;
