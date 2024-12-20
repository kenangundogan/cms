'use client';

import React, { createContext, useContext, useRef, useEffect } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { createPortal } from 'react-dom';

const ModalContext = createContext();

const Modal = ({ children, isOpen, onClose }) => {
    const modalRef = useRef(null);

    const handleClickOutside = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            onClose?.();
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
            onClose?.();
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            document.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return createPortal(
        <ModalContext.Provider value={{ onClose }}>
            <div data-type="Modal" className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
                <div
                    data-type="Wrapper"
                    ref={modalRef}
                    className="relative w-full max-w-2xl bg-white rounded-sm shadow-lg flex flex-col overflow-hidden"
                >
                    {children}
                </div>
            </div>
        </ModalContext.Provider>,
        document.body
    );
};

Modal.Head = ({ children }) => {
    const { onClose } = useContext(ModalContext);
    return (
        <div data-type="Head" className="flex items-center justify-between p-4 border-b border-gray-200">
            <h2 className="font-semibold">{children}</h2>
            <button
                type="button"
                className="text-gray-500 hover:text-gray-700"
                onClick={onClose}
            >
                <span className="sr-only">Kapat</span>
                <XMarkIcon className="size-6" />
            </button>
        </div>
    );
};

Modal.Body = ({ children }) => {
    return (
        <div data-type="Body" className="p-4">
            {children}
        </div>
    );
};

Modal.Foot = ({ children }) => {
    return (
        <div data-type="Foot" className="flex items-center justify-end gap-2 p-4 border-t border-gray-200">
            {children}
        </div>
    );
};

export default Modal;
