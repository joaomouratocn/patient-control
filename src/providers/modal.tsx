"use client";
import { ReactNode, useState, createContext } from "react";

interface ModalContextData {
    showModal: (component: ReactNode) => void;
    hideModal: () => void;
    isVisible: boolean;
}

export const ModalContext = createContext({} as ModalContextData);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
    const [modalContent, setModalContent] = useState<ReactNode>(null);
    const [isVisible, setIsVisible] = useState(false);

    const showModal = (component: ReactNode) => {
        setModalContent(component);
        setIsVisible(true);
    };

    const hideModal = () => {
        setIsVisible(false);
        setModalContent(null);
    };

    return (
        <ModalContext.Provider value={{ showModal, hideModal, isVisible }} >
            {isVisible && (
                <main className="absolute bg-gray-900/80 w-full min-h-screen">
                    <div className="absolute inset-0 flex items-center justify-center">
                        {modalContent}
                    </div>
                </main>
            )}
            {children}
        </ModalContext.Provider>
    );
};