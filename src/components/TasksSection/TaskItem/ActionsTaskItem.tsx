import React from "react";
import { Task } from "../../../interface.tsx";
import BtnEditTask from "./BtnEditTask.tsx";
import BtnDeleteTask from "./BtnDeleteTask.tsx";
import BtnToggleCompleted from "./BtnToggleCompleted.tsx";
import "./ActionsTaskItem.css"
const ActionsTaskItem: React.FC<{ task: Task }> = ({
                                                                               task,}) => {
    return (
        <>
            <div
                className="container"
            >
                <BtnToggleCompleted
                    taskCompleted={task.completed}
                    taskId={task.id}
                />
                <BtnDeleteTask taskId={task.id} />
                <BtnEditTask task={task} />
            </div>
        </>
    );
};

export default ActionsTaskItem;
