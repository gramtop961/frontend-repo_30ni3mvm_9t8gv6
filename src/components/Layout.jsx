import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Phone, CalendarDays, LineChart, Info, ShoppingCart, Linkedin, Youtube } from 'lucide-react'

const navItems = [
  { to: '/loesungen', label: 'Lösungen' },
  { to: '/preise', label: 'Preise' },
  { to: '/roi-rechner', label: 'ROI-Rechner' },
  { to: '/faq', label: 'FAQ' },
  { to: '/demo', label: 'Demo', highlight: true },
]

export default function Layout({ children }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-100">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-semibold text-gray-900">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-teal-600" />
            <span>VoiceForge</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => `text-sm font-medium transition-colors ${item.highlight ? 'text-white bg-emerald-500 hover:bg-emerald-600 px-3 py-1.5 rounded-md' : isActive ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'}`}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <button className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-gray-200" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-gray-100">
            <div className="px-4 py-3 space-y-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) => `block text-base ${isActive ? 'text-gray-900' : 'text-gray-700'} ${item.highlight ? 'bg-emerald-500 text-white px-3 py-2 rounded-md' : 'px-1 py-2'}`}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-100 mt-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 font-semibold text-gray-900 mb-3">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-cyan-500 to-teal-600" />
              <span>VoiceForge</span>
            </div>
            <p className="text-sm text-gray-600">Omnichannel AI für Handwerk – Telefon & Chat in einem Agent. Mehr Umsatz, weniger Stress.</p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link className="hover:text-gray-900 text-gray-600" to="/loesungen">Lösungen</Link></li>
              <li><Link className="hover:text-gray-900 text-gray-600" to="/preise">Preise</Link></li>
              <li><Link className="hover:text-gray-900 text-gray-600" to="/roi-rechner">ROI-Rechner</Link></li>
              <li><Link className="hover:text-gray-900 text-gray-600" to="/faq">FAQ</Link></li>
              <li><Link className="hover:text-gray-900 text-gray-600" to="/ueber-uns">Über uns</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Rechtliches</h4>
            <ul className="space-y-2 text-sm">
              <li><Link className="hover:text-gray-900 text-gray-600" to="/impressum">Impressum</Link></li>
              <li><Link className="hover:text-gray-900 text-gray-600" to="/datenschutz">Datenschutz</Link></li>
              <li><Link className="hover:text-gray-900 text-gray-600" to="/agb">AGB</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Kontakt</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>E-Mail: info@voiceforge.de</li>
              <li>Telefon: +49 341 000000</li>
              <li>Adresse: Leipzig, Deutschland</li>
            </ul>
            <div className="flex gap-3 mt-3">
              <a href="#" className="p-2 rounded-md border border-gray-200 hover:bg-gray-100" aria-label="LinkedIn"><Linkedin size={18} /></a>
              <a href="#" className="p-2 rounded-md border border-gray-200 hover:bg-gray-100" aria-label="YouTube"><Youtube size={18} /></a>
            </div>
          </div>
        </div>
        <div className="py-4 text-center text-xs text-gray-500 border-t border-gray-100">© 2025 VoiceForge. Alle Rechte vorbehalten.</div>
      </footer>
    </div>
  )
}
