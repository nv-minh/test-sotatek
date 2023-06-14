import React from "react";
import { useAppDispatch } from "../../store/hooks";
import { modalActions } from "../../store/Modal.store";
import "./BtnAddTask.css"
const BtnAddTask: React.FC<{ className?: string }> = () => {
	const dispatch = useAppDispatch();

	const onOpenModal = () => {
		dispatch(modalActions.openModalCreateTask());
	};
	return (
		<>
			<button className="btn" onClick={onOpenModal}>
				Add new task
			</button>
		</>
	);
};

export default BtnAddTask;
