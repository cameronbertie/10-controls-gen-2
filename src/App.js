import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled, { withTheme } from "styled-components";
import ScrollToTop from "./components/ScrollToTop";
import Navigation from "./components/Navigation";
import Home from './pages/Home';
import F1 from './pages/F1';
import F1Schedule from './pages/f1 schedule/F1Schedule';

function App() {
  return (
    
    <Router>
      <ScrollToTop />
      <>
        <Header>
          <Navigation />
        </Header>
        <PageContent>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/F1" element={<F1 />} />
          <Route path="/f1/schedule" element={<F1Schedule />} />
        </Routes>
        </PageContent>
        </>
    </Router>
    
  );
}

export default App;

const Header = styled.header`
  position: fixed;
  z-index: 999;
  width: 100%;
  margin-top: -84px;

  @media (max-width: 799px) {
    margin-top: -67px;
  }
`;

const PageContent = styled.main`
  position: relative;
  z-index: 998;
  margin: 84px 84px 0 84px;
  width: auto;

  @media (max-width: 1023px) {
    margin: 84px 0 60px 0;
  }

  @media (max-width: 799px) {
    margin: 67px 0 0 0;
  }
`;
