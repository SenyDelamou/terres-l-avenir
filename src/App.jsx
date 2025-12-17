import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import HomePage from './pages/HomePage.jsx';
import DiagnosticPage from './pages/DiagnosticPage.jsx';
import FormationsPage from './pages/FormationsPage.jsx';
import CommunautePage from './pages/CommunautePage.jsx';
import MarchePage from './pages/MarchePage.jsx';
import InvestisseursPage from './pages/InvestisseursPage.jsx';
import RessourcesPage from './pages/RessourcesPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import ForgotPasswordPage from './pages/ForgotPasswordPage.jsx';
import ProgrammesPage from './pages/ProgrammesPage.jsx';
import VisionPage from './pages/VisionPage.jsx';
import ProjetsPage from './pages/ProjetsPage.jsx';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="diagnostic" element={<DiagnosticPage />} />
        <Route path="formations" element={<FormationsPage />} />
        <Route path="communaute" element={<CommunautePage />} />
        <Route path="marche" element={<MarchePage />} />
        <Route path="investisseurs" element={<InvestisseursPage />} />
        <Route path="ressources" element={<RessourcesPage />} />
        <Route path="programmes" element={<ProgrammesPage />} />
        <Route path="vision" element={<VisionPage />} />
        <Route path="projets" element={<ProjetsPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
      <Route path="connexion" element={<LoginPage />} />
      <Route path="inscription" element={<RegisterPage />} />
      <Route path="mot-de-passe-oublie" element={<ForgotPasswordPage />} />
    </Routes>
  );
}

export default App;
