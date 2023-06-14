import React from "react";
import { Task } from "../../../interface.tsx";
import InfosTask from "./InfosTask.tsx";
import ActionsTaskItem from "./ActionsTaskItem.tsx";
import "./TaskItem.css"
const TaskItem: React.FC<{  task: Task }> = ({
task}) => {
    return (
        <>
            <li key={task.id}>
                <article
                    className="taskItem"
                >
                    <InfosTask task={task}  />
                    <ActionsTaskItem task={task}  />
                </article>
            </li>
        </>
    );
};

export default React.memo(TaskItem);
