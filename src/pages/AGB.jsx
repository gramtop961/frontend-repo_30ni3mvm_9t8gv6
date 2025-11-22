export default function AGB(){
  return (
    <div className="section">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">Allgemeine Geschäftsbedingungen (AGB)</h1>
        <div className="mt-6 grid md:grid-cols-2 gap-6 text-slate-300 text-sm leading-relaxed">
          <div className="card">
            <h2 className="text-white font-semibold text-lg mb-2">Leistungsumfang</h2>
            <p>Bereitstellung unserer SaaS‑Plattform für KI‑gestützte Omnichannel‑Agents (Telefon, Chat), inkl. Hosting, Standard‑Integrationen und Support gemäß gewähltem Paket.</p>
            <h2 className="text-white font-semibold text-lg mt-4 mb-2">Verfügbarkeit</h2>
            <p>Wir erbringen eine Verfügbarkeit von 99,5% im Monatsmittel (SLA), ausgenommen sind Wartungsfenster und Ereignisse außerhalb unseres Einflussbereichs.</p>
            <h2 className="text-white font-semibold text-lg mt-4 mb-2">Kündigung</h2>
            <p>Monatlich kündbar mit einer Frist von 30 Tagen zum Monatsende, sofern nicht anders vereinbart.</p>
          </div>
          <div className="card">
            <h2 className="text-white font-semibold text-lg mb-2">Zahlungsbedingungen</h2>
            <p>Einmalige Setup‑Gebühr; laufende Abonnementgebühren monatlich im Voraus. Preise zzgl. gesetzlicher Umsatzsteuer. Zahlbar per SEPA‑Lastschrift oder Kreditkarte.</p>
            <h2 className="text-white font-semibold text-lg mt-4 mb-2">Haftungsbeschränkung</h2>
            <p>Haftung für Vorsatz und grobe Fahrlässigkeit uneingeschränkt; im Übrigen beschränkt auf typische, vorhersehbare Schäden. Keine Haftung für mittelbare Schäden und entgangenen Gewinn.</p>
            <h2 className="text-white font-semibold text-lg mt-4 mb-2">Gewährleistung & Support</h2>
            <p>Es gelten die gesetzlichen Vorschriften. Support gemäß Paketumfang; Störungen werden im Rahmen des SLAs bearbeitet.</p>
            <h2 className="text-white font-semibold text-lg mt-4 mb-2">Datenschutz</h2>
            <p>Verarbeitung personenbezogener Daten gemäß DSGVO. Verweis auf unsere Datenschutzerklärung; Auftragsverarbeitungsverträge (AVV) mit Sub‑Prozessoren vorhanden.</p>
            <h2 className="text-white font-semibold text-lg mt-4 mb-2">Schlussbestimmungen</h2>
            <p>Es gilt deutsches Recht. Gerichtsstand, soweit gesetzlich zulässig, ist Leipzig. Salvatorische Klausel.</p>
          </div>
        </div>
        <p className="mt-6 text-xs text-slate-400">Hinweis: Mustertext – Bitte rechtlich prüfen und an Ihre Vertragsbedingungen anpassen.</p>
      </div>
    </div>
  )
}
