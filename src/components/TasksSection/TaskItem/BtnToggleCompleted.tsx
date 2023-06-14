import React from "react";
import { useAppDispatch } from "../../../store/hooks.tsx";
import { tasksActions } from "../../../store/Tasks.store.tsx";
import  SvgX  from "../../../assets/x.svg";
import Check  from "../../../assets/check.svg";
import "./BtnToggleCompleted.css"
const BtnToggleCompleted: React.FC<{
    taskCompleted: boolean;
    taskId: string;
}> = ({ taskCompleted, taskId }) => {
    const dispatch = useAppDispatch();

    const toggleTaskCompleted = (id: string) => {
        dispatch(tasksActions.toggleTaskCompleted(id));
    };

    return (
        <button
            title={taskCompleted ? "mark as uncompleted" : "mark as completed"}
            className={`${
                taskCompleted
                    ? "taskCompleted"
                    : "notTaskCompleted"}`}
            onClick={() => toggleTaskCompleted(taskId)}
        >
      <span className="status">
        {taskCompleted ? "completed" : "uncompleted"}
      </span>
            <span className=" btnCompleted">
        {taskCompleted ? (
            <img src={Check} alt="" className="image" />
        ) : (
            <img src={SvgX} alt="" />        )}
      </span>
        </button>
    );
};

export default React.memo(BtnToggleCompleted);
