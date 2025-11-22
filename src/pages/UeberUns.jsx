export default function UeberUns(){
  return (
    <div className="section">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">Über uns</h1>
        <p className="mt-4 text-lg text-slate-300 max-w-3xl">
          VoiceForge ist ein spezialisiertes AI-Unternehmen für den deutschsprachigen B2B‑Mittelstand. 
          Wir bauen Omnichannel‑Vertriebs- und Service‑Agents, die Anrufe, Chats und Terminvereinbarungen
          zuverlässig übernehmen – DSGVO‑konform, hochperformant und auf die Prozesse von Handwerks- und Servicebetrieben zugeschnitten.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="card">
            <h3 className="text-white font-semibold text-lg">Fokus Branche</h3>
            <p className="p">Handwerk, Services, lokale Dienstleister. Keine generischen Chatbots – sondern praxiserprobte Playbooks mit messbarem ROI.</p>
          </div>
          <div className="card">
            <h3 className="text-white font-semibold text-lg">Operative Exzellenz</h3>
            <p className="p">99,5% Uptime, EU‑Hosting, klare SLAs. Integration in bestehende Systeme (Kalender, CRM, Telefonie) inklusive.</p>
          </div>
          <div className="card">
            <h3 className="text-white font-semibold text-lg">Partnerschaftlich</h3>
            <p className="p">Schnelle Einführung, Coaching des Teams und kontinuierliche Optimierung. Wir liefern Ergebnisse – nicht nur Software.</p>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="card">
            <h2 className="text-xl font-bold text-white">Unsere Mission</h2>
            <p className="p">Wir geben mittelständischen Betrieben Technologie in die Hand, die bisher nur Konzerne hatten – bezahlbar, planbar, wirksam.</p>
            <ul className="mt-3 space-y-2 text-slate-300 list-disc pl-5">
              <li>Mehr qualifizierte Anfragen und weniger No‑Shows</li>
              <li>Entlastung des Teams bei Routine‑Gesprächen</li>
              <li>Messbarer Mehrumsatz in Wochen statt Monaten</li>
            </ul>
          </div>
          <div className="card">
            <h2 className="text-xl font-bold text-white">Werte</h2>
            <ul className="mt-2 space-y-2 text-slate-300 list-disc pl-5">
              <li>Transparenz: Klare Preise, ehrliche Erwartungen</li>
              <li>Datenschutz: DSGVO‑konform, AVV, EU‑Rechenzentren</li>
              <li>Verantwortung: Wir messen, berichten und verbessern</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="card">
            <h3 className="text-white font-semibold">Team</h3>
            <p className="p">Unternehmer, Engineers, Ops. Wir kombinieren Praxiswissen aus Vertrieb & Support mit moderner AI‑Forschung.</p>
          </div>
          <div className="card">
            <h3 className="text-white font-semibold">Standort</h3>
            <p className="p">Leipzig, Deutschland. Remote‑fähiges Team mit EU‑Abdeckung. Deutsch & Englisch.</p>
          </div>
          <div className="card">
            <h3 className="text-white font-semibold">Kontakt</h3>
            <p className="p">info@voiceforge.de · +49 (0)341 000000</p>
          </div>
        </div>
      </div>
    </div>
  )
}
