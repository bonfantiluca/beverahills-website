import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HomePage from './components/pages/HomePage';
import StoriaPage from './components/pages/StoriaPage';
import VignetoPage from './components/pages/VignetoPage';
import ViniPage from './components/pages/ViniPage';
import ContactsPage from './components/pages/ContattiPage';
import TimelineScrollbar from "./components/TimelineScrollbar";

import './App.css';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <TimelineScrollbar />
      <NavBar />
      <main className="flex flex-grow items-center flex-col pb-10 px-4 my-24 sm:px-6 lg:px-32 max-w-screen-2xl mx-auto ">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/storia" element={<StoriaPage />} />
          <Route path="/vigneto" element={<VignetoPage />} />
          <Route path="/vini" element={<ViniPage />} />
          <Route path="/contatti" element={<ContactsPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
