import React from "react";
import avatar1 from "../../assets/avatar-1.jpg";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { menusActions } from "../../store/Menu.store";
import LayoutMenus from "../Utilities/LayoutMenus";
import TasksDone from "./TasksDone";
import "./AccountData.css"
const AccountData: React.FC = () => {
    const menuOpen = useAppSelector((state) => state.menu.menuAccountOpened);

    const dispatch = useAppDispatch();

    const closeMenuHandler = () => {
        dispatch(menusActions.closeMenuAccount());
    };

    return (
        <LayoutMenus
            menuOpen={menuOpen}
            closeMenuHandler={closeMenuHandler}
            classMenu={"menu-account"}
        >
            <section className="header-account">
        <span className="account">
          <span className="">Hi, User!</span>
          <img src={avatar1} alt="cat" className="image-account" />
        </span>
                <TasksDone />
                <a
                    href="https://github.com/nv-minh"
                    className="coppyright"
                >
                    Projected by NgoVanMinh
                </a>
            </section>
        </LayoutMenus>
    );
};

export default AccountData;
