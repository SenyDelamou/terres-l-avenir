import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/ForgotPasswordPage.css';

function ForgotPasswordPage() {
    const [step, setStep] = useState('email'); // 'email', 'code', 'success'
    const [email, setEmail] = useState('');
    const [digits, setDigits] = useState(['', '', '', '', '', '']);
    const [isLoading, setIsLoading] = useState(false);
    const [timer, setTimer] = useState(0);
    const inputRefs = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];

    // Gérer le compte à rebours pour le renvoi du code
    useEffect(() => {
        let interval;
        if (timer > 0) {
            interval = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [timer]);

    const handleEmailSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulation d'envoi de code
        setTimeout(() => {
            setIsLoading(false);
            setStep('code');
            setTimer(30); // 30 secondes avant de pouvoir renvoyer
        }, 1200);
    };

    const handleDigitChange = (index, value) => {
        if (!/^\d*$/.test(value)) return; // Autoriser uniquement les chiffres

        const newDigits = [...digits];
        newDigits[index] = value.slice(-1); // Ne garder que le dernier caractère
        setDigits(newDigits);

        // Auto-focus prochain champ
        if (value && index < 5) {
            inputRefs[index + 1].current.focus();
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === 'Backspace' && !digits[index] && index > 0) {
            inputRefs[index - 1].current.focus();
        }
    };

    const handleVerifyCode = (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulation de vérification
        setTimeout(() => {
            setIsLoading(false);
            setStep('success');
        }, 1500);
    };

    const handleResendCode = () => {
        setTimer(30);
        // Simulation d'un nouvel envoi
        console.log("Code renvoyé à " + email);
    };

    const resetView = () => {
        setStep('email');
        setEmail('');
        setDigits(['', '', '', '', '', '']);
    };

    return (
        <div className="h-screen w-full flex items-center justify-center leaf-pattern overflow-hidden relative font-sans">
            {/* Arrière-plan décoratif */}
            <div className="absolute top-[-10%] left-[-5%] w-64 h-64 bg-agri-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
            <div className="absolute top-[-10%] right-[-5%] w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-[-20%] left-[20%] w-80 h-80 bg-agri-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

            <div className="w-full h-full flex flex-col md:flex-row relative z-10">

                {/* Section Visuelle (Gauche/Haut) */}
                <div className="w-full md:w-1/2 h-64 md:h-full relative overflow-hidden">
                    <img
                        src="/src/assets/auth_bg_new.png"
                        alt="AgriPlus Elite"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-agri-900/90 to-transparent flex flex-col justify-end p-8 md:p-16 text-white">
                        <div className="mb-0">
                            <i className="fas fa-tractor text-2xl md:text-4xl mb-3 md:mb-6 text-agri-300 floating-icon"></i>
                            <h3 className="text-2xl md:text-4xl font-extrabold leading-tight">L'Excellence <br />Agricole</h3>
                        </div>
                    </div>
                </div>

                {/* Section Formulaire (Droite) */}
                <div className="w-full md:w-1/2 h-full bg-white flex flex-col justify-center items-center p-8 md:p-24 relative overflow-y-auto">

                    <div className="absolute top-8 right-12 hidden md:flex items-center gap-6 text-sm font-semibold text-gray-500">
                        <span>Besoin d'aide ?</span>
                        <Link to="/contact" className="text-agri-600 hover:underline">Support Technique</Link>
                    </div>

                    <div className="w-full max-w-md relative">
                        {/* Logo */}
                        <div className="flex items-center gap-3 mb-12">
                            <div className="w-12 h-12 bg-agri-100 rounded-2xl flex items-center justify-center text-agri-700 shadow-sm border border-agri-200/50">
                                <i className="fas fa-leaf text-2xl"></i>
                            </div>
                            <span className="text-3xl font-black text-[#0f2b1d] tracking-tighter">AgriPlus</span>
                        </div>

                        {step === 'email' && (
                            <div className="animate-fade-in">
                                <div className="mb-10">
                                    <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-500 mb-6 shadow-sm">
                                        <i className="fas fa-key text-2xl"></i>
                                    </div>
                                    <h2 className="text-4xl font-black text-gray-900 mb-3 tracking-tight">Mot de passe oublié ?</h2>
                                    <p className="text-gray-500 text-base leading-relaxed">Entrez votre adresse e-mail. Nous allons vous envoyer un code de vérification à 6 chiffres.</p>
                                </div>

                                <form onSubmit={handleEmailSubmit} className="space-y-8">
                                    <div className="space-y-2">
                                        <label className="block text-sm font-bold text-gray-700 uppercase tracking-widest ml-1">Adresse E-mail</label>
                                        <div className="relative group">
                                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none group-focus-within:text-agri-600">
                                                <i className="fas fa-envelope text-gray-400"></i>
                                            </div>
                                            <input
                                                type="email"
                                                required
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className="block w-full pl-12 pr-4 py-4 border-2 border-gray-100 rounded-2xl text-gray-900 font-semibold focus:outline-none focus:ring-4 focus:ring-agri-600/5 focus:border-agri-600 transition-all duration-300 bg-gray-50/50"
                                                placeholder="jean.dupont@agriplus.com"
                                            />
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="w-full py-4 px-6 border border-transparent rounded-2xl shadow-xl text-lg font-bold text-white bg-[#1a472a] hover:bg-[#0f2b1d] transition-all transform hover:-translate-y-1 active:scale-95 duration-300 disabled:opacity-75"
                                    >
                                        {isLoading ? 'Envoi du code...' : 'Recevoir le Code'}
                                    </button>
                                </form>
                            </div>
                        )}

                        {step === 'code' && (
                            <div className="animate-fade-in text-center">
                                <div className="mb-10 text-left">
                                    <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-500 mb-6 shadow-sm">
                                        <i className="fas fa-shield-alt text-2xl"></i>
                                    </div>
                                    <h2 className="text-4xl font-black text-gray-900 mb-3 tracking-tight">Vérification</h2>
                                    <p className="text-gray-500 text-base leading-relaxed">
                                        Un code de sécurité a été envoyé à <span className="font-bold text-gray-800">{email}</span>.
                                    </p>
                                </div>

                                <form onSubmit={handleVerifyCode}>
                                    <div className="otp-container">
                                        {digits.map((digit, index) => (
                                            <input
                                                key={index}
                                                ref={inputRefs[index]}
                                                type="text"
                                                maxLength="1"
                                                value={digit}
                                                onChange={(e) => handleDigitChange(index, e.target.value)}
                                                onKeyDown={(e) => handleKeyDown(index, e)}
                                                className="otp-input"
                                            />
                                        ))}
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isLoading || digits.some(d => !d)}
                                        className="w-full py-4 px-6 border border-transparent rounded-2xl shadow-xl text-lg font-bold text-white bg-[#1a472a] hover:bg-[#0f2b1d] transition-all transform hover:-translate-y-1 active:scale-95 duration-300 disabled:opacity-50"
                                    >
                                        {isLoading ? 'Vérification...' : 'Vérifier le Code'}
                                    </button>
                                </form>

                                <div className="resend-timer">
                                    {timer > 0 ? (
                                        <span>Renvoyer le code dans <span className="text-agri-600">{timer}s</span></span>
                                    ) : (
                                        <button onClick={handleResendCode} className="btn-resend">
                                            Renvoyer le code
                                        </button>
                                    )}
                                </div>
                            </div>
                        )}

                        {step === 'success' && (
                            <div className="animate-fade-in text-center">
                                <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center text-green-600 mx-auto mb-8 shadow-inner">
                                    <i className="fas fa-check-circle text-4xl"></i>
                                </div>
                                <h2 className="text-3xl font-black text-gray-900 mb-4 tracking-tight">Vérification Réussie</h2>
                                <p className="text-gray-500 text-lg leading-relaxed mb-10">
                                    Votre identité a été confirmée. Vous pouvez maintenant définir un nouveau mot de passe.
                                </p>
                                <Link to="/connexion" className="w-full block py-4 px-8 bg-black text-white font-bold rounded-2xl hover:bg-gray-800 transition-all shadow-lg active:scale-95">
                                    Définir Nouveau Mot de Passe
                                </Link>
                                <button onClick={resetView} className="mt-4 text-sm font-bold text-gray-400 hover:text-gray-600 transition-colors uppercase tracking-widest">
                                    Recommencer
                                </button>
                            </div>
                        )}

                        <div className="mt-12 text-center pt-8 border-t border-gray-100">
                            <Link to="/connexion" className="text-sm font-bold text-gray-500 hover:text-agri-600 transition-all uppercase tracking-widest">
                                <i className="fas fa-arrow-left mr-2 opacity-50"></i> Retour à la Connexion
                            </Link>
                        </div>
                    </div>

                    <div className="absolute bottom-8 text-center text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em]">
                        &copy; 2025 AgriPlus &bull; Sécurité Bio-Numérique de Pointe
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgotPasswordPage;
