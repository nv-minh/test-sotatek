import React from "react";
import Modal from "./Modal";

const ModalConfirm: React.FC<{
    onConfirm: () => void;
    onClose: () => void;
    text: string;
}> = ({ onConfirm, onClose, text }) => {
    const confirmAndCloseModal = () => {
        onConfirm();
        onClose();
    };
    return (
        <Modal onClose={onClose} title="Are you sure?">
            <p className="title">{text}</p>
            <div className="content">
                <button onClick={onClose} className="btn">Cancel</button>
                <button onClick={confirmAndCloseModal} className="btn">
                    Confirm
                </button>
            </div>
        </Modal>
    );
};

export default ModalConfirm;
