import React from "react"
import SeachBar from "../SearchBar/SearchBar"
import style from "./Navbar.module.css"

import { Link } from "react-router-dom"

export default function NavBar({ onSearch }) {
    return (
        <div className={style.container}>
            <SeachBar onSearch={onSearch}/>
            <Link to='/about'>About</Link>
            <Link to='/home'>Home</Link>
        </div>
    )
}