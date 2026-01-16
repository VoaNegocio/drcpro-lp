import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export const VideoModal = ({ isOpen, onClose, videoSrc }) => {
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
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-in fade-in duration-200">
            {/* Backdrop click to close */}
            <div className="absolute inset-0" onClick={onClose} />

            <div className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200 border border-white/10">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-brand-red rounded-full text-white transition-colors backdrop-blur-md group"
                >
                    <X size={24} className="group-hover:scale-110 transition-transform" />
                </button>

                <video
                    src={videoSrc}
                    className="w-full h-full"
                    controls
                    autoPlay
                    playsInline
                >
                    Seu navegador não suporta vídeos.
                </video>
            </div>
        </div>
    );
};
