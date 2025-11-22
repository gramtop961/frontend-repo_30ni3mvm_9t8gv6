export default function Impressum(){
  return (
    <div className="section">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">Impressum</h1>
        <div className="mt-6 grid md:grid-cols-2 gap-6 text-slate-300">
          <div className="card">
            <h2 className="text-white font-semibold text-lg">Anbieter</h2>
            <p className="p">VoiceForge GmbH (i.G.)<br/>Beispielstraße 1<br/>04109 Leipzig</p>
            <p className="p">E‑Mail: info@voiceforge.de<br/>Telefon: +49 341 000000</p>
          </div>
          <div className="card">
            <h2 className="text-white font-semibold text-lg">Vertretungsberechtigt</h2>
            <p className="p">Max Mustermann</p>
            <p className="p">USt‑IdNr.: DE000000000 (Platzhalter)</p>
          </div>
        </div>
        <p className="mt-6 text-xs text-slate-400">Hinweis: Platzhalterdaten. Bitte rechtssicher ergänzen.</p>
      </div>
    </div>
  )
}
