import { Homepage } from "./components/Homepage/Homepage";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { MainContent01 } from "./components/Desafio01 - Blog/MainContent01/MainContent01";
import { MainContent02 } from "./components/Desafio02 - JordanShoes/MainContent02/MainContent02";
import { MainContent03 } from "./components/Desafio03 - OnePage/MainContent03/MainContent03";
import { MainContent04 } from "./components/Desafio04 - Login/MainContent04/MainContent04";
import { MainContent05 } from "./components/Desafio05 - StudioGhibli/MainContent05/MainContent05";
import { MainContent06 } from "./components/Desafio06 - Loki/MainContent06/MainContent06";
import { MainContent07 } from "./components/Desafio07 - Valorant/MainContent07/MainContent07";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/desafio-01-blog" element={<MainContent01 />} />
          <Route path="/desafio-02-jordanshoes" element={<MainContent02 />} />
          <Route path="/desafio-03-onepage" element={<MainContent03 />} />
          <Route path="/desafio-04-login" element={<MainContent04 />} />
          <Route path="/desafio-05-studioghibli" element={<MainContent05 />} />
          <Route path="/desafio-06-loki" element={<MainContent06 />} />
          <Route path="/desafio-07-valorant" element={<MainContent07 />} />
        </Routes>
        <GlobalStyle />
      </Router>
    </>
  );
}

export default App;
