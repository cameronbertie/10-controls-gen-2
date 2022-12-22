import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");

// TODO: Sort these out NOW. Create a global stylesheet. Then remove the old styled components from the code.

body {
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
}

#navigation__top {
  background-color: ${({ theme }) => theme.background};
}

#menu__OuterContainer {
  background-color: ${({ theme }) => theme.menuBackground};
}

#menu__hr {
  background-color: ${({ theme }) => theme.menuHrColor};
  border-color: ${({ theme }) => theme.menuHrColor};
}

#pageHero1 {
  background-image: linear-gradient(180deg, rgba(73,40,51,0.6) 0%, rgba(73,40,51,0.6) 100%);
  border-bottom: 1px solid #492833;

  @media (max-width: 799px) {
      background-attachment: scroll;
    }
}

#pageHero2 {
  background-color: ${({ theme }) => theme.background};
  background-image: ${({ theme }) => theme.heroPattern};
  border-bottom: 1px solid #492833;

  @media (max-width: 799px) {
      background-attachment: scroll;
    }
}

#eventContainer, #f1ScheduleCompletedContainer, #f1ScheduleUpcomingContainer, #f1TeamContainer, #resultsTable, #standingsTable {
  border-color: ${({ theme }) => theme.borderColor};
}

#f1ScheduleCompletedMiddle:hover, #f1ScheduleUpcomingMiddle:hover  {
  background-color: ${({ theme }) => theme.buttonBackground};
  border-color: ${({ theme }) => theme.text};
}

#raceRoundTitle {
  color: ${({ theme }) => theme.borderColor};
}

#filterButton {

}

svg {
  fill: ${({ theme }) => theme.text};

  :hover {
    opacity: 50%;
    transition: 0.3s;
  }
}

h1, h2, h3, h4, h5, h6, p {
  color: ${({ theme }) => theme.text};
}

h1 {
  font-size: 90px;

  @media (max-width: 1023px) {
    font-size: 60px;
  }

  @media (max-width: 799px) {
    font-size: 32px;
  }
  
}

h2 {
  font-size: 32px;

  @media (max-width: 1023px) {
    font-size: 24px;
  }
 
}

h3 {
  font-size: 24px;

  @media (max-width: 1023px) {
    font-size: 18.72px;
  }
  
}

h4 {
  font-size: 18.72px;
  
  @media (max-width: 1023px) {
    font-size: 16px;
  }

}

h5 {
  font-size: 16px;
 
  @media (max-width: 1023px) {
    font-size: 13.28px;
  }

}

h6 {
  font-size: 13.28px;
  
  @media (max-width: 1023px) {
    font-size: 10.72px;
  }

}

p {
  font-size: 16px;

}

hr {
  border: 1.5px solid ${({ theme }) => theme.hrColor};
  width: 74px;
  background-color: ${({ theme }) => theme.hrColor};
  margin-bottom: 16px;
}

a {
  color: ${({ theme }) => theme.link};
  text-decoration: none !important;
}

a.active {
    color: ${({ theme }) => theme.linkHover};
    
    border-color: ${({ theme }) => theme.linkHover};
  }

a:hover {
  color: ${({ theme }) => theme.linkHover};
  transition: 0.3s;
}

button {
background-color: ${({ theme }) => theme.buttonBackground};
color: ${({ theme }) => theme.buttonText};
font-size: 16px;
border-radius: 25px;
padding: 10px 13px;
border: 3px solid transparent;
cursor: pointer;

@media (max-width: 1023px) {
    font-size: 13.28px;
  }

}

button:hover {
  transition: 0.3s;
  background-color: ${({ theme }) => theme.buttonBackgroundHover};
  border-color: ${({ theme }) => theme.buttonBorderHover};
  color: ${({ theme }) => theme.buttonTextHover}
}

input {
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  border-radius: 25px;
  border: 1px solid;
  border-color: ${({ theme }) => theme.borderColor};
  font-size: 16px;
  padding: 8px 16px;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  text-transform: none;
}

select {
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  border-radius: 25px;
  border: 1px solid;
  border-color: ${({ theme }) => theme.borderColor};
  font-size: 16px !important;
  padding: 8px 16px;
  font-family: "Inter", sans-serif;
  font-weight: 400;
}

::-webkit-input-placeholder {
  /* Edge */
  color: ${({ theme }) => theme.text};
  text-transform: uppercase;
  font-family: "Inter", sans-serif;
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: ${({ theme }) => theme.text};
  text-transform: uppercase;
  font-family: "Inter", sans-serif;
}

::placeholder {
  color: ${({ theme }) => theme.text};
  text-transform: uppercase;
  font-family: "Inter", sans-serif;
}

  `;


