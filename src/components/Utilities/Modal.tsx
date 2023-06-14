import React from "react";
import "./Modal.css"
const ModalContent: React.FC<{
    children: React.ReactNode;
    onClose: () => void;
    title: string;
}> = ({ children, onClose, title }) => {
    const closeModalHandler = (event: React.MouseEvent) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    return (
        <div
            className="container-modal"
            onClick={closeModalHandler}
        >
            <section className="sectionModal">
                <button
                    aria-label="close alert"
                    className="btnCloseModal"
                    onClick={onClose}
                >
                </button>
                <h2 className="titleModal">{title}</h2>
                {children}
            </section>
        </div>
    );
};


const Modal: React.FC<{
    children: React.ReactNode;
    onClose: () => void;
    title: string;
}> = ({ children, onClose, title }) => {
    return (
        <ModalContent children={children} onClose={onClose} title={title} />
    );
};

export default Modal;
