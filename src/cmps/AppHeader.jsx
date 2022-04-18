import { NavLink } from "react-router-dom";
import React, { useState } from 'react';
import hamburger from '../assets/img/hamburger.svg';
import { Modal } from "./Modal";
// import favicon from '../../public/android-chrome-192x192.png'
import waves from '../assets/bgs/layered-waves-haikei.svg';
export function AppHeader() {

    const [isModalOpen, setModal] = useState(false);
    return (
        <section className="header-wrapper">
            <header className="main-layout flex space-between align-center">
                <div className="logo flex align-center">
                <h1>Wello<span>.</span></h1>
                    {/* <img className="favicon" src="/android-chrome-192x192.png" alt="" /> */}
                </div>
                <nav>
                    {/* <NavLink className="clean-link" to="/">Home</NavLink> */}
                    <NavLink className="clean-link" to="/">App</NavLink>
                    <NavLink className="clean-link" to="/favorites">Favorites</NavLink>

                </nav>
                <span className="hamburger" onClick={() => setModal(!isModalOpen)}>
                    <img className="hamburger-icon" src={hamburger} alt="" />

                </span>

            </header>
            <div className="waves-img">
                {/* <img src={waves} /> */}
            </div>
                {isModalOpen && <Modal setModal={setModal} />}
        </section>
    );
}