import React, { useRef, useState } from "react";
import { Task } from "../../interface.tsx";
import Modal from "./Modal";
import InputCheckbox from "./InputCheckBox.tsx";
import "./ModalCreateTask.css";

const ModalCreateTask: React.FC<{
	onClose: () => void;
	task?: Task;
	nameForm: string;
	onConfirm: (task: Task) => void;
}> = ({ onClose, task, nameForm, onConfirm }) => {
	const dirPriority = ["low", "normal", "high"];
	const today: Date = new Date();
	const day: string = today.getDate().toString().padStart(2, "0");
	const month: string = (today.getMonth() + 1).toString().padStart(2, "0");
	const year: number = today.getFullYear();
	const todayDate: string = `${year}-${month}-${day}`;
	const maxDate: string = `${year + 1}-${month}-${day}`;
	const [priority, setSelectedPriority] = useState<string>(() => {
		if (task) {
			return task.priority;
		}
		return "";
	});
	const [description, setDescription] = useState<string>(() => {
		if (task) {
			return task.description;
		}
		return "";
	});
	const [title, setTitle] = useState<string>(() => {
		if (task) {
			return task.title;
		}
		return "";
	});

	const [date, setDate] = useState<string>(() => {
		if (task) {
			return task.date;
		}
		return todayDate;
	});

	const isTitleValid = useRef<boolean>(false);
	const isDateValid = useRef<boolean>(false);
	const [isCompleted, setIsCompleted] = useState<boolean>(() => {
		if (task) {
			return task.completed;
		}
		return false;
	});

	const addNewTaskHandler = (event: React.FormEvent): void => {
		event.preventDefault();
		isTitleValid.current = title.trim().length > 0;
		isDateValid.current = date.trim().length > 0;
		if (isTitleValid.current && isDateValid.current) {
			const newTask: Task = {
				title: title,
				priority: priority,
				description: description,
				date: date,
				completed: isCompleted,
				id: task?.id ? task.id : Date.now().toString(),
			};
			onConfirm(newTask);
			onClose();
		}
	};

	const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setDate(event.target.value);
	};

	const handleDateBlur = () => {
		const selectedDate = new Date(date);
		if (selectedDate < today) {
			setDate(todayDate);
		}
	};

	return (
		<Modal onClose={onClose} title={nameForm}>
			<form className="modalForm stylesInputsField" onSubmit={addNewTaskHandler}>
				<label>
					Title
					<input
						type="text"
						placeholder="example:study for the test"
						required
						value={title}
						onChange={({ target }) => setTitle(target.value)}
						className="inputStyles"
					/>
				</label>
				<label>
					Due Date
					<input
						type="date"
						className="inputStyles"
						value={date}
						required
						onChange={handleDateChange}
						onBlur={handleDateBlur}
						min={todayDate}
						max={maxDate}
					/>
				</label>
				<label>
					Description (optional)
					<textarea
						placeholder="example:study for the test"
						className="inputStyles"
						value={description}
						onChange={({ target }) => setDescription(target.value)}
					></textarea>
				</label>
				<label>
					Select a priority
					<select
						className="selectPriority inputStyles"
						value={priority}
						onChange={({ target }) => setSelectedPriority(target.value)}
					>
						{dirPriority.map((item: string) => (
							<option key={item} value={item} className="itemPriority inputStyles">
								{item}
							</option>
						))}
					</select>
				</label>
				<InputCheckbox
					isChecked={isCompleted}
					setChecked={setIsCompleted}
					label="Mark as completed"
				/>
				<button type="submit" className="btn">
					{nameForm}
				</button>
			</form>
		</Modal>
	);
};

export default ModalCreateTask;