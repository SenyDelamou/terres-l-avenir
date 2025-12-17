import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import TechniquesPage from './pages/TechniquesPage';
import NewsPage from './pages/NewsPage';
import ContactPage from './pages/ContactPage';
import ForumPage from './pages/ForumPage';
import AIPage from './pages/AIPage';
import LoginPage from './pages/LoginPage';
import './styles/App.css';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/a-propos" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/techniques" element={<TechniquesPage />} />
        <Route path="/actualites" element={<NewsPage />} />
        <Route path="/forum" element={<ForumPage />} />
        <Route path="/assistant-ia" element={<AIPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
      <Route path="/connexion" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
