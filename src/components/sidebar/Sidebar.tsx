import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { FiMessageSquare, FiSearch } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { IconContext } from "react-icons";
import '../stylesheet.css';

function Sidebar() {
    return (
        <div id='sidebar-container'>
            <IconContext.Provider value={{
                size: '20px', style: {
                    display: 'flex',
                    padding: '2vh'
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

export default Sidebar;