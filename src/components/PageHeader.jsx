import '../styles/PageHeader.css';

function PageHeader({ title, subtitle, description, buttons, icon }) {
    return (
        <section className="page-header">
            <div className="page-header-background"></div>
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
