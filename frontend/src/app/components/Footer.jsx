import React from 'react'
import { Camera, Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {icon: Instagram, href: 'https://www.instagram.com/retro_rabbi'},
    {icon: Facebook, href: 'https://facebook.com', label: 'Facebook'},
    {icon: Twitter, href: 'https://twitter.com', label: 'Twitter'},
    {icon: Youtube, href: 'https://youtube.com', label: 'Youtube'}
  ]

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Booking', href: '/booking' },
    { label: 'Tutorials', href: '/tutorials' },
  ];

  return (
    <footer className='bg-black border-t border-primary/20 mt-auto' >
      <div className='container mx-auto px-4  py-12' >
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8' >
          {/* Brand Section */}
          <div className='space-4' >
            <div className='flex items-center gap-2' >
              <Camera className='w-8 h-8 text-primary' />
              <span className='font-bold text-xl bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent' >
                Retro Rabbi
              </span>
            </div>
            <p className='text-gray-400 text-sm' >
              Capturing moments that last a lifetime. Professional photography services for all your needs.
            </p>
          </div>
          {/* QUICK LINKS */}
          <div>
            <h3 className="text-lg mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* CONTACT IFO */}
           <div>
            <h3 className="text-lg mb-4 text-primary">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-secondary" />
                info@retrorabbi.com
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Phone className="w-4 h-4 text-secondary" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-secondary mt-0.5" />
                Enugu, Nigeria
              </li>
            </ul>
          </div>
          {/* Social Media */}
          <div>
            <h3 className="text-lg mb-4 text-primary">Follow Us</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-card border border-primary/30 flex items-center justify-center hover:bg-primary hover:border-primary transition-all group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-primary group-hover:text-black transition-colors" />
                </a>
              ))}
            </div>
            <p className="text-gray-400 text-sm mt-4">
              Stay connected for the latest updates and behind-the-scenes content.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} Retro Media Studio. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer