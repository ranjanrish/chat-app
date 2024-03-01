import React from "react";
import './Navbar.css';
import { IoHomeOutline } from "react-icons/io5";
import { FiMessageSquare, FiSearch } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { IconContext } from "react-icons";

function SideNavbar() {
    return (
        <div id="container">
            <IconContext.Provider value={{
                size: '30px', style: {
                    display: 'flex',
                }
            }}>
                <div id="other-icons">
                    <IoHomeOutline />
                    <FiMessageSquare />
                    <FiSearch />
                </div>
                <div id="settings-icon">
                    <IoSettingsOutline />
                </div>
            </IconContext.Provider>
        </div>
    )
}

export default SideNavbar;