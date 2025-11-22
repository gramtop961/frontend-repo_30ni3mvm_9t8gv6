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
              <li>Bereitstellung und Betrieb der Website</li>
              <li>Termin- und Kontaktanfragen (Demo, Support)</li>
              <li>Erbringung unserer SaaS‑Leistungen, Abrechnung, Kundenverwaltung</li>
            </ul>

            <h2 className="text-white font-semibold text-lg mt-4 mb-2">Rechtsgrundlagen</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Art. 6 Abs. 1 lit. b DSGVO (Vertrag/Anbahnung)</li>
              <li>Art. 6 Abs. 1 lit. f DSGVO (berechtigte Interessen, z. B. IT‑Sicherheit)</li>
              <li>Art. 6 Abs. 1 lit. a DSGVO (Einwilligung, z. B. Cookies/Analytics)</li>
            </ul>

            <h2 className="text-white font-semibold text-lg mt-4 mb-2">Datenkategorien</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Stammdaten, Kommunikationsdaten</li>
              <li>Nutzungsdaten (Logfiles, IP, Zeitstempel)</li>
              <li>Gesprächs- und Chatverläufe unserer KI‑Agenten</li>
            </ul>
          </div>

          <div className="card text-slate-300 text-sm leading-relaxed">
            <h2 className="text-white font-semibold text-lg mb-2">Empfänger / Sub‑Prozessoren</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>OpenAI, ElevenLabs, Twilio – Verarbeitung von Sprache/Text und Telefonie</li>
              <li>Hosting innerhalb der EU; bei Drittlandtransfer Einsatz von EU‑Standardvertragsklauseln</li>
              <li>Optionale Analytik (z. B. Plausible oder Google Analytics) – nur mit Einwilligung</li>
            </ul>
            <p className="mt-2">Mit allen Auftragsverarbeitern bestehen bzw. werden AVV/DPAs abgeschlossen.</p>

            <h2 className="text-white font-semibold text-lg mt-4 mb-2">Speicherdauer</h2>
            <p>Gesprächs‑ und Chatverläufe werden maximal 30 Tage vorgehalten und anschließend gelöscht. Vertrags- und Abrechnungsdaten nach gesetzlichen Fristen.</p>

            <h2 className="text-white font-semibold text-lg mt-4 mb-2">Cookies</h2>
            <p>Wir setzen nur technisch notwendige Cookies ein. Analytik‑Cookies werden ausschließlich nach Einwilligung gesetzt und können jederzeit widerrufen werden.</p>

            <h2 className="text-white font-semibold text-lg mt-4 mb-2">Rechte der Betroffenen</h2>
            <p>Sie haben Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit sowie Widerspruch. Zudem ein Beschwerderecht bei der zuständigen Aufsichtsbehörde.</p>

            <h2 className="text-white font-semibold text-lg mt-4 mb-2">Quelle / Generator‑Hinweis</h2>
            <p>Für eine rechtssichere Fassung empfehlen wir die Nutzung eines professionellen Generators (z. B. e‑recht24.de oder activemind.de) und die Prüfung durch juristische Beratung.</p>
          </div>
        </div>
        <p className="mt-6 text-xs text-slate-400">Hinweis: Platzhalter – Bitte anpassen und vervollständigen (insbesondere Anbieter‑ und Kontaktangaben sowie AVV‑Details).</p>
      </div>
    </div>
  )
}
