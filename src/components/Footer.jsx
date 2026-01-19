export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black py-12 border-t border-white/10">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                    <div className="text-center md:text-left">
                        <img
                            src="/logodrcpro-footer.png"
                            alt="DRC Pro"
                            width="150"
                            height="150"
                            className="h-12 w-auto object-contain mx-auto md:mx-0 mb-2"
                        />
                        <p className="text-gray-500 text-sm mt-2">
                            Engenharia Consultiva & Projetos Complementares
                        </p>
                    </div>

                    <div className="text-gray-500 text-sm text-center md:text-right">
                        <p>&copy; {currentYear} DRC Pro. Todos os direitos reservados.</p>
                        <p className="mt-1">
                            Desenvolvido com <span className="text-red-500">♥</span> por Agência VOA
                        </p>
                    </div>

                </div>
            </div>
        </footer>
    );
};
