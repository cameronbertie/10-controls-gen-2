import React from "react";
import styled from "styled-components";
import * as S from "../styles/styles";
import { Link } from "react-router-dom";

function Events({ eventName, eventDescription, eventButtonText, eventButtonLink, eventImageURL }) {
  return (
        <EventContainer id="eventContainer">
          <EventContainerLeft>
            <EventContainerImage style={{backgroundImage: `url(${eventImageURL})`}} />
            <EventContainerText>
            <h2>{eventName}</h2>
            <br></br>
            <p>{eventDescription}</p>
            </EventContainerText>
          </EventContainerLeft>
          <EventContainerRight>
            <a href={eventButtonLink}><button>{eventButtonText}</button></a>
            <div style={{backgroundImage: `url(${eventImageURL})`}}></div>
          </EventContainerRight>
        </EventContainer>
  );
}

export default Events;

const EventContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 40px 25px;
  border-top: solid 2px;
  border-bottom: solid 2px;
  justify-content: space-between;
  align-items: center;
  column-gap: 25px;

  @media (max-width: 799px) {
    flex-direction: column;
    row-gap: 25px;
    align-items: start;
  }
`;

const EventContainerLeft = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 25px;
  width: 70%;

  @media (max-width: 799px) {
    width: 100%;
  }
`;

const EventContainerImage = styled.div`
  height: 100px;
  width: 100px;
  min-width: 100px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px;

  @media (max-width: 799px) {
    width: 100px;
  }
  
`;

const EventContainerRight = styled.div`
  @media (max-width: 799px) {
    margin-left: 125px;
  }
`;

const EventContainerText = styled.div`
 
`;