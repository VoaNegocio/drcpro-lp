import { motion } from 'framer-motion';
import clsx from 'clsx';

export const Button = ({
    children,
    variant = 'primary',
    className,
    onClick,
    ...props
}) => {
    const baseStyles = "relative inline-flex items-center justify-center px-8 py-4 font-bold uppercase tracking-wider text-sm transition-all duration-200 transform-style-3d group overflow-hidden rounded-lg";

    const variants = {
        primary: "bg-red-600 text-white shadow-xl hover:-translate-y-1 hover:shadow-2xl border-b-4 border-red-800 active:border-b-0 active:translate-y-1",
        secondary: "bg-brand-blue text-white shadow-xl hover:-translate-y-1 hover:shadow-2xl border-b-4 border-blue-900 active:border-b-0 active:translate-y-1",
        outline: "bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-dark",
        gold: "bg-brand-gold text-brand-dark shadow-[0_8px_32px_rgba(204,161,71,0.4)] hover:-translate-y-1 border-b-4 border-[#b88a30] active:border-b-0 active:translate-y-1"
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={clsx(baseStyles, variants[variant], className)}
            onClick={onClick}
            {...props}
        >
            <span className="relative z-10 flex items-center gap-2">
                {children}
            </span>
            {variant !== 'outline' && (
                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            )}
        </motion.button>
    );
};
