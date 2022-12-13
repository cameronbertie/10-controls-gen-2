import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled, { withTheme } from "styled-components";
import ScrollToTop from "./components/ScrollToTop";
import Navigation from "./components/Navigation";
import Home from './pages/Home';
import F1 from './pages/f1/F1';
import F1Schedule from './pages/f1/f1-schedule/F1Schedule';
import F1Standings from './pages/f1/f1-standings/F1Standings';
import F1Teams from './pages/f1/f1-teams/F1Teams';
import F1Register from './pages/f1/f1-register/F1Register';

import Melbourne1A from './pages/f1/f1-schedule/season-1/races/Melbourne1A';
import Silverstone1A from './pages/f1/f1-schedule/season-1/races/Silverstone1A';

import Melbourne2A from './pages/f1/f1-schedule/season-2/races/tier-a/Melbourne2A';
import Melbourne2B from './pages/f1/f1-schedule/season-2/races/tier-b/Melbourne2B';
import Portimao from './pages/f1/f1-schedule/season-2/races/Portimao';

import ACC from './pages/acc/ACC';
import RL from './pages/rl/RL';
import { useSelector } from "react-redux";
import { selectTheme } from "./redux/features/themeSlice";



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
          <Route path="/f1/standings" element={<F1Standings />} />
          <Route path="/f1/teams" element={<F1Teams />} />
          <Route path="/f1/register" element={<F1Register />} />
          
          <Route path="/f1/schedule/season-1/tier-a/melbourne" element={<Melbourne1A />} />
          <Route path="/f1/schedule/season-1/tier-a/silverstone" element={<Silverstone1A />} />

          <Route path="/f1/schedule/season-2/tier-a/melbourne" element={<Melbourne2A />} />
          <Route path="/f1/schedule/season-2/tier-b/melbourne" element={<Melbourne2B />} />

          <Route path="/f1/schedule/season-2/portimao" element={<Portimao />} />

          <Route path="/acc" element={<ACC />} />
          <Route path="/rl" element={<RL />} />
          
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
