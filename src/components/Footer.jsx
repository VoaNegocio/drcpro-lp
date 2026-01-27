export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white/90 backdrop-blur-md py-12 border-t border-gray-200 text-brand-dark">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                    <div className="text-center md:text-left">
                        <img
                            src="/logodrcpro-footer.png"
                            alt="DRCpro"
                            width="150"
                            height="150"
                            className="h-24 w-auto object-contain mx-auto md:mx-0 mb-4 mix-blend-multiply opacity-80"
                        />
                    </div>

                    <div className="text-gray-600 text-sm text-center md:text-right font-medium">
                        <p>&copy; {currentYear} DRCpro. Todos os direitos reservados.</p>
                        <p className="mt-1">
                            Desenvolvido com <span className="text-brand-red">♥</span> por Agência VOA
                        </p>
                    </div>

                </div>
            </div>
        </footer>
    );
};
