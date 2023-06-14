import React from "react";
import SearchField from "./SearchField";
import { useAppDispatch } from "../../store/hooks";
import { menusActions } from "../../store/Menu.store";
import "./HeaderTasks.css"
import Menu from "../../assets/menu.svg"
const HeaderTasks: React.FC = () => {
    const dispatch = useAppDispatch();

    const date: Date = new Date();
    const year: number = date.getFullYear();
    const month: number = date.getMonth();
    const day: number = date.getDate();

    const monthName: string[] = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    const todayDate = `${year}, ${monthName[month].slice(0, 3)} ${day
        .toString()
        .padStart(2, "0")}`;

    const dateTimeFormat = `${year}-${month.toString().padStart(2, "0")}-${day
        .toString()
        .padStart(2, "0")}}`;

    const openMenuHeaderHandler = () => {
        dispatch(menusActions.openMenuHeader());
    };


    return (
        <header className="header">
            <button
                className="btnMenu"
                onClick={openMenuHeaderHandler}
                title="open menu"
            >
                <img src={Menu} alt="" className="imageMenu"/>
            </button>
            <SearchField />
            <div className="description">
                <time dateTime={dateTimeFormat}>{todayDate}</time>
            </div>
        </header>
    );
};

export default HeaderTasks;
