import { createGlobalStyle } from "styled-components"
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text};
  }












// TODO: Sort these out NOW. Create a global stylesheet. Then remove the old styled components from the code. Revert back to old navigation margins and paddings

  /* * {
  margin: 0;
  padding: 0;
}

body {
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: "Inter", sans-serif;
  font-weight: 900;
}

h1 {
  font-size: 90px;
  font-weight: 900;
}

h2 {
  font-size: 32px;
  font-weight: 900;
}

h3 {
  font-size: 24px;
  font-weight: 900;
}

h4 {
  font-size: 18.72px;
  font-weight: 900;
}

h5 {
  font-size: 16px;
  font-weight: 900;
}

h6 {
  font-size: 13.28px;
  font-weight: 900;
}

p {
  font-size: 16px;
  font-weight: 900;
}

hr {
  border-top: 3px solid white;
  width: 74px;
  background-color: white;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
background-color: #C18794;
color: black;
font-family: "Inter", sans-serif;
font-size: 16px;
border-radius: 25px;
padding: 13px 16px;
text-transform: uppercase;
font-weight: 900;
border: none;
cursor: pointer;
}

button:hover {
  transition: 0.3s;
  background-color: white;
} */
  `