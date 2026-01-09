import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ChatModal from '../components/ChatModal';
import PageHeader from '../components/PageHeader';
import '../styles/MarketplacePage.css';

function MarketplacePage() {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [chatOpen, setChatOpen] = useState(false);
    const [selectedSeller, setSelectedSeller] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);

    // Vérifier le rôle de l'utilisateur
    const userDataStr = localStorage.getItem('userData');
    const userData = userDataStr ? JSON.parse(userDataStr) : null;
    const isFarmer = userData && userData.role === 'farmer';

    // Produits simulés (à remplacer par des données d'API)
    const products = [
        {
            id: 1,
            name: 'Tomates Bio',
            category: 'legumes',
            price: 35000,
            unit: 'kg',
            quantity: 50,
            location: 'Conakry, Guinée',
            seller: 'Amadou Diallo',
            image: 'https://images.unsplash.com/photo-1587049633562-ad3002f02501?q=80&w=600&auto=format&fit=crop',
            rating: 4.8,
            description: 'Tomates fraîches cultivées sans pesticides'
        },
        {
            id: 2,
            name: 'Mangues Juteuses',
            category: 'fruits',
            price: 28000,
            unit: 'kg',
            quantity: 100,
            location: 'Kindia, Guinée',
            seller: 'Fatou Sall',
            image: 'https://images.unsplash.com/photo-1591073113125-e46713c829ed?q=80&w=600&auto=format&fit=crop',
            rating: 5.0,
            description: 'Mangues sucrées de saison'
        },
        {
            id: 3,
            name: 'Riz Local',
            category: 'cereales',
            price: 12000,
            unit: 'kg',
            quantity: 500,
            location: 'Mamou, Guinée',
            seller: 'Moussa Ba',
            image: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?q=80&w=600&auto=format&fit=crop',
            rating: 4.5,
            description: 'Riz blanc de qualité supérieure'
        },
        {
            id: 4,
            name: 'Oignons Frais',
            category: 'legumes',
            price: 15000,
            unit: 'kg',
            quantity: 200,
            location: 'Kankan, Guinée',
            seller: 'Aïssatou Ndiaye',
            image: 'https://images.unsplash.com/photo-1585647346381-e2a5ad90b131?q=80&w=600&auto=format&fit=crop',
            rating: 4.2,
            description: 'Oignons rouges de la vallée'
        },
        {
            id: 5,
            name: 'Papayes',
            category: 'fruits',
            price: 20000,
            unit: 'pièce',
            quantity: 80,
            location: 'Labé, Guinée',
            seller: 'Ibrahima Cissé',
            image: 'https://images.unsplash.com/photo-1610450949065-1f2842406f03?w=600&h=450&fit=crop', // Professional papaya
            rating: 4.7,
            description: 'Papayes mûres et sucrées'
        },
        {
            id: 6,
            name: 'Mil Local',
            category: 'cereales',
            price: 0.90,
            unit: 'kg',
            quantity: 300,
            location: 'Nzérékoré, Guinée',
            seller: 'Khadija Sarr',
            image: 'https://images.unsplash.com/photo-1511516412963-801b050c92aa?w=600&h=450&fit=crop', // Better cereal texture
            rating: 4.6,
            description: 'Mil traditionnel de qualité'
        }
    ];

    const categories = [
        { value: 'all', label: 'Tous' },
        { value: 'legumes', label: '🥬 Légumes' },
        { value: 'fruits', label: '🍎 Fruits' },
        { value: 'cereales', label: '🌾 Céréales' }
    ];

    const filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.location.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const handleContactClick = (e, product) => {
        e.preventDefault();
        e.stopPropagation();
        setSelectedSeller(product.seller);
        setSelectedProduct(product.name);
        setChatOpen(true);
    };

    return (
        <div className="marketplace-page">
            <PageHeader
                title="Le Marché de la Qualité Supérieure"
                subtitle="Connectez-vous aux meilleurs producteurs locaux et accédez à des produits d'exception."
                icon="🌽"
                buttons={
                    isFarmer ? [
                        {
                            label: "Vendre un Produit",
                            icon: "📦",
                            variant: "primary",
                            onClick: () => navigate('/vendre-produit')
                        }
                    ] : []
                }
            />

            <section className="marketplace-search-section">
                <div className="container">
                    <div className="search-bar">
                        <span className="search-icon">🔍</span>
                        <input
                            type="text"
                            placeholder="Rechercher un produit ou une localisation..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>
            </section>

            <section className="marketplace-content">
                <div className="container">
                    <div className="marketplace-layout">
                        <aside className="marketplace-sidebar">
                            <div className="filter-section">
                                <h3>📂 Catégories</h3>
                                <div className="category-list">
                                    {categories.map(cat => (
                                        <button
                                            key={cat.value}
                                            className={`category-btn ${selectedCategory === cat.value ? 'active' : ''}`}
                                            onClick={() => setSelectedCategory(cat.value)}
                                        >
                                            {cat.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="info-box">
                                <h4>💡 Conseils</h4>
                                <ul>
                                    <li>Vérifiez la localisation du vendeur</li>
                                    <li>Comparez les prix</li>
                                    <li>Contactez le vendeur avant achat</li>
                                </ul>
                            </div>
                        </aside>

                        <main className="marketplace-main">
                            <div className="results-header">
                                <h2>
                                    {filteredProducts.length} Produit{filteredProducts.length > 1 ? 's' : ''} disponible{filteredProducts.length > 1 ? 's' : ''}
                                </h2>
                            </div>

                            <div className="products-grid">
                                {filteredProducts.map(product => (
                                    <div key={product.id} className="product-card">
                                        <Link to={`/produit/${product.id}`} className="product-card-link">
                                            <div className="product-image">
                                                <img src={product.image} alt={product.name} />
                                                <div className="product-badge">{product.quantity} {product.unit} disponibles</div>
                                            </div>

                                            <div className="product-info">
                                                <h3 className="product-name">{product.name}</h3>
                                                <p className="product-description">{product.description}</p>

                                                <div className="product-meta">
                                                    <div className="product-location">
                                                        <span>📍</span>
                                                        <span>{product.location}</span>
                                                    </div>
                                                    <div className="product-rating">
                                                        <span>⭐</span>
                                                        <span>{product.rating}</span>
                                                    </div>
                                                </div>

                                                <div className="product-seller">
                                                    <span className="seller-icon">👤</span>
                                                    <span>{product.seller}</span>
                                                </div>

                                                <div className="product-footer">
                                                    <div className="product-price">
                                                        <span className="price-value">{product.price.toLocaleString()} GNF</span>
                                                        <span className="price-unit">/ {product.unit}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                        <button
                                            className="btn-contact"
                                            onClick={(e) => handleContactClick(e, product)}
                                        >
                                            <span>💬</span>
                                            <span>Contacter</span>
                                        </button>
                                    </div>
                                ))}
                            </div>

                            {filteredProducts.length === 0 && (
                                <div className="no-results">
                                    <span className="no-results-icon">🔍</span>
                                    <h3>Aucun produit trouvé</h3>
                                    <p>Essayez de modifier vos critères de recherche</p>
                                </div>
                            )}
                        </main>
                    </div>
                </div>
            </section>

            <ChatModal
                isOpen={chatOpen}
                onClose={() => setChatOpen(false)}
                seller={selectedSeller}
                product={selectedProduct}
            />
        </div>
    );
}

export default MarketplacePage;
