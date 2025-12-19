import { useState, useEffect } from 'react';
import '../styles/PageHeader.css';

function PageHeader({ title, subtitle, description, buttons, icon, images }) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const defaultImages = [
        'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=2000&auto=format&fit=crop'
    ];

    const sliderImages = images && images.length > 0 ? images : defaultImages;

    useEffect(() => {
        if (sliderImages.length <= 1) return;

        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [sliderImages.length]);

    return (
        <section className="page-header">
            <div className="page-header-slider">
                {sliderImages.map((img, index) => (
                    <div
                        key={index}
                        className={`page-header-slide ${index === currentSlide ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${img})` }}
                    ></div>
                ))}
            </div>
            <div className="page-header-overlay"></div>
            <div className="container">
                <div className="page-header-content">
                    {icon && <div className="page-header-icon">{icon}</div>}
                    <h1 className="page-header-title">{title}</h1>
                    {subtitle && <p className="page-header-subtitle">{subtitle}</p>}
                    {description && <p className="page-header-description">{description}</p>}
                    {buttons && (
                        <div className="page-header-buttons">
                            {buttons.map((button, index) => (
                                <button
                                    key={index}
                                    onClick={button.onClick}
                                    className={`page-header-btn ${button.variant || 'primary'}`}
                                >
                                    {button.icon && <span>{button.icon}</span>}
                                    <span>{button.label}</span>
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default PageHeader;
