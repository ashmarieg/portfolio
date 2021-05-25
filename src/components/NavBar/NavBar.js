import React, { useState } from "react"
import { NavLink, Link } from 'react-router-dom'
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"

const NavBar = () => {

const [navbarOpen, setNavbarOpen] = useState(false)

const handleToggle = () => {
  setNavbarOpen(prev => !prev)
}
const closeMenu = () => {
  setNavbarOpen(false)
}
return (

  <div className="navBar">

    <ul className={`menuNav ${navbarOpen ? "showMenu" : ""}`}>
    <button onClick={handleToggle}>{navbarOpen ? (
    <MdClose style={{ color: "#fff", width: "40px", height: "40px" }} />
  ) : (
    <FiMenu style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />
  )}</button>
    <Link onClick={() => closeMenu()}>About</Link>
    <Link onClick={() => closeMenu()}>Experience</Link>
    <Link onClick={() => closeMenu()}>Portfolio</Link>
    <Link onClick={() => closeMenu()}>Contact</Link>
    </ul>
  </div>
)

}

export default NavBar;