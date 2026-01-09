import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import '../styles/Footer-premium.css';
import logoImg from '../assets/logo.png';

function Footer() {
    return (
        <footer className="footer-premium">
            {/* Decorative Top Border */}
            <div className="footer-border-gradient"></div>

            <div className="container">
                <div className="footer-grid">

                    {/* Brand Column */}
                    <div className="footer-col brand-col">
                        <div className="footer-logo">
                            <div className="logo-icon-glass">
                                <img src={logoImg} alt="AgriPlus" />
                            </div>
                            <div className="logo-texts">
                                <span className="logo-title">AgriPulse</span>
                                <span className="logo-subtitle">Innovation Agricole</span>
                            </div>
                        </div>
                        <p className="footer-desc">
                            La première plateforme intégrée pour transformer l'agriculture en Afrique de l'Ouest. Technologie, financement et expertise réunis.
                        </p>
                        <div className="footer-socials">
                            <a href="#" className="social-glass" aria-label="Facebook"><Facebook size={20} /></a>
                            <a href="#" className="social-glass" aria-label="Twitter"><Twitter size={20} /></a>
                            <a href="#" className="social-glass" aria-label="LinkedIn"><Linkedin size={20} /></a>
                            <a href="#" className="social-glass" aria-label="Instagram"><Instagram size={20} /></a>
                        </div>
                    </div>

                    {/* Navigation Column */}
                    <div className="footer-col">
                        <h4>Navigation</h4>
                        <ul className="footer-links">
                            <li><Link to="/">Accueil</Link></li>
                            <li><Link to="/a-propos">Notre Vision</Link></li>
                            <li><Link to="/projets-financement">Projets</Link></li>
                            <li><Link to="/marketplace">Marketplace</Link></li>
                            <li><Link to="/actualites">Actualités</Link></li>
                        </ul>
                    </div>

                    {/* Services Column */}
                    <div className="footer-col">
                        <h4>Services</h4>
                        <ul className="footer-links">
                            <li><Link to="/services">Diagnostic IA</Link></li>
                            <li><Link to="/services">Formation Expert</Link></li>
                            <li><Link to="/services">Irrigation Smart</Link></li>
                            <li><Link to="/services">Certification Bio</Link></li>
                            <li><Link to="/ressources">Centre de Savoirs</Link></li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div className="footer-col contact-col">
                        <h4>Contact</h4>
                        <ul className="contact-list">
                            <li>
                                <MapPin size={18} className="c-icon" />
                                <span>Zone Industrielle, Mamou<br />République de Guinée</span>
                            </li>
                            <li>
                                <Phone size={18} className="c-icon" />
                                <span>+224 623 59 01 51</span>
                            </li>
                            <li>
                                <Mail size={18} className="c-icon" />
                                <span>contact@agripulse.com</span>
                            </li>
                            <li>
                                <Clock size={18} className="c-icon" />
                                <span>Lun - Ven: 8h00 - 18h00</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Newsletter Strip */}
                <div className="footer-newsletter-strip">
                    <div className="fn-content">
                        <h3>Newsletter Hebdomadaire</h3>
                        <p>Recevez nos meilleures astuces directement par mail.</p>
                    </div>
                    <form className="fn-form">
                        <input type="email" placeholder="Votre email pro..." />
                        <button type="submit">
                            Go <ArrowRight size={16} />
                        </button>
                    </form>
                </div>

                {/* Bottom Bar */}
                <div className="footer-bottom">
                    <div className="copyright">
                        &copy; {new Date().getFullYear()} AgriPulse Inc. Tous droits réservés.
                    </div>
                    <div className="legal-links">
                        <Link to="/mentions-legales">Mentions Légales</Link>
                        <Link to="/privacy">Confidentialité</Link>
                        <Link to="/terms">CGU</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
