import React, { useState } from "react";
import { useAppDispatch } from "../../../store/hooks.tsx";
import { tasksActions } from "../../../store/Tasks.store.tsx";
import ModalConfirm from "../../Utilities/ModalConfirm.tsx";
import  Trash  from "../../../assets/trash.svg";
import "./BtnDeleteTask.css"
const BtnDeleteTask: React.FC<{ taskId: string }> = ({ taskId }) => {
    const [showModal, setIsModalShown] = useState<boolean>(false);
    const dispatch = useAppDispatch();

    const removeTaskHandler = () => {
        dispatch(tasksActions.removeTask(taskId));
    };
    return (
        <>
            {showModal && (
                <ModalConfirm
                    onClose={() => setIsModalShown(false)}
                    text="This task will be deleted permanently."
                    onConfirm={removeTaskHandler}
                />
            )}
            <button
                onClick={() => setIsModalShown(true)}
                title="delete task"
                className="btnDelete"
            >
                <img src={Trash} alt="trash" className="imageDelete" />
            </button>
        </>
    );
};

export default React.memo(BtnDeleteTask);
