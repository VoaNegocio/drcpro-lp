import { Button } from './ui/Button';
import { motion } from 'framer-motion';
import { Ruler, Building2, HardHat, FileCheck } from 'lucide-react';

export const Hero = () => {
    const stats = [
        { icon: Ruler, value: '+3M m²', label: 'Projetados' },
        { icon: Building2, value: '+30', label: 'Tipos de Projetos' },
        { icon: HardHat, value: '+500', label: 'Clientes Atendidos' },
        { icon: FileCheck, value: '6', label: 'Coord. Dedicados' },
    ];

    return (
        <section className="relative min-h-[600px] md:min-h-screen flex flex-col md:justify-center pt-24 md:pt-20 pb-0 md:pb-28 overflow-hidden bg-brand-dark">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <picture>
                    <source media="(max-width: 768px)" srcSet="/hero-bg-mobile.webp" />
                    <img
                        src="/hero-bg.webp"
                        alt=""
                        width="1920"
                        height="1080"
                        fetchpriority="high"
                        className="w-full h-full object-cover opacity-20"
                    />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/50 to-brand-dark pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-brand-dark/20 to-brand-dark/80 pointer-events-none" />
            </div>

            <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-2xl"
                >
                    <div className="inline-block px-4 py-1 mb-6 border border-brand-blue/30 rounded-full bg-brand-blue/10 backdrop-blur-sm">
                        <span className="text-brand-cyan text-sm font-semibold tracking-wide uppercase">
                            PROJETOS DE INSTALAÇÕES | ELÉTRICAS E HIDRÁULICAS
                        </span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.2] mb-6 font-heading">
                        Projetos elétricos e hidráulicos para evitar <span className="text-red-500">retrabalho e atraso</span> na obra.
                    </h1>

                    {/* Mobile Hero Image */}
                    <div className="block md:hidden mb-6 w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                        <img
                            src="/hero-mobile-bim.webp"
                            alt="Tablet mostrando projeto BIM 3D de instalações"
                            width="800"
                            height="600"
                            className="w-full h-auto object-cover"
                            loading="eager"
                            fetchpriority="high"
                        />
                    </div>

                    <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-4 leading-relaxed max-w-xl">
                        Elaboração técnica com alto nível de detalhamento, compatibilização e rastreabilidade — entrega pronta para execução.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-6">
                        <Button variant="primary" className="w-full sm:w-auto text-base py-4 sm:py-3" onClick={() => window.open('https://wa.me/5511947167827', '_blank')}>
                            SOLICITAR PROPOSTA
                        </Button>
                    </div>

                    <p className="text-sm sm:text-base text-gray-400 mb-8 leading-relaxed max-w-xl font-medium">
                        Não executamos obra. Nosso foco é o projeto certo, antes do problema aparecer.
                    </p>
                </motion.div>

                {/* Abstract/Technical Visual or Empty for now to let text breathe, 
            or maybe moving stats here if design demands. 
            For now, keeping stats at bottom full width as per request 'Cards com números de autoridade em linha' */}
            </div>

            <div className="relative md:absolute md:bottom-0 left-0 right-0 border-t border-white/10 bg-brand-dark/80 backdrop-blur-md z-20 mt-8 md:mt-0 overflow-hidden">
                <div className="py-2 md:py-4 flex relative">
                    <div className="absolute left-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-r from-brand-dark to-transparent z-10"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-l from-brand-dark to-transparent z-10"></div>

                    <motion.div
                        className="flex gap-8 md:gap-16 px-4 whitespace-nowrap"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            duration: 30,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                    >
                        {/* Original Items */}
                        {[...stats, ...stats].map((stat, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center justify-center text-center group min-w-[80px] md:min-w-[100px]"
                            >
                                <div className="mb-1 md:mb-2 p-1.5 md:p-2 rounded-full bg-white/5 group-hover:bg-brand-red/20 transition-colors duration-300 flex-shrink-0">
                                    <stat.icon className="w-4 h-4 md:w-5 md:h-5 text-brand-cyan group-hover:text-brand-red transition-colors" />
                                </div>
                                <h3 className="text-base md:text-xl font-bold text-white mb-0.5 md:mb-1">{stat.value}</h3>
                                <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-widest leading-none">{stat.label}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
