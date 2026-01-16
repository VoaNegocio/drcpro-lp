import { useState, useEffect } from 'react';
import { Button } from './ui/Button';


export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);


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
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-dark/95 backdrop-blur-md py-3 md:py-4 shadow-lg' : 'bg-transparent py-4 md:py-6'
                }`}
        >
            <div className="container mx-auto px-4 flex justify-center md:justify-between items-center">
                <a href="#" className="z-[60]">
                    <img
                        src="/logodrcpro-semfundo.png"
                        alt="DRC Pro"
                        width="500"
                        height="500"
                        className="h-20 md:h-24 w-auto object-contain -my-5 md:-my-6"
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


            </div>
        </header>
    );
};
