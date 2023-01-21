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

import Melbourne1A from './pages/f1/f1-schedule/season-1/races/tier-a/Melbourne1A';
import Melbourne1B from './pages/f1/f1-schedule/season-1/races/tier-b/Melbourne1B';
import Silverstone1A from './pages/f1/f1-schedule/season-1/races/tier-a/Silverstone1A';
import Silverstone1B from "./pages/f1/f1-schedule/season-1/races/tier-b/Silverstone1B";
import Spa1A from './pages/f1/f1-schedule/season-1/races/tier-a/Spa1A';
import Spa1B from "./pages/f1/f1-schedule/season-1/races/tier-b/Spa1B";
import Jeddah1A from './pages/f1/f1-schedule/season-1/races/tier-a/Jeddah1A';
import Jeddah1B from './pages/f1/f1-schedule/season-1/races/tier-b/Jeddah1B';
import Zandvoort1A from './pages/f1/f1-schedule/season-1/races/tier-a/Zandvoort1A';
import Zandvoort1B from './pages/f1/f1-schedule/season-1/races/tier-b/Zandvoort1B';
// import Monza1A from './pages/f1/f1-schedule/season-1/races/tier-a/Monza1A';
import Monza1B from './pages/f1/f1-schedule/season-1/races/tier-b/Monza1B';
// import Hungaroring1A from './pages/f1/f1-schedule/season-1/races/tier-a/Hungaroring1A';
import Hungaroring1B from './pages/f1/f1-schedule/season-1/races/tier-b/Hungaroring1B';
// import Miami1A from './pages/f1/f1-schedule/season-1/races/tier-a/Miami1A';
import Miami1B from './pages/f1/f1-schedule/season-1/races/tier-b/Miami1B';
// import Mexico1A from './pages/f1/f1-schedule/season-1/races/tier-a/Mexico1A';
import Mexico1B from './pages/f1/f1-schedule/season-1/races/tier-b/Mexico1B';

import Melbourne2A from './pages/f1/f1-schedule/season-2/races/tier-a/Melbourne2A';
import Melbourne2B from './pages/f1/f1-schedule/season-2/races/tier-b/Melbourne2B';
import Portimao2A from './pages/f1/f1-schedule/season-2/races/tier-a/Portimao2A';
import Portimao2B from './pages/f1/f1-schedule/season-2/races/tier-b/Portimao2B';
import PaulRicard2A from './pages/f1/f1-schedule/season-2/races/tier-a/PaulRicard2A';
import PaulRicard2B from './pages/f1/f1-schedule/season-2/races/tier-b/PaulRicard2B';
import Suzuka2A from './pages/f1/f1-schedule/season-2/races/tier-a/Suzuka2A';
import Suzuka2B from './pages/f1/f1-schedule/season-2/races/tier-b/Suzuka2B';
import Hungaroring2A from './pages/f1/f1-schedule/season-2/races/tier-a/Hungaroring2A';
import Hungaroring2B from './pages/f1/f1-schedule/season-2/races/tier-b/Hungaroring2B';
import Spielberg2A from './pages/f1/f1-schedule/season-2/races/tier-a/Spielberg2A';
// import Spielberg2B from './pages/f1/f1-schedule/season-2/races/tier-b/Spielberg2B';

