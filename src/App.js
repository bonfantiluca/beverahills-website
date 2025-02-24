import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HomePage from './components/pages/HomePage';
import StoriaPage from './components/pages/StoriaPage';
import VignetoPage from './components/pages/VignetoPage';
import ViniPage from './components/pages/ViniPage';
import ContactsPage from './components/pages/ContattiPage';
import './App.css';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
    <NavBar />
    <main className="flex items-center flex-col pb-10 px-4 py-8 sm:px-6 lg:px-16 max-w-screen-2xl mx-auto">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/storia" element={<StoriaPage />} />
        <Route path="/vigneto" element={<VignetoPage />} />
        <Route path="/vini" element={<ViniPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
    </main>
    <Footer />
    </>
  );
}

export default App;
