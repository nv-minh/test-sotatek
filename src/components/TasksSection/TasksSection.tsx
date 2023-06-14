import React from "react";
import HeaderTasks from "./HeaderTasks.tsx";
import "./TasksSection.css"
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "../Routes/Home.tsx";
import TodaysTasks from "../Routes/TodaysTasks.tsx";
import DoneTasks from "../Routes/DoneTasks.tsx";
import SearchResults from "../Routes/SearchResults.tsx";
import TaskOnly from "../Routes/TaskOnly.tsx";

const TasksSection: React.FC = () => {
	return (
		<main className="sectionTask">
			<HeaderTasks />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/today" element={<TodaysTasks />} />
				<Route
					path="/completed"
					element={<DoneTasks done={true} title="Completed tasks" />}
				/>
				<Route
					path="/uncompleted"
					element={<DoneTasks done={false} title="Uncompleted tasks" />}
				/>
				<Route path="/results" element={<SearchResults />} />
				<Route path="/task/:taskId" element={<TaskOnly />} />
				<Route path="*" element={<Navigate to="" />} />
			</Routes>
		</main>
	);
};

export default TasksSection;
