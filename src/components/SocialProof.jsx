import { Quote } from 'lucide-react';

export const SocialProof = () => {
    const clients = [
        "Prolux", "MAC", "Vuny", "ONE Engenharia", "Ulbra", "VFOR"
    ];

    return (
        <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4">

                {/* Logos Grid */}
                <div className="mb-16 md:mb-20">
                    <p className="text-center text-gray-500 uppercase tracking-widest text-xs md:text-sm font-semibold mb-8">
                        Empresas que confiam projetos de instalações à DRCpro
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                        {clients.map((client) => (
                            <div key={client} className="text-xl md:text-2xl font-bold text-gray-400 font-heading hover:text-brand-blue transition-colors cursor-default select-none">
                                {client}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Testimonial */}
                <div className="max-w-4xl mx-auto text-center relative px-4">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 md:-translate-y-12 text-gray-200">
                        <Quote size={60} className="md:w-20 md:h-20" />
                    </div>

                    <blockquote className="relative z-10 pt-4">
                        <p className="text-xl md:text-4xl font-medium text-brand-dark italic mb-6 md:mb-8 leading-relaxed font-heading">
                            "Com a DRCpro, os projetos chegam no prazo e conseguimos prever as etapas sem surpresa. A organização técnica é o grande diferencial."
                        </p>
                        <footer className="text-gray-600">
                            <strong className="block text-brand-dark text-lg font-bold">Michel</strong>
                            <span className="text-sm uppercase tracking-wide">Diretor Técnico</span>
                        </footer>
                    </blockquote>
                </div>

            </div>
        </section>
    );
};
