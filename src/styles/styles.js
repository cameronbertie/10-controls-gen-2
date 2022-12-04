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

export const Section = styled.section`
  padding: 60px 8%;
  max-width: 1120px;
  margin: 0 auto;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 1023px) {
    padding: 30px 8%;
    }
`;

export const EventSection = styled.section`
  padding: 60px 8%;
  max-width: 1120px;
  margin: 0 auto;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  row-gap: 30px;

  @media (max-width: 1023px) {
    padding: 30px 8%;
    }
`;

export const SectionFull = styled.section`
  padding: 60px 0;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;

  @media (max-width: 1023px) {
    padding: 30px 0;
    }
`;
