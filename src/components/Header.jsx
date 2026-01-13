import { useState, useEffect } from 'react';
import { Button } from './ui/Button';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Serviços', href: '#services' },
        { name: 'Diferenciais', href: '#differentials' },
        { name: 'Clientes', href: '#clients' },
        { name: 'Contato', href: '#contact' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-dark/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                <a href="#" className="z-50">
                    <img
                        src="/logodrcpro-semfundo.png"
                        alt="DRC Pro"
                        className="h-16 md:h-24 w-auto object-contain -my-3 md:-my-6"
                    />
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-gray-300 hover:text-white transition-colors text-sm font-medium uppercase tracking-wide"
                        >
                            {link.name}
                        </a>
                    ))}
                    <Button variant="primary" className="!px-6 !py-2 !text-xs" onClick={() => window.open('https://wa.me/5511947167827', '_blank')}>
                        Solicitar Proposta
                    </Button>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden z-50 text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Nav */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ type: 'spring', duration: 0.3 }}
                            className="fixed inset-0 bg-brand-dark/98 backdrop-blur-xl z-50 flex flex-col items-center justify-center gap-8 md:hidden p-4"
                        >
                            <div className="absolute top-6 right-4">
                                {/* Close button area handled by the main toggle button z-index, but let's be explicit if needed or just trust the fixed header z-index */}
                            </div>

                            <div className="flex flex-col items-center gap-6 w-full px-8">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className="text-white text-3xl font-bold font-heading hover:text-brand-red transition-colors"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </a>
                                ))}
                                <div className="w-16 h-1 bg-brand-red/20 rounded-full my-4"></div>
                                <Button variant="primary" className="w-full max-w-xs text-lg py-4" onClick={() => { setIsMobileMenuOpen(false); window.open('https://wa.me/5511947167827', '_blank'); }}>
                                    Solicitar Proposta
                                </Button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
};
