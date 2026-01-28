import { motion } from 'framer-motion';

export const SocialProof = () => {
    const clients = [
        "MAC", "Vuny", "ONE Innovation", "VFOR",
        "Rocontec", "Vita Urban", "Aw Realty", "Setin",
        "Vita Con", "Tools", "MF7"
    ];

    return (
        <section className="py-12 md:py-16 bg-white border-b border-gray-100 overflow-hidden relative">
            <div className="container mx-auto px-4 relative z-10">
                <p className="text-center text-gray-400 font-bold tracking-[0.2em] text-xs mb-8 md:mb-12">
                    Empresas que confiam na <span className="text-brand-red">DRCpro</span>
                </p>

                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none"></div>

                {/* Marquee Container */}
                <div className="flex overflow-hidden mask-linear-gradient">
                    <motion.div
                        className="flex gap-12 md:gap-24 items-center whitespace-nowrap min-w-full"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            duration: 20,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                    >
                        {/* Render list twice to create seamless loop */}
                        {[...clients, ...clients].map((client, index) => (
                            <div
                                key={`${client}-${index}`}
                                className="group relative"
                            >
                                <span className="text-xl md:text-3xl font-bold text-gray-300 font-heading group-hover:text-brand-dark transition-colors duration-300 cursor-default select-none tracking-tight">
                                    {client}
                                </span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
