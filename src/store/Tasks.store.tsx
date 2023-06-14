import {
    Action,
    createSlice,
    Dispatch,
    PayloadAction,
} from "@reduxjs/toolkit";
import { Task } from "../interface.tsx";

const defaultTasks: Task[] = [
    {
        title: "Task 1",
        description: "This is the description for this task",
        date: "2023-04-12",
        priority: "low",
        completed: true,
        id: "t1",
    },
    {
        title: "Task 2",
        description: "This is the description for this task",
        date: "2023-05-15",
        priority: "normal",
        completed: true,
        id: "t2",
    },
    {
        title: "Task 3",
        description: "This is the description for this task",
        date: "2023-08-21",
        priority: "high",
        completed: false,
        id: "t3",
    },
];


const initialState: {
    tasks: Task[];
} = {
    tasks: localStorage.getItem("tasks")
        ? JSON.parse(localStorage.getItem("tasks")!)
        : defaultTasks,
};

const tasksSlice = createSlice({
    name: "tasks",
    initialState: initialState,
    reducers: {
        addNewTask(state, action: PayloadAction<Task>) {
            state.tasks = [action.payload, ...state.tasks];
            localStorage.setItem("tasks", JSON.stringify(state.tasks));
        },
        removeTask(state, action) {
            const taskId = action.payload;
            const newTasksList = state.tasks.filter(
                (task) => task.id !== taskId
            );
            state.tasks = newTasksList;
            localStorage.setItem("tasks", JSON.stringify(state.tasks));
        },
        editTask(state, action: PayloadAction<Task>) {
            const taskId = action.payload.id;

            const newTaskEdited: Task = state.tasks.find(
                (task: Task) => task.id === taskId
            )!;
            const indexTask = state.tasks.indexOf(newTaskEdited);
            state.tasks[indexTask] = action.payload;
        },
        toggleTaskCompleted(state, action: PayloadAction<string>) {
            const taskId = action.payload;
            const currTask = state.tasks.find((task) => task.id === taskId)!;
            currTask.completed = !currTask.completed;
        },
    },
});

export const tasksActions = tasksSlice.actions;
export default tasksSlice.reducer;

export const tasksMiddleware =
    () => (next: Dispatch) => (action: Action) => {
        const nextAction = next(action);
        if (tasksActions.removeTask.match(action)) {
            console.log(JSON.parse(localStorage.getItem("tasks")!));
            if (localStorage.getItem("tasks")) {
                const localStorageTasks = JSON.parse(localStorage.getItem("tasks")!);
                if (localStorageTasks.length === 0) {
                    localStorage.removeItem("tasks");
                }
            }
        }
        return nextAction;
    };
