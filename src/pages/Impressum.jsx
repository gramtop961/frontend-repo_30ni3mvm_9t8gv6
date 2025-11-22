export default function Impressum(){
  return (
    <div className="section">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">Impressum</h1>
        <div className="mt-6 grid md:grid-cols-2 gap-6 text-slate-300">
          <div className="card">
            <h2 className="text-white font-semibold text-lg">Unternehmensdaten</h2>
            <p className="p">VoiceForge GmbH (i.G.)<br/>Beispielstraße 1<br/>04109 Leipzig</p>
            <p className="p">Kontakt: info@voiceforge.de · +49 341 000000</p>
            <p className="p">Steuernummer / USt-IdNr.: DE000000000 (Platzhalter)</p>
          </div>
          <div className="card">
            <h2 className="text-white font-semibold text-lg">Vertreten durch</h2>
            <p className="p">Max Mustermann (Geschäftsführer, i.G.)</p>
            <p className="p">Registereintrag: Handelsregister Leipzig – wird nach Gewerbeanmeldung ergänzt</p>
            <p className="p">Verantwortlich i.S.d. § 18 Abs. 2 MStV: Max Mustermann, Anschrift wie oben</p>
          </div>
        </div>
        <div className="mt-6 card text-xs text-slate-400">
          <p>Hinweis: Platzhalterdaten. Nach Gewerbeanmeldung bitte rechtssicher ergänzen (Registergericht, Registernummer, USt‑IdNr.).</p>
        </div>
      </div>
    </div>
  )
}
