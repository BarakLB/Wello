import { NavLink } from "react-router-dom";

export function Modal({setModal}) {
    return (
        <section className="modal flex col ">
            <NavLink className="clean-link" to="/" onClick={()=>setModal(false)}>App</NavLink>
            <NavLink className="clean-link" to="/favorites" onClick={()=>setModal(false)}>Favorites</NavLink>
            {/* <button className="contact-btn" to="">Contact</button> */}

        </section>
    );
}