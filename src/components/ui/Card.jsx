import clsx from 'clsx';
import { motion } from 'framer-motion';

export const Card = ({ children, className, hover = true }) => {
    return (
        <motion.div
            whileHover={hover ? { y: -5 } : {}}
            className={clsx(
                "bg-white rounded-xl shadow-lg border border-gray-100 p-6 transition-shadow duration-300",
                hover && "hover:shadow-xl hover:border-brand-blue/20",
                className
            )}
        >
            {children}
        </motion.div>
    );
};
