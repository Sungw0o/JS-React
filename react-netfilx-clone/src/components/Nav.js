import React, { useEffect, useState } from 'react'
import "./Nav.css"

export default function Nav() {
    const [show, setShow] = useState(false);

    useEffect(() =>{
        first
    })

    return (
        <nav className="nav">
            <img
                alt='Netflix'
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Netflix_Logomark.png/640px-Netflix_Logomark.png"
                className='nav__logo'
                onClick={() => window.location.reload()}
            />
            <img
                alt="User logged"
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
                className="nav__avatar"
            />
        </nav>
    );
}

