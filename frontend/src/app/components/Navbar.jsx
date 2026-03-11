import React from 'react'
import { Link, useLocation } from "react-router-dom";
import { Camera, LogOut, User } from 'lucide-react'
import Button from './ui/Button';
import useAuth from '../context/useAuth';

function Navbar() {
  const location = useLocation()
  const { isAuthenticated, logout, user } = useAuth();
  const navLinks = [
    {path: '/', label: 'Home'},
    {path: '/portfolio', label: 'portfolio'},
    {path: '/booking', label: 'booking'},
    {path: '/about', label: 'about'},
  ]
  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(path)
  } 

  return (
    <nav className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-primary/20">
      <div className='container mx-auto px-4' >
        <div className='flex items-center justify-between h-16' >
          <Link to='/' className='flex items-center gap-2 group' >
            <Camera className='w-10 h-10 text-primary group-hover:text-secondary transition-colors' />
            <span className='font-bold text-4xl bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent' >
              Retro Rabbi
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative py-2 transition-colors text-2xl ${
                  isActive(link.path)
                    ? 'text-primary'
                    : 'text-gray-300 hover:text-primary'
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-linear-to-r from-primary to-secondary" />
                )}
              </Link>
            ))}

            {isAuthenticated && (
              <Link
                to="/upload"
                className={`relative py-2 transition-colors ${
                  isActive('/upload')
                    ? 'text-primary'
                    : 'text-gray-300 hover:text-primary'
                }`}
              >
                Upload
                {isActive('/upload') && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-linear-to-r from-primary to-secondary" />
                )}
              </Link>
            )}
          </div>
          <div className="flex items-center gap-3">
            {isAuthenticated ? (
              <div className="flex items-center gap-3">
                <div className="hidden md:flex items-center gap-2 text-sm text-gray-300">
                  <User className="w-4 h-4" />
                  {user?.name}
                </div>
                <Button
                  onClick={logout}
                  buttonText='Logout'
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              </div>
            ) : (
              <Link to="/login">
                <Button
                  icon={<User className='w-4 h-4 mr-2' />}
                  buttonText='Login'
                /> 
              </Link>
            )}
          </div>
        </div>
        <div className="md:hidden flex items-center gap-4 pb-3 overflow-x-auto">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`whitespace-nowrap py-1 text-sm transition-colors ${
                isActive(link.path)
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-gray-300'
              }`}
            >
              {link.label}
            </Link>
          ))}
          {isAuthenticated && (
            <Link
              to="/upload"
              className={`whitespace-nowrap py-1 text-sm transition-colors ${
                isActive('/upload')
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-gray-300'
              }`}
            >
              Upload
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar