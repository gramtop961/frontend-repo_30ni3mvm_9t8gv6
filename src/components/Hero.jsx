import Spline from '@splinetool/react-spline'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur px-3 py-1.5 rounded-full text-xs font-medium text-gray-700 mb-4 pointer-events-none">
            <span>Omnichannel: Voice + Chat</span>
            <span className="inline-block w-1 h-1 rounded-full bg-gray-400" />
            <span>DSGVO-konform</span>
            <span className="inline-block w-1 h-1 rounded-full bg-gray-400" />
            <span>Made in Leipzig</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Omnichannel KI-Voice-Agents für Handwerksbetriebe
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-gray-700 max-w-2xl">
            24/7 Erreichbarkeit. Mehr qualifizierte Termine. Weniger No-Shows.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="px-3 py-1.5 rounded-full text-sm bg-cyan-100 text-cyan-900">24/7 Verfügbarkeit</span>
            <span className="px-3 py-1.5 rounded-full text-sm bg-teal-100 text-teal-900">85% Zeitersparnis</span>
            <span className="px-3 py-1.5 rounded-full text-sm bg-emerald-100 text-emerald-900">€12k+ Mehrumsatz/Monat</span>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#solutions" className="px-5 py-3 rounded-md bg-emerald-500 hover:bg-emerald-600 text-white font-semibold transition-colors">Lösungen entdecken</a>
            <a href="#demo" className="px-5 py-3 rounded-md border border-gray-300 text-gray-900 font-semibold hover:bg-gray-50">Demo-Termin buchen</a>
          </div>
          <div className="mt-8">
            <div className="aspect-video w-full max-w-2xl bg-white/70 backdrop-blur border border-gray-200 rounded-xl grid place-items-center text-gray-700">
              60-Sekunden-Demo ansehen (Video später einbetten)
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/70 to-white"></div>
    </section>
  )
}
