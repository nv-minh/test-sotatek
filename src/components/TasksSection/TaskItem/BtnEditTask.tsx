import React, {useState} from "react";
import {useAppDispatch} from "../../../store/hooks.tsx";
import {tasksActions} from "../../../store/Tasks.store.tsx";
import ModalCreateTask from "../../Utilities/ModalCreateTask.tsx";
import {Task} from "../../../interface.tsx";
import "./BtnEditTask.css"
import OptionsSvg from "../../../assets/options.svg"
const BtnEditTask: React.FC<{ task: Task }> = ({task}) => {
    const [modalEditTaskOpen, setModalEditTaskOpen] = useState<boolean>(false);
    const dispatch = useAppDispatch();

    const closeModalEditTask = () => {
        setModalEditTaskOpen(false);
    };

    const openModalEditTask = () => {
        setModalEditTaskOpen(true);
    };

    const editTaskHandler = (task: Task) => {
        dispatch(tasksActions.editTask(task));
    };

    return (
        <>
            <button
                title="edit task"
                className="btnEditTask"
                onClick={openModalEditTask}
            >
                <img src={OptionsSvg} alt="" className="imageEdit"/>
            </button>
            {modalEditTaskOpen && (
                <ModalCreateTask
                    onClose={closeModalEditTask}
                    task={task}
                    nameForm="Edit task"
                    onConfirm={editTaskHandler}
                />
            )}
        </>
    );
};

export default BtnEditTask;
