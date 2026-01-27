import { CheckCircle2, CloudLightning, Users, FileBarChart2 } from 'lucide-react';
import clsx from 'clsx';

export const Differentials = () => {
    const differentials = [
        {
            icon: CheckCircle2,
            title: "Equipe técnica multidisciplinar",
            desc: "100% dedicada a projetos."
        },
        {
            icon: Users,
            title: "Integração total",
            desc: "Entre projeto, coordenação e qualidade."
        },
        {
            icon: CloudLightning,
            title: "Gestão ativa de cronograma",
            desc: "E entregas via ferramentas digitais."
        },
        {
            icon: FileBarChart2,
            title: "Portfólio",
            desc: "Com empreendimentos comerciais e públicos."
        }
    ];

    return (
        <section id="differentials" className="py-20 md:py-24 bg-brand-dark relative overflow-hidden">
            {/* Background Texture Re-use */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <img src="/hero-bg.webp" alt="" className="w-full h-full object-cover" width="1920" height="1080" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Left Content */}
                    <div className="text-white order-1 lg:order-1">
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-9 leading-tight font-heading">
                            Por que escolhem a <span className="text-brand-red">DRCpro</span> para projetos de sistemas prediais?
                        </h2>
                        <p className="text-gray-400 text-base md:text-lg mb-5 max-w-md">
                            Não entregamos desenhos. Entregamos o projeto para a sua obra seguir sem improvisos - com método e qualidade.
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


                </div>
            </div>
        </section>
    );
};
