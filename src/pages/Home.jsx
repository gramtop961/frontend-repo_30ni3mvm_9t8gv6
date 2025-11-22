import React from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle2, PhoneCall, Languages } from 'lucide-react'
import Typewriter from '../components/Typewriter'
import Reveal from '../components/Reveal'

export default function Home(){
  return (
    <div>
      <section className="relative section overflow-hidden">
        <div className="container relative z-10 grid md:grid-cols-2 gap-8 items-center">
          <Reveal>
            <div>
              <h1 className="h1 text-white">
                <Typewriter text="Omnichannel‑Agent für Handwerksbetriebe – zweisprachig (DE/EN)" />
              </h1>
              <p className="p mt-3 text-slate-300">Wir beantworten Anrufe und Chats 24/7, buchen Termine und qualifizieren Leads. 27% mehr beantwortete Anrufe, 70% weniger No‑Shows und €12k–18k Mehrumsatz pro Jahr – transparent messbar.</p>
              <div className="flex gap-3 mt-5">
                <Link to="/demo" className="btn btn-primary animate-glow"><PhoneCall size={18}/> Demo buchen</Link>
                <Link to="/preise" className="btn btn-secondary">Preise ansehen</Link>
              </div>
              <ul className="grid gap-2 mt-6 text-sm text-slate-300">
                <li className="flex items-center gap-2"><CheckCircle2 className="text-emerald-400" size={18}/> Telefon & Web‑Chat</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="text-emerald-400" size={18}/> Zweisprachig: Deutsch & Englisch <Languages size={16} className="opacity-80"/></li>
                <li className="flex items-center gap-2"><CheckCircle2 className="text-emerald-400" size={18}/> DSGVO‑konform, gehostet in der EU</li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="card p-0 overflow-hidden animate-float">
              <div className="aspect-video bg-slate-900/50 flex items-center justify-center">
                <div className="text-slate-400">Video‑Demo (60s) – Platzhalter</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container grid md:grid-cols-3 gap-4">
          {[
            {title:'Mehr Umsatz',desc:'€12k–18k Mehrumsatz/Jahr durch bessere Erreichbarkeit und automatisierte Lead‑Qualifizierung.'},
            {title:'Weniger No‑Shows',desc:'Bis zu 70% weniger Nichterscheinen dank automatischer Erinnerung per SMS/E‑Mail.'},
            {title:'Zweisprachig',desc:'Nahtlose Gespräche auf Deutsch oder Englisch – automatisch erkannt.'}
          ].map((c,i)=> (
            <Reveal key={c.title} delay={i*0.05}>
              <div className="card p-5 hover:translate-y-[-2px] transition-transform">
                <h3 className="h2 text-white mb-2">{c.title}</h3>
                <p className="p">{c.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container grid md:grid-cols-2 gap-6 items-start">
          <Reveal>
            <div className="card p-5">
              <h2 className="h2 text-white">So funktioniert’s</h2>
              <ul className="mt-3 grid gap-2 text-slate-300">
                <li>1. Wir nehmen Anrufe an oder chatten zuerst auf Deutsch – wechseln automatisch auf Englisch, wenn nötig.</li>
                <li>2. Wir qualifizieren Anliegen, vereinbaren Termine und dokumentieren alles.</li>
                <li>3. Übergabe an deine Systeme (Kalender, CRM, E‑Mail) – alles DSGVO‑konform.</li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="card p-5">
              <h2 className="h2 text-white">Schneller ROI</h2>
              <p className="p mt-2">Teste den ROI‑Rechner und sieh in Sekunden, wie sich VoiceForge in deinem Betrieb rechnet.</p>
              <Link to="/roi-rechner" className="btn btn-primary mt-4">ROI jetzt berechnen</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
