import { useLocation } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HomePage from './components/pages/HomePage';
import StoriaPage from './components/pages/StoriaPage';
import VignetoPage from './components/pages/VignetoPage';
import ViniPage from './components/pages/ViniPage';
import ContactsPage from './components/pages/ContattiPage';
import TimelineScrollbar from "./components/TimelineScrollbar";
import EtichettaAlimentareGermoglio from "./components/etichetta-alimentare/2025/etichetta-germoglio";
import EtichettaAlimentareBiunt from './components/etichetta-alimentare/2025/etichetta-biunt';
import { Helmet } from "react-helmet";

import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  const location = useLocation();

  // Percorsi in cui la navbar non deve essere mostrata
  const hideNavBarRoutes = ["/etichetta-alimentare/2025/germoglio","/etichetta-alimentare/2025/il-biunt"];
  const shouldHideNavBar = hideNavBarRoutes.includes(location.pathname);

  return (
    <>
      <Helmet>
        <title>Beverahills - Vini e Vigneto della Brianza</title>
        <meta name="description" content="Scopri Beverahills, il vigneto della Brianza che produce vini unici. Ogni dettaglio conta, ogni sorso racconta." />
        <meta name="keywords" content="vino, Brianza, vigneto, degustazione, enologia, terre lariane" />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <TimelineScrollbar />
        {!shouldHideNavBar && <NavBar />}
        <main className={`flex flex-grow items-center flex-col pb-10 px-4 ${shouldHideNavBar ? 'my-8' : 'my-24'} sm:px-6 lg:px-32 max-w-screen-2xl mx-auto`}>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/storia" element={<StoriaPage />} />
            <Route path="/vigneto" element={<VignetoPage />} />
            <Route path="/vini" element={<ViniPage />} />
            <Route path="/contatti" element={<ContactsPage />} />
            <Route path="/etichetta-alimentare/2025/germoglio" element={<EtichettaAlimentareGermoglio />} />
            <Route path="/etichetta-alimentare/2025/il-biunt" element={<EtichettaAlimentareBiunt />} />

          </Routes>
        </main>
        {!shouldHideNavBar &&<Footer />}
      </div>
    </>
  );
}

export default App;
