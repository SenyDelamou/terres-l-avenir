import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ResourcesPage from './pages/ResourcesPage';
import NewsPage from './pages/NewsPage';
import ContactPage from './pages/ContactPage';
import ForumPage from './pages/ForumPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import DashboardPage from './pages/DashboardPage';
import PublishProjectPage from './pages/PublishProjectPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ProfilePage from './pages/ProfilePage';
import FundingProjectsPage from './pages/FundingProjectsPage';
import MarketplacePage from './pages/MarketplacePage';
import SellProductPage from './pages/SellProductPage';
import PublishResourcePage from './pages/PublishResourcePage';
import './styles/App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route element={<Layout />}>
        <Route path="/accueil" element={<HomePage />} />
        <Route path="/a-propos" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/ressources" element={<ResourcesPage />} />
        <Route path="/actualites" element={<NewsPage />} />
        <Route path="/forum" element={<ForumPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/profil" element={<ProfilePage />} />
        <Route path="/projets-financement" element={<FundingProjectsPage />} />
        <Route path="/projet/:id" element={<ProjectDetailPage />} />
        <Route path="/publier-projet" element={<PublishProjectPage />} />
        <Route path="/marketplace" element={<MarketplacePage />} />
        <Route path="/vendre-produit" element={<SellProductPage />} />
        <Route path="/publier-ressource" element={<PublishResourcePage />} />
      </Route>
      <Route path="/connexion" element={<LoginPage />} />
      <Route path="/inscription" element={<RegisterPage />} />
      <Route path="/mot-de-passe-oublie" element={<ForgotPasswordPage />} />
      <Route path="*" element={<div style={{ color: 'white', padding: '50px' }}>404 - Page non trouvée (Route inconnue)</div>} />
    </Routes>
  );
}

export default App;
