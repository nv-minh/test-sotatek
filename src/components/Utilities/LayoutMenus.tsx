import React, { ReactNode } from "react";
import useScreenMedia from "../../hooks/useScreenMedia.tsx";
import "./LayoutMenus.css"
const LayoutMenus: React.FC<{
    menuOpen: boolean;
    children: ReactNode;
    closeMenuHandler: () => void;
    classMenu?:string;
}> = ({ menuOpen, children, closeMenuHandler,classMenu }) => {
    const mediaQueries = useScreenMedia();

    return (
        <>
            <div
                className={`layoutMenu-openXl  ${
                    menuOpen || mediaQueries.xl ? "block" : "hidden"
                } ${classMenu}`}
            >
                {children}
            </div>
            {menuOpen && !mediaQueries.xl && (
                <div
                    className="layoutMenu"
                    onClick={closeMenuHandler}
                ></div>
            )}
        </>
    );
};

export default LayoutMenus;
