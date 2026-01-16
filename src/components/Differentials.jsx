import { CheckCircle2, CloudLightning, Users, FileBarChart2 } from 'lucide-react';
import clsx from 'clsx';
import bgPattern from '../assets/hero-bg.png'; // Reusing blueprint texture for subtle background

export const Differentials = () => {
    const differentials = [
        {
            icon: CheckCircle2,
            title: "Entrega técnica rastreável",
            desc: "Versões, revisões e organização do pacote."
        },
        {
            icon: Users,
            title: "Compatibilização antes da obra",
            desc: "Menos conflito, menos retrabalho."
        },
        {
            icon: CloudLightning,
            title: "Setor de qualidade interno",
            desc: "Revisão técnica por especialistas."
        },
        {
            icon: FileBarChart2,
            title: "Documentação clara para execução",
            desc: "Equipe entende sem “depender do autor”."
        }
    ];

    return (
        <section id="differentials" className="py-20 md:py-24 bg-brand-dark relative overflow-hidden">
            {/* Background Texture Re-use */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <img src={bgPattern} alt="" className="w-full h-full object-cover" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Left Content */}
                    <div className="text-white order-1 lg:order-1">
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-9 leading-tight font-heading">
                            Por que escolhem a <span className="text-brand-red">DRC Pro</span> para projetos elétricos e hidráulicos?
                        </h2>
                        <p className="text-gray-400 text-base md:text-lg mb-5 max-w-md">
                            Não entregamos “desenho”. Entregamos projeto executivo para a obra seguir sem improviso — com método e qualidade.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
                            {differentials.map((item, i) => (
                                <div key={i} className="flex gap-4 items-start">
                                    <div className="mt-1 min-w-[24px]">
                                        <item.icon className="text-brand-cyan" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white text-base">{item.title}</h4>
                                        <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Visual - Abstract Representation of "Traceability" */}
                    <div className="order-2 lg:order-2 relative h-full min-h-[300px] md:min-h-[400px] border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm p-6 md:p-8 flex flex-col justify-center mb-8 lg:mb-0">
                        {/* Visual elements simulating a timeline or process */}
                        <div className="space-y-8 relative">
                            {/* Connector Line */}
                            <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-brand-blue to-transparent md:block hidden opacity-30"></div>

                            {[
                                { num: '01', label: 'Análise de riscos e interferências', width: '40%' },
                                { num: '02', label: 'Compatibilização BIM das instalações', width: '70%' },
                                { num: '03', label: 'Liberação executiva para obra', width: '100%' }
                            ].map((step) => (
                                <div key={step.num} className="flex items-center gap-4 md:gap-6 relative">
                                    <div className="w-12 h-12 rounded-full bg-brand-blue/20 border border-brand-blue/50 flex items-center justify-center text-brand-cyan font-bold shrink-0 z-10 backdrop-blur-md">
                                        {step.num}
                                    </div>
                                    <div className="flex-grow">
                                        <h5 className="text-white font-medium text-sm md:text-base mb-2">{step.label}</h5>
                                        <div className="h-3 md:h-4 bg-white/5 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-brand-blue/60"
                                                style={{ width: step.width }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <div className="mt-8 p-6 bg-brand-red/90 rounded-xl text-white text-center transform rotate-1 hover:rotate-0 transition-transform cursor-default">
                                <p className="font-bold text-xl">Menos retrabalho em obra</p>
                                <p className="text-xs opacity-80 uppercase tracking-widest mt-1">Meta: compatibilização antes do canteiro</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
