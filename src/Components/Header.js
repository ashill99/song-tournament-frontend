import React from 'react'
import { NavLink } from "react-router-dom"

function Header() {

    const logo = <img height="40"src="https://media.istockphoto.com/vectors/realistic-isolated-neon-sign-of-lightning-bolt-on-black-brick-wall-vector-id1205128259?k=6&m=1205128259&s=170667a&w=0&h=xKC_QYM5iPr0EFgGpBKPXdTCimolwNG1Y97LGFEaaRw=" alt="Banger Bracket"></img>
    return (
        <header>
            <h1>
                <span className="logo">               </span>
                ⚡ Banger Bracket
            </h1>            
            <nav className="nav-wrapper">
                <NavLink to="/" className="button">
                    Home
                </NavLink>
                <NavLink exact to="/brackets" className="button">
                    Brackets
                </NavLink>
                <NavLink to="/search" className="button">
                    Start New Bracket
                </NavLink>
            </nav>
        </header>
    )
}

export default Header 