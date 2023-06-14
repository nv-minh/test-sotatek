import React from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { menusActions } from "../../store/Menu.store";
import NavLinks from "./NavLinks";
import LayoutMenus from "../Utilities/LayoutMenus";
import "./Menu.css"
import BtnAddTask from "../Utilities/BtnAddTask.tsx";
const classLinkActive =
	"text-rose-600 bg-violet-100 border-r-4 border-rose-500 dark:bg-slate-700/[.2] dark:text-slate-200 dark:border-slate-200";

const Menu: React.FC = () => {
	const menuOpen = useAppSelector((state) => state.menu.menuHeaderOpened);
	const dispatch = useAppDispatch();

	const closeMenuHandler = () => {
		dispatch(menusActions.closeMenuHeader());
	};
	return (
		<LayoutMenus
			menuOpen={menuOpen}
			closeMenuHandler={closeMenuHandler}
			classMenu={"menu-sidebar"}
		>
			<header className="header-menu">
				<h1 className="title-menu">
					To-do list
				</h1>
				<BtnAddTask/>
				<NavLinks classActive={classLinkActive} />
			</header>
		</LayoutMenus>
	);
};

export default Menu;
