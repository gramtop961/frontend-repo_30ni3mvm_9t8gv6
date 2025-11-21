import Layout from '../components/Layout'

const baseIncluded = [
  'Google Calendar / Outlook Integration',
  'Datenbank-Pflege & Updates',
  'E-Mail- und SMS-Benachrichtigungen (100 SMS/Monat inkl.)',
  'Chatbot-Widget optional',
  'Standard-Support (E-Mail, <24h)'
]

const agents = [
  { name: 'Termin-Lead-Agent', price: 369 },
  { name: 'After-Hours-Hotline', price: 369 },
  { name: 'Outbound-Reminder', price: 369 },
  { name: 'Service L1/L2 Support', price: 369 },
]

const packages = [
  { name: '2-Agent-Paket', price: 738, setup: 2499, example: 'Termin-Lead + After-Hours' },
  { name: '3-Agent-Paket', price: 1107, setup: 3249, example: 'Termin-Lead + After-Hours + Outbound-Reminder' },
  { name: '4-Agent-Paket (Complete Suite)', price: 1476, setup: 3999, example: 'Alle 4 Agents' }
]

export default function Preise() {
  return (
    <Layout>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Transparente Preise. Keine versteckten Kosten.</h1>
          <p className="mt-3 text-gray-700">Wählen Sie den Agent, der zu Ihrem Bedarf passt. Alle Preise inklusive Kalender-Integration, Datenbank-Pflege und E-Mail/SMS-Benachrichtigungen.</p>
        </header>

        <section id="preise" className="py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {agents.map((a) => (
              <div key={a.name} className="p-6 bg-white rounded-xl border border-gray-200">
                <h3 className="font-semibold text-gray-900">{a.name}</h3>
                <div className="mt-3 text-3xl font-extrabold">€{a.price}<span className="text-base font-medium text-gray-600">/Monat</span></div>
                <div className="mt-1 text-sm text-gray-600">Setup einmalig: €1.499</div>
                <ul className="mt-4 text-sm text-gray-700 space-y-2 list-disc pl-5">
                  {baseIncluded.map((i) => (<li key={i}>{i}</li>))}
                </ul>
                <div className="mt-4 flex gap-2">
                  <a href="/demo" className="px-4 py-2 rounded-md bg-emerald-500 text-white text-sm font-semibold">Demo buchen</a>
                  <a href="/checkout" className="px-4 py-2 rounded-md border border-gray-300 text-sm font-semibold">Agent buchen</a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="pakete" className="py-10">
          <h2 className="text-2xl font-bold text-gray-900">Multi-Agent-Pakete</h2>
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {packages.map((p) => (
              <div key={p.name} className="p-6 bg-white rounded-xl border border-gray-200">
                <h3 className="font-semibold text-gray-900">{p.name}</h3>
                <div className="mt-3 text-3xl font-extrabold">€{p.price}<span className="text-base font-medium text-gray-600">/Monat</span></div>
                <div className="mt-1 text-sm text-gray-600">Setup: €{p.setup.toLocaleString('de-DE')}</div>
                <div className="mt-1 text-sm text-gray-600">Beispiel: {p.example}</div>
                <div className="mt-4 flex gap-2">
                  <a href="/demo" className="px-4 py-2 rounded-md bg-emerald-500 text-white text-sm font-semibold">Paket beraten lassen</a>
                  <a href="/checkout" className="px-4 py-2 rounded-md border border-gray-300 text-sm font-semibold">Paket buchen</a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-10">
          <h2 className="text-2xl font-bold text-gray-900">Externe Dienste (von Ihnen getragen)</h2>
          <div className="mt-4 grid sm:grid-cols-2 gap-6 text-sm text-gray-700">
            <div className="p-6 bg-white rounded-xl border border-gray-200">
              <h3 className="font-semibold text-gray-900">ElevenLabs Voice AI</h3>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                <li>Kosten: ~€30-80/Monat (je nach Anrufvolumen)</li>
                <li>Eigener ElevenLabs-Account erforderlich</li>
                <li>Unterstützung bei der Einrichtung inklusive</li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-xl border border-gray-200">
              <h3 className="font-semibold text-gray-900">Twilio (Telefonie & SMS)</h3>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                <li>Deutsche Telefonnummer: €1/Monat</li>
                <li>Anrufe: ~€0.012/Minute, SMS: €0.08/SMS</li>
                <li>Typische Kosten: €60-160/Monat (Volumenabhängig)</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-10">
          <h2 className="text-2xl font-bold text-gray-900">Erweiterte Integrationen (optional)</h2>
          <div className="mt-4 grid sm:grid-cols-2 gap-6 text-sm text-gray-700">
            <div className="p-6 bg-white rounded-xl border border-gray-200">
              <ul className="list-disc pl-5 space-y-1">
                <li>CRM-Integration (HubSpot, Pipedrive): €490-990 einmalig</li>
                <li>Handwerk-Software (Jobber, ServiceM8): €990-1.490 einmalig</li>
                <li>Custom API-Anbindung: ab €1.490 einmalig</li>
                <li>Multi-Standort-Setup: +€490 pro zusätzlichem Standort</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-10">
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="/checkout" className="flex-1 px-5 py-3 rounded-md bg-emerald-500 hover:bg-emerald-600 text-white text-center font-semibold">Jetzt Agent direkt kaufen</a>
            <a href="/demo" className="flex-1 px-5 py-3 rounded-md border border-gray-300 text-center font-semibold">Demo-Termin buchen</a>
          </div>
        </section>
      </div>
    </Layout>
  )
}
