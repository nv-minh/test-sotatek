import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./NavLinks.css"
const links = [
    {
        name: "Today's tasks",
        path: "/today",
    },
    {
        name: "All tasks",
        path: "/",
    },
    {
        name: "Completed tasks",
        path: "/completed",
    },
    {
        name: "Uncompleted tasks",
        path: "/uncompleted",
    },
];

const NavLinks: React.FC<{ classActive: string }> = () => {
    const route = useLocation();
    const currentPath = route.pathname;
    return (
        <nav>
            <ul className="menu-tasks">
                {links.map((link) => (
                    <li key={link.path}>
                        <NavLink
                            to={link.path}
                            className={`item-nav ${
                                currentPath === link.path ? "active-item" : ""
                            }`}
                        >
                            {link.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavLinks;
