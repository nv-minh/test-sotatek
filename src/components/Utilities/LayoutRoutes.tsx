import React from "react";
import { Task } from "../../interface.tsx";
import { useAppDispatch } from "../../store/hooks";
import { modalActions } from "../../store/Modal.store";
import TaskItem from "../TasksSection/TaskItem/TaskItem.tsx";
import "./LayoutRoutes.css"
type Props = {
    title: string;
    tasks: Task[] | [];
};

const LayoutRoutes: React.FC<Props> = ({ title, tasks }) => {
    const dispatch = useAppDispatch();
    const openModalHandler = () => {
        dispatch(modalActions.openModalCreateTask());
    };

    const tasksTitle = `${title} (${tasks.length} ${
        tasks.length === 1 ? "task" : "tasks"
    })`;

    return (
        <section>
            <h1 className="title">
                {tasksTitle}
            </h1>
            <ul
                className="tasksList"
            >
                {tasks
                    .map((task) => ({
                        ...task,
                        date: new Date(task.date),
                    }))
                    .sort((a, b) => +b.date - +a.date)
                    .map((task) => (
                        <TaskItem key={task.id}  task={task} />
                    ))}
                <li>
                    <button
                        onClick={openModalHandler}
                        className="btnAddTask"
                    >
                        Add new task
                    </button>
                </li>
            </ul>
        </section>
    );
};

export default React.memo(LayoutRoutes);
