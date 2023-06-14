import React from "react";
import {Task} from "../../../interface.tsx";
import useDate from "../../../hooks/useDate.tsx";
import "./InfosTask.css"
const InfosTask: React.FC<{ task: Task }> = ({
                                                                                                               task,
                                                                                                           }) => {
    const dateFormated = useDate(task.date);

    return (
        <div className="detailTask" >
            <div
                className="infoTask"

            >
        <span className="titleTask">
          {task.title}
        </span>
            </div>
            <p
                title={task.description}
                className="description">
                {task.description}
            </p>
            <time className="timer"> Due Date: {dateFormated}
            </time>
            <span className={`${task.priority}`} >Priority: {task.priority}</span>
        </div>
    );
};

export default InfosTask;
