import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export const ImageModal = ({ isOpen, onClose, imageSrc, altText }) => {
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) {
            document.addEventListener('keydown', handleEsc);
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        }
        return () => {
            document.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = 'unset';
            console.log("ImageModal closed, cleanup done");
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 animate-in fade-in duration-200" onClick={onClose}>
            {/* Backdrop is the container itself, but we stop propagation on the image container */}

            <div
                className="relative max-w-5xl max-h-[90vh] w-auto h-auto rounded-xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200 border border-white/10"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-brand-red rounded-full text-white transition-colors backdrop-blur-md group"
                >
                    <X size={24} className="group-hover:scale-110 transition-transform" />
                </button>

                <img
                    src={imageSrc}
                    alt={altText || "Imagem ampliada"}
                    className="w-full h-full object-contain max-h-[90vh]"
                />
            </div>
        </div>
    );
};
