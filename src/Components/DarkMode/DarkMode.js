import React, { useEffect, useState } from "react";
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import "./DarkMode.css";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
const DarkMode = () => {
    const [theme, setTheme] = useState('dark-theme');

    const toggleTheme = (e) => {
        e.target.checked ? setTheme('dark-theme') : setTheme('light-theme')
    }

    useEffect(() => {
      document.body.className = theme;
    }, [theme])
    
    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={toggleTheme}
                defaultChecked={true}
            />
            <label className='dark_mode_label' htmlFor='darkmode-toggle'>
                {/* <Sun />
                <Moon /> */}
                {/* <FaSun/>
                <br></br>
                <FaMoon/> */}
            </label>
        </div>
    );
};

export default DarkMode;
