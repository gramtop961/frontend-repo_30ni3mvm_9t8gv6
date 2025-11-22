import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ShoppingCart } from 'lucide-react'

export default function Layout({children}){
  const [open,setOpen]=React.useState(false)
  const nav = [
    {to:'/', label:'Start'},
    {to:'/loesungen', label:'Lösungen'},
    {to:'/preise', label:'Preise'},
    {to:'/roi-rechner', label:'ROI-Rechner'},
    {to:'/faq', label:'FAQ'},
    {to:'/demo', label:'Demo'}
  ]
  return (
    <div className="min-h-screen flex flex-col bg-[#0b1220] text-white">
      <header className="sticky top-0 z-50 bg-[#0b1220]/80 backdrop-blur border-b border-slate-800">
        <div className="max-w-[1200px] mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-extrabold text-white">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-emerald-500 shadow-[0_0_30px_rgba(16,185,129,.35)]">VF</span>
            <span>VoiceForge</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {nav.map(n=> (
              <NavLink key={n.to} to={n.to} className={({isActive})=>`text-sm ${isActive?'text-white':'text-slate-300 hover:text-white'}`}>{n.label}</NavLink>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <Link to="/checkout" className="btn btn-secondary"><ShoppingCart size={18}/> Kaufen</Link>
            <Link to="/demo" className="btn btn-primary">Demo</Link>
          </div>
          <button className="md:hidden p-2 rounded-lg border border-slate-700" onClick={()=>setOpen(!open)} aria-label="Menü">
            {open? <X size={18}/> : <Menu size={18}/>}
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t border-slate-800">
            <div className="max-w-[1200px] mx-auto px-4 py-3 grid gap-2">
              {nav.map(n=> (
                <NavLink key={n.to} to={n.to} onClick={()=>setOpen(false)} className={({isActive})=>`py-1 ${isActive?'text-white':'text-slate-300'}`}>{n.label}</NavLink>
              ))}
              <div className="flex gap-2 pt-2">
                <Link to="/checkout" className="btn btn-secondary flex-1"><ShoppingCart size={18}/> Kaufen</Link>
                <Link to="/demo" className="btn btn-primary flex-1">Demo</Link>
              </div>
            </div>
          </div>
        )}
      </header>
      <main className="flex-1">{children}</main>
      <footer className="section border-t border-slate-800">
        <div className="max-w-[1200px] mx-auto px-4 grid md:grid-cols-3 gap-6">
          <div>
            <div className="flex items-center gap-2 font-extrabold text-white mb-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-emerald-500"/>
              VoiceForge
            </div>
            <p className="p">Omnichannel-Agent (Telefon & Chat) zweisprachig: Deutsch und Englisch. Mehr Aufträge, weniger No‑Shows.</p>
          </div>
          <div className="grid grid-cols-2 gap-4 md:col-span-2">
            <div className="grid gap-2">
              <Link className="p hover:text-white" to="/ueber-uns">Über uns</Link>
              <Link className="p hover:text-white" to="/impressum">Impressum</Link>
              <Link className="p hover:text-white" to="/datenschutz">Datenschutz</Link>
              <Link className="p hover:text-white" to="/agb">AGB</Link>
            </div>
            <div className="grid gap-2">
              <Link className="p hover:text-white" to="/preise">Preise</Link>
              <Link className="p hover:text-white" to="/roi-rechner">ROI‑Rechner</Link>
              <Link className="p hover:text-white" to="/demo">Demo buchen</Link>
            </div>
          </div>
        </div>
        <div className="max-w-[1200px] mx-auto px-4 mt-6 text-xs text-slate-400">© {new Date().getFullYear()} VoiceForge. Alle Rechte vorbehalten.</div>
      </footer>
    </div>
  )
}
