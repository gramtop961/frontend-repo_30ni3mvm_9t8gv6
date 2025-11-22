export default function Datenschutz(){
  return (
    <div className="section">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">Datenschutzerklärung</h1>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="card text-slate-300 text-sm leading-relaxed">
            <h2 className="text-white font-semibold text-lg mb-2">Verantwortlicher</h2>
            <p>VoiceForge GmbH (i.G.), Beispielstraße 1, 04109 Leipzig, info@voiceforge.de</p>
            <h2 className="text-white font-semibold text-lg mt-4 mb-2">Verarbeitungszwecke</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Bereitstellung der Website und Funktionalitäten</li>
              <li>Kontaktanfragen und Terminvereinbarungen</li>
              <li>Leistungserbringung und Abrechnung</li>
            </ul>
            <h2 className="text-white font-semibold text-lg mt-4 mb-2">Rechtsgrundlagen</h2>
            <p>Art. 6 Abs. 1 lit. b, f DSGVO; Einwilligung nach Art. 6 Abs. 1 lit. a bei optionalen Features.</p>
          </div>
          <div className="card text-slate-300 text-sm leading-relaxed">
            <h2 className="text-white font-semibold text-lg mb-2">Empfänger / Auftragsverarbeiter</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>OpenAI, ElevenLabs, Twilio (Kommunikations‑/Sprachdienste)</li>
              <li>Hosting EU (Rechenzentren in der EU)</li>
              <li>Analytik optional (z. B. Plausible/GA4) – mit Einwilligung</li>
            </ul>
            <h2 className="text-white font-semibold text-lg mt-4 mb-2">Speicherdauer</h2>
            <p>Gesprächs‑ und Chatverläufe max. 30 Tage, Vertragsdaten gemäß gesetzlicher Aufbewahrung.</p>
            <h2 className="text-white font-semibold text-lg mt-4 mb-2">Betroffenenrechte</h2>
            <p>Auskunft, Berichtigung, Löschung, Einschränkung, Widerspruch, Datenübertragbarkeit, Beschwerde bei der Aufsichtsbehörde.</p>
          </div>
        </div>
        <p className="mt-6 text-xs text-slate-400">Hinweis: Platzhalter. Bitte mit einem DSGVO‑Generator prüfen/ergänzen.</p>
      </div>
    </div>
  )
}
