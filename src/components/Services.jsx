import { useState, useRef, useEffect } from 'react';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { VideoModal } from './ui/VideoModal';
import { ImageModal } from './ui/ImageModal';
import { Zap, Layers, ClipboardCheck, ArrowRight, Play, Pause, Volume2, VolumeX, Maximize, ZoomIn } from 'lucide-react';

export const Services = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const [activeVideo, setActiveVideo] = useState(null);
    const [activeImage, setActiveImage] = useState(null);
    const scrollRef = useRef(null);

    const services = [
        {
            icon: Zap,
            title: "Projetos Hidráulicos",
            description: "Água fria/quente, esgoto, pluvial e gás — com detalhamento e compatibilização para obra.",
            image: "/imgs/imggrid1.png",
            video: "/videos/drc-video-card1_opt.mp4"
        },
        {
            icon: Layers,
            title: "Projetos Elétricos",
            description: "Iluminação, tomadas, cargas, quadros, circuitos, aterramento e SPDA — com documentação clara para execução.",
            image: "/imgs/imggrid2.png",
            video: "/videos/drc-video-card2_opt.mp4"
        },
        {
            icon: ClipboardCheck,
            title: "Compatibilização & Detecção de Conflitos (BIM)",
            description: "Antecipe interferências entre elétrica/hidráulica e arquitetura/estrutura antes de virar retrabalho no canteiro.",
            buttonText: "Veja como a DRCpro pode te ajudar",
            image: "/imgs/imgcard3.webp",
            video: "/videos/videogrid3-marco-pnc_opt.mp4"
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
                        Projetos de instalações para garantir segurança e previsibilidade na execução
                    </h2>
                </div>

                {/* Scrollable Container on Mobile, Grid on Desktop */}
                <div
                    ref={scrollRef}
                    onScroll={handleScroll}
                    className="flex md:grid md:grid-cols-3 gap-6 md:gap-10 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-8 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide"
                >
                    {services.map((service, index) => {
                        return (
                            <ServiceCard
                                key={index}
                                service={service}
                                index={index}
                                onPlayVideo={() => setActiveVideo(service.video)}
                                onViewImage={() => setActiveImage(service.image)}
                            />
                        );
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

            <VideoModal
                isOpen={!!activeVideo}
                onClose={() => setActiveVideo(null)}
                videoSrc={activeVideo}
            />

            <ImageModal
                isOpen={!!activeImage}
                onClose={() => setActiveImage(null)}
                imageSrc={activeImage}
            />
        </section>
    );
};

// Sub-component for individual card logic
const ServiceCard = ({ service, index, onPlayVideo, onViewImage }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => setIsFlipped(true);

    const handleUnflip = (e) => {
        e.stopPropagation();
        setIsFlipped(false);
    };

    return (
        <div className="min-w-[85vw] md:min-w-0 snap-center flex p-1 perspective-1000">
            <div className={`relative w-full transition-transform duration-[1500ms] transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>

                {/* Front Face */}
                <Card className="flex flex-col h-full hover:border-brand-blue/30 group p-6 md:p-8 w-full shadow-lg backface-hidden bg-white relative z-10 border-t-4 border-t-brand-blue transform-style-3d">
                    {/* Watermark Number */}
                    <div className={`absolute -right-4 -bottom-8 text-[120px] font-bold text-gray-100/50 leading-none select-none pointer-events-none font-heading z-0 translate-z-0 transition-opacity duration-300 ${isFlipped ? 'opacity-0' : 'opacity-100'}`}>
                        0{index + 1}
                    </div>

                    <div className="mb-6 p-4 rounded-full bg-blue-50 w-16 h-16 flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300 relative z-10 translate-z-30 drop-shadow-md">
                        <service.icon size={32} className="text-brand-blue group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-brand-dark mb-3 relative z-10 translate-z-30 drop-shadow-sm">{service.title}</h3>
                    <p className="text-gray-600 mb-8 flex-grow leading-relaxed relative z-10 translate-z-30">
                        {service.description}
                    </p>
                    <div className="relative z-10 translate-z-50 drop-shadow-xl">
                        <button
                            onClick={handleFlip}
                            className="w-full inline-flex items-center justify-center bg-brand-red text-white font-bold uppercase tracking-wider text-sm py-4 rounded-lg hover:bg-red-700 transition-all duration-300 cursor-pointer animate-pulse-scale shadow-lg shadow-brand-red/30"
                        >
                            {service.buttonText || "VER ESCOPO"} <Play size={14} className="ml-2 fill-current" />
                        </button>
                    </div>
                </Card>

                {/* Back Face (Image + Video Button) */}
                <div className="absolute inset-0 h-full w-full backface-hidden rotate-y-180 rounded-2xl overflow-hidden shadow-xl bg-gray-900 border border-brand-blue/20 group">
                    <div className="relative w-full h-full flex flex-col">

                        {/* Image Container */}
                        <div
                            className="relative flex-grow overflow-hidden cursor-zoom-in group/image"
                            onClick={(e) => {
                                e.stopPropagation();
                                onViewImage();
                            }}
                        >
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-full object-cover opacity-80 group-hover/image:opacity-100 transition-opacity duration-500 transform group-hover/image:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>

                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 pb-8">
                                <span className="bg-black/50 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-2 border border-white/20">
                                    <ZoomIn size={14} /> Ampliar Imagem
                                </span>
                            </div>

                            {/* Close Button */}
                            <button
                                onClick={handleUnflip}
                                className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white hover:bg-brand-red transition-colors border border-white/10"
                            >
                                ✕
                            </button>
                        </div>

                        {/* Bottom Actions */}
                        <div className="p-6 md:p-8 bg-brand-dark relative z-10 text-center border-t border-white/10">
                            <h4 className="text-lg font-bold text-white mb-4 line-clamp-1">{service.title}</h4>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onPlayVideo();
                                }}
                                className="w-full inline-flex items-center justify-center bg-transparent border-2 border-brand-red text-white hover:bg-brand-red font-bold uppercase tracking-wider text-sm py-3 rounded-lg transition-all duration-300 gap-2 group-hover:shadow-[0_0_20px_rgba(220,38,38,0.4)]"
                            >
                                <Play size={16} className="fill-current" /> VER VÍDEO COMPLETO
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
