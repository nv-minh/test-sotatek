import React from "react";
import { useAppSelector } from "../../store/hooks";
import LayoutRoutes from "../Utilities/LayoutRoutes.tsx";


const Home: React.FC = () => {
    const tasks = useAppSelector((state) => state.tasks.tasks);
    return <LayoutRoutes title="All tasks" tasks={tasks}></LayoutRoutes>;
};

export default Home;
