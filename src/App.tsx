import Menu from "./components/Menu/Menu.tsx";
import './App.css'
import {useAppDispatch, useAppSelector} from "./store/hooks.tsx";
import Footer from "./components/Footer.tsx";
import ModalCreateTask from "./components/Utilities/ModalCreateTask.tsx";
import {modalActions} from "./store/Modal.store.tsx";
import {tasksActions} from "./store/Tasks.store.tsx";
import {Task} from "./interface.tsx";
import AccountData from "./components/AccountSection/AccountData.tsx";
import TasksSection from "./components/TasksSection/TasksSection.tsx";

function App() {
    const modal = useAppSelector((state) => state.modal);

    const dispatch = useAppDispatch();

    const closeModalCreateTask = () => {
        dispatch(modalActions.closeModalCreateTask());
    };

    const createNewTaskHandler = (task: Task) => {
        dispatch(tasksActions.addNewTask(task));
    };
  return (
    <div className="container-app">
        {modal.modalCreateTaskOpen && (
            <ModalCreateTask
                onClose={closeModalCreateTask}
                nameForm="Add a task"
                onConfirm={createNewTaskHandler}
            />
        )}
        <Menu/>
        <TasksSection />
        <Footer />
        <AccountData />

    </div>
  )
}

export default App
