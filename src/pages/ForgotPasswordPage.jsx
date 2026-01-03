import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/ForgotPasswordPage.css';

function ForgotPasswordPage() {
    const [email, setEmail] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulation d'envoi
        setTimeout(() => {
            setIsLoading(false);
            setIsSuccess(true);
        }, 1500);
    };

    const resetView = () => {
        setIsSuccess(false);
        setEmail('');
    };

    return (
        <div className="h-screen w-full flex items-center justify-center leaf-pattern overflow-hidden relative font-sans">
            {/* Cercles décoratifs d'arrière-plan */}
            <div className="absolute top-[-10%] left-[-5%] w-64 h-64 bg-agri-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
            <div className="absolute top-[-10%] right-[-5%] w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-[-20%] left-[20%] w-80 h-80 bg-agri-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

            {/* Layout Principal Fullscreen Split */}
            <div className="w-full h-full flex flex-col md:flex-row relative z-10">

                {/* Section Image (Gauche) - 50% width, 100% height */}
                <div className="hidden md:block w-1/2 h-full relative">
                    <img
                        src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1740&auto=format&fit=crop"
                        alt="Champ agricole au soleil"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-agri-900/90 to-transparent flex flex-col justify-end p-16 text-white">
                        <div className="mb-4">
                            <i className="fas fa-tractor text-4xl mb-6 text-agri-300 floating-icon"></i>
                            <h3 className="text-4xl font-extrabold leading-tight">Protocole de <br />Sécurisation</h3>
                            <p className="text-agri-100 mt-4 text-lg opacity-90 max-w-md">Récupérez vos accès à l'écosystème AgriPlus en toute sérénité grâce à notre chiffrement de bout en bout.</p>
                        </div>
                    </div>
                </div>

                {/* Section Formulaire (Droite) - 50% width, 100% height */}
                <div className="w-full md:w-1/2 h-full bg-white flex flex-col justify-center items-center p-8 md:p-24 relative overflow-y-auto">

                    {/* Navigation en haut à droite comme sur la page Login */}
                    <div className="absolute top-8 right-12 hidden md:flex items-center gap-6 text-sm font-semibold text-gray-500">
                        <span>Besoin d'aide ?</span>
                        <Link to="/contact" className="text-agri-600 hover:underline">Support</Link>
                    </div>

                    <div className="w-full max-w-md relative">
                        {/* Logo */}
                        <div className="flex items-center gap-3 mb-12">
                            <div className="w-12 h-12 bg-agri-100 rounded-2xl flex items-center justify-center text-agri-700 shadow-sm border border-agri-200/50">
                                <i className="fas fa-leaf text-2xl"></i>
                            </div>
                            <span className="text-3xl font-black text-[#0f2b1d] tracking-tighter">AgriPlus</span>
                        </div>

                        {!isSuccess ? (
                            <div id="form-container" className="animate-fade-in">
                                <div className="mb-10">
                                    <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-500 mb-6 shadow-sm">
                                        <i className="fas fa-shield-alt text-2xl"></i>
                                    </div>
                                    <h2 className="text-4xl font-black text-gray-900 mb-3 tracking-tight">Accès Perdu ?</h2>
                                    <p className="text-gray-500 text-base leading-relaxed">Pas de panique. Saisissez votre identifiant professionnel pour réinitialiser vos paramètres.</p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-8">
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="block text-sm font-bold text-gray-700 uppercase tracking-widest ml-1">Adresse Professionnelle</label>
                                        <div className="relative group">
                                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors group-focus-within:text-agri-600">
                                                <i className="fas fa-envelope text-gray-400"></i>
                                            </div>
                                            <input
                                                type="email"
                                                id="email"
                                                required
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className="block w-full pl-12 pr-4 py-4 border-2 border-gray-100 rounded-2xl text-gray-900 font-semibold placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-agri-600/5 focus:border-agri-600 transition-all duration-300 bg-gray-50/50 hover:bg-white"
                                                placeholder="nom@agriplus.com"
                                            />
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className={`w-full flex justify-center items-center py-4 px-6 border border-transparent rounded-2xl shadow-xl text-lg font-bold text-white bg-[#1a472a] hover:bg-[#0f2b1d] focus:outline-none focus:ring-4 focus:ring-agri-600/20 transition-all transform hover:-translate-y-1 active:scale-95 duration-300 ${isLoading ? 'opacity-75 cursor-wait' : ''}`}
                                    >
                                        {isLoading ? (
                                            <><i className="fas fa-circle-notch fa-spin mr-3"></i> Synchronisation...</>
                                        ) : (
                                            <>Rétablir l'Accès <i className="fas fa-chevron-right ml-3 text-sm opacity-50"></i></>
                                        )}
                                    </button>
                                </form>

                                <div className="mt-12 text-center pt-8 border-t border-gray-100">
                                    <p className="text-sm font-semibold text-gray-500">
                                        Une réminiscence ?{' '}
                                        <Link to="/connexion" className="text-agri-600 hover:text-agri-800 transition-colors font-black uppercase text-xs tracking-widest ml-1 border-b-2 border-agri-600/20 hover:border-agri-800">
                                            Se Connecter
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        ) : (
                            /* État de succès */
                            <div id="success-message" className="text-center py-8 animate-fade-in w-full max-w-sm mx-auto">
                                <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center text-green-600 mx-auto mb-8 shadow-inner">
                                    <i className="fas fa-paper-plane text-4xl"></i>
                                </div>
                                <h2 className="text-3xl font-black text-gray-900 mb-4 tracking-tight">Signal Envoyé</h2>
                                <p className="text-gray-500 text-lg leading-relaxed mb-10">
                                    Consultez votre messagerie <span className="font-bold text-[#1a472a]">{email}</span> pour finaliser la procédure.
                                </p>

                                <div className="space-y-4">
                                    <button
                                        onClick={resetView}
                                        className="w-full py-4 text-agri-700 font-bold hover:bg-agri-50 rounded-2xl transition-all flex items-center justify-center gap-3"
                                    >
                                        <i className="fas fa-redo-alt text-sm"></i> Renvoyer le lien
                                    </button>

                                    <Link to="/connexion" className="w-full flex items-center justify-center gap-2 py-4 px-8 bg-gray-900 text-white font-bold rounded-2xl hover:bg-black transition-all shadow-lg active:scale-95">
                                        <i className="fas fa-home text-sm opacity-50"></i> Retour au Portail
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Footer discret */}
                    <div className="absolute bottom-8 text-center text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em]">
                        &copy; 2025 AgriPlus Intelligence &bull; Sécurité Bio-Numérique
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgotPasswordPage;
