import { useState, useRef, useEffect } from 'react';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { Zap, Layers, ClipboardCheck, ArrowRight, Play } from 'lucide-react';

export const Services = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const scrollRef = useRef(null);

    const services = [
        {
            icon: Zap,
            title: "Projetos Complementares",
            description: "Elaboração técnica de instalações elétricas, hidráulicas, SPDA, gás e prevenção contra incêndio. Tudo 100% compatibilizado com a arquitetura.",
        },
        {
            icon: Layers,
            title: "Coordenação e Compatibilização",
            description: "Reduza conflitos entre disciplinas e elimine retrabalhos na obra. Entregas por fase com rastreabilidade total e integração BIM.",
        },
        {
            icon: ClipboardCheck,
            title: "Auditorias Técnicas de Ativos",
            description: "Inspeções detalhadas para retrofit, regularização e segurança. Ideal para shoppings, galpões logísticos e grandes edifícios.",
        }
    ];

    const handleScroll = () => {
        if (scrollRef.current) {
            const scrollPos = scrollRef.current.scrollLeft;
            const width = scrollRef.current.offsetWidth;
            // Simple logic assumes full width cards or similar spacing, dividing midpoint
            const index = Math.round(scrollPos / width);
            setActiveSlide(index);
        }
    };

    return (
        <section id="services" className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                    <span className="text-brand-red font-bold tracking-wider uppercase text-xs md:text-sm mb-2 block">O que fazemos</span>
                    <h2 className="text-2xl md:text-4xl font-bold text-brand-dark mb-6 font-heading leading-tight">
                        Soluções completas de engenharia para garantir a segurança e eficiência do seu projeto
                    </h2>
                </div>

                {/* Scrollable Container on Mobile, Grid on Desktop */}
                <div
                    ref={scrollRef}
                    onScroll={handleScroll}
                    className="flex md:grid md:grid-cols-3 gap-6 md:gap-10 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-8 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide"
                >
                    {services.map((service, index) => {
                        // Local state needs to be extracted to a sub-component or array in parent. 
                        // For simplicity in this file, let's use a sub-component locally or manage state array.
                        // Using a sub-component is cleaner for specific item state.
                        return <ServiceCard key={index} service={service} index={index} />;
                    })}
                </div>

                {/* Dots Indicators - Mobile Only */}
                <div className="flex md:hidden justify-center gap-2 mt-4">
                    {services.map((_, i) => (
                        <div
                            key={i}
                            className={`h-2 rounded-full transition-all duration-300 ${activeSlide === i ? 'bg-brand-red w-8' : 'bg-gray-300 w-2'}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

// Sub-component for individual card logic
const ServiceCard = ({ service, index }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const videoRef = useRef(null);

    useEffect(() => {
        if (isFlipped && videoRef.current) {
            // Small timeout to ensure transition doesn't glitch playback
            setTimeout(() => {
                videoRef.current.play().catch(e => console.log("Autoplay prevented:", e));
            }, 300);
        }
    }, [isFlipped]);

    const handleFlip = () => {
        setIsFlipped(true);
        // Optional: Auto-play video on flip if desired, but default autoplay attribute handles it usually
        // if (videoRef.current) videoRef.current.play();
    };

    const handleUnflip = (e) => {
        e.stopPropagation();
        setIsFlipped(false);
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0; // Reset video
        }
    };

    return (
        <div className="min-w-[85vw] md:min-w-0 snap-center flex p-1 perspective-1000">
            <div className={`relative w-full transition-transform duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>

                {/* Front Face */}
                <Card className="flex flex-col h-full hover:border-brand-blue/30 group p-6 md:p-8 w-full shadow-lg backface-hidden bg-white relative z-10 border-t-4 border-t-brand-blue overflow-hidden">
                    {/* Watermark Number */}
                    <div className="absolute -right-4 -bottom-8 text-[120px] font-bold text-gray-100/50 leading-none select-none pointer-events-none font-heading z-0">
                        0{index + 1}
                    </div>

                    <div className="mb-6 p-4 rounded-full bg-blue-50 w-16 h-16 flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300 relative z-10">
                        <service.icon size={32} className="text-brand-blue group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-brand-dark mb-3 relative z-10">{service.title}</h3>
                    <p className="text-gray-600 mb-8 flex-grow leading-relaxed relative z-10">
                        {service.description}
                    </p>
                    <div className="relative z-10">
                        <button
                            onClick={handleFlip}
                            className="w-full inline-flex items-center justify-center bg-brand-red text-white font-bold uppercase tracking-wider text-sm py-4 rounded-lg hover:bg-red-700 transition-all duration-300 cursor-pointer animate-pulse-scale shadow-lg shadow-brand-red/30"
                        >
                            Ver em ação <Play size={14} className="ml-2 fill-current" />
                        </button>
                    </div>
                </Card>

                {/* Back Face (Video) */}
                <div className="absolute inset-0 h-full w-full backface-hidden rotate-y-180 rounded-2xl overflow-hidden shadow-xl bg-black border border-brand-blue/20">
                    <div className="relative w-full h-full">
                        {/* Video Element */}
                        <video
                            ref={videoRef}
                            className="w-full h-full object-cover"
                            controls={true} // Enabled controls
                            playsInline
                            loop
                            // Removed autoPlay attribute to rely on useEffect for consistency
                            muted={false} // Unmuted so user can hear if they want, but autoplay might block. Let's keep it safe. 
                        // Actually user likely wants sound if they have controls. Let's try enabling sound.
                        // Note: Browsers block unmuted autoplay. We'll try to play, if it fails, controls are there.
                        >
                            <source src={`/videos/video${index + 1}.mp4`} type="video/mp4" />
                            Seu navegador não suporta vídeos.
                        </video>

                        {/* Close Button */}
                        <button
                            onClick={handleUnflip}
                            className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-brand-red transition-colors"
                        >
                            ✕
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
