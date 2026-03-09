import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex gap-4 bg-black text-white p-4">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  )
}

export default Navbar