import Suzuka from "./pages/f1/f1-schedule/season-2/races/Suzuka";
import Hungaroring from "./pages/f1/f1-schedule/season-2/races/Hungaroring";
import Austria from "./pages/f1/f1-schedule/season-2/races/Austria";
import Baku from "./pages/f1/f1-schedule/season-2/races/Baku";
import Shanghai from "./pages/f1/f1-schedule/season-2/races/Shanghai";
import Austin from "./pages/f1/f1-schedule/season-2/races/Austin";
import Imola from "./pages/f1/f1-schedule/season-2/races/Imola";
import Singapore from "./pages/f1/f1-schedule/season-2/races/Singapore";
import Interlagos from "./pages/f1/f1-schedule/season-2/races/Interlagos";

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
          <Route path="/f1/schedule/season-1/tier-b/melbourne" element={<Melbourne1B />} />
          <Route path="/f1/schedule/season-1/tier-a/silverstone" element={<Silverstone1A />} />
          <Route path="/f1/schedule/season-1/tier-b/silverstone" element={<Silverstone1B />} />
          <Route path="/f1/schedule/season-1/tier-a/spa" element={<Spa1A />} />
          <Route path="/f1/schedule/season-1/tier-b/spa" element={<Spa1B />} />
          <Route path="/f1/schedule/season-1/tier-a/jeddah" element={<Jeddah1A />} />
          <Route path="/f1/schedule/season-1/tier-b/jeddah" element={<Jeddah1B />} />
          <Route path="/f1/schedule/season-1/tier-a/zandvoort" element={<Zandvoort1A />} />
          <Route path="/f1/schedule/season-1/tier-b/zandvoort" element={<Zandvoort1B />} />
          {/* <Route path="/f1/schedule/season-1/tier-a/monza" element={<Monza1A />} /> */}
          <Route path="/f1/schedule/season-1/tier-b/monza" element={<Monza1B />} />
          {/* <Route path="/f1/schedule/season-1/tier-a/hungaroring" element={<Hungaroring1A />} /> */}
          <Route path="/f1/schedule/season-1/tier-b/hungaroring" element={<Hungaroring1B />} />
          {/* <Route path="/f1/schedule/season-1/tier-a/miami" element={<Miami1A />} /> */}
          <Route path="/f1/schedule/season-1/tier-b/miami" element={<Miami1B />} />
          {/* <Route path="/f1/schedule/season-1/tier-a/mexico" element={<Mexico1A />} /> */}
          <Route path="/f1/schedule/season-1/tier-b/mexico" element={<Mexico1B />} />

          <Route path="/f1/schedule/season-2/tier-a/melbourne" element={<Melbourne2A />} />
          <Route path="/f1/schedule/season-2/tier-b/melbourne" element={<Melbourne2B />} />
          <Route path="/f1/schedule/season-2/tier-a/portimao" element={<Portimao2A />} />
          <Route path="/f1/schedule/season-2/tier-b/portimao" element={<Portimao2B />} />
          <Route path="/f1/schedule/season-2/tier-a/paul-ricard" element={<PaulRicard2A />} />
          <Route path="/f1/schedule/season-2/tier-b/paul-ricard" element={<PaulRicard2B />} />
          <Route path="/f1/schedule/season-2/tier-a/suzuka" element={<Suzuka2A />} />
          <Route path="/f1/schedule/season-2/tier-b/suzuka" element={<Suzuka2B />} />
          <Route path="/f1/schedule/season-2/tier-a/hungaroring" element={<Hungaroring2A />} />
          <Route path="/f1/schedule/season-2/tier-b/hungaroring" element={<Hungaroring2B />} />
          <Route path="/f1/schedule/season-2/tier-a/spielberg" element={<Spielberg2A />} />
          {/* <Route path="/f1/schedule/season-2/tier-b/spielberg" element={<Spielberg2B />} /> */}
          
          <Route path="/f1/schedule/season-2/suzuka" element={<Suzuka />} />
          <Route path="/f1/schedule/season-2/hungaroring" element={<Hungaroring />} />
          <Route path="/f1/schedule/season-2/spielberg" element={<Austria />} />
          <Route path="/f1/schedule/season-2/baku" element={<Baku />} />
          <Route path="/f1/schedule/season-2/shanghai" element={<Shanghai />} />
          <Route path="/f1/schedule/season-2/austin" element={<Austin />} />
          <Route path="/f1/schedule/season-2/imola" element={<Imola />} />
          <Route path="/f1/schedule/season-2/singapore" element={<Singapore />} />
          <Route path="/f1/schedule/season-2/interlagos" element={<Interlagos />} />

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
