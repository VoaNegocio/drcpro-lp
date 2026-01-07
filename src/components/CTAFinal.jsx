import { Button } from './ui/Button';
import { Mail, Phone, MapPin } from 'lucide-react';
import teamMeetingImg from '../assets/team-meeting.png';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

export const CTAFinal = () => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.3 });

    return (
        <section id="contact" className="relative py-16 md:py-24 bg-brand-dark overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="bg-gradient-to-br from-brand-blue/10 to-transparent border border-white/10 rounded-2xl p-6 md:p-16 flex flex-col md:flex-row gap-12 items-center">

                    {/* Content */}
                    <div className="flex-1 space-y-6 md:space-y-8 order-2 md:order-1">
                        <h2 className="text-2xl md:text-5xl font-bold text-white leading-tight font-heading">
                            Vamos conversar sobre o <span className="text-brand-red">seu próximo projeto?</span>
                        </h2>

                        <p className="text-gray-300 text-base md:text-lg">
                            Receba uma proposta técnica personalizada e veja como a DRC Pro pode otimizar sua entrega com método e rastreabilidade.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Button variant="primary" className="shadow-brand-red/20 shadow-lg text-base md:text-lg px-8 py-5 w-full sm:w-auto">
                                Solicitar Proposta Agora
                            </Button>
                        </div>

                        <div className="flex flex-col gap-4 text-gray-400 pt-8 border-t border-white/10">
                            <div className="flex items-center gap-3">
                                <Phone className="text-brand-cyan" size={20} />
                                <span>+55 (11) 99999-9999</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="text-brand-cyan" size={20} />
                                <span>comercial@drcpro.com.br</span>
                            </div>
                        </div>
                    </div>

                    {/* Visual Side */}
                    <div className="flex-1 w-full max-w-md md:max-w-none relative order-1 md:order-2">
                        <div
                            ref={containerRef}
                            className={`relative rounded-lg overflow-hidden border-4 border-white/5 shadow-2xl transform transition-all duration-1000 ${isInView
                                ? 'skew-y-0 opacity-100 translate-y-0'
                                : 'skew-y-2 opacity-0 translate-y-12'
                                }`}
                        >
                            <img
                                src={teamMeetingImg}
                                alt="Equipe DRC Pro em reunião"
                                className={`w-full h-full object-cover transition-all duration-1000 hover:scale-105 ${isInView ? 'grayscale-0' : 'grayscale'
                                    }`}
                            />
                            <div className="absolute inset-0 bg-brand-blue/20 mix-blend-overlay pointer-events-none"></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
