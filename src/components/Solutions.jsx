import { CalendarCheck2, Moon, Bell, Headset } from 'lucide-react'

const agents = [
  {
    key: 'termin-lead-agent',
    name: 'Termin-Lead-Agent',
    icon: CalendarCheck2,
    desc: 'Automatische Terminbuchung über Ihre Kalender-Integration. Lead-Scoring, Erinnerungen, Doppelbuchungs-Schutz.',
    roi: '€8.000-12.000/Monat zusätzlich',
    price: 'Ab €369/Monat',
  },
  {
    key: 'after-hours-hotline',
    name: 'After-Hours-Hotline',
    icon: Moon,
    desc: '24/7 Erreichbarkeit außerhalb Geschäftszeiten. Intelligente Notfall-Erkennung, sofortige Eskalation.',
    roi: '€10.000-15.000/Monat (Notfall-Aufträge)',
    price: 'Ab €369/Monat',
  },
  {
    key: 'outbound-reminder',
    name: 'Outbound-Reminder',
    icon: Bell,
    desc: 'Automatische Termin-, Zahlungs- und Follow-up-Erinnerungen. Reduziert No-Shows um 70%.',
    roi: '€2.500-4.000/Monat (vermiedene No-Shows)',
    price: 'Ab €369/Monat',
  },
  {
    key: 'service-support',
    name: 'Service L1/L2 Support',
    icon: Headset,
    desc: 'Beantwortet häufige Fragen, erstellt Tickets, eskaliert intelligent. Wissensdatenbank-Integration.',
    roi: '40% Zeitersparnis im Kundenservice',
    price: 'Ab €369/Monat',
  },
]

export default function Solutions() {
  return (
    <section id="solutions" className="py-16">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Vier spezialisierte Agents für Ihr Handwerk</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {agents.map(({ key, name, icon: Icon, desc, roi, price }) => (
            <div key={key} className="p-6 bg-white rounded-xl border border-gray-200 hover:shadow-sm transition-shadow flex flex-col">
              <Icon className="text-cyan-600" />
              <h3 className="mt-4 font-semibold text-gray-900">{name}</h3>
              <p className="mt-2 text-sm text-gray-600 flex-1">{desc}</p>
              <div className="mt-4 text-sm text-gray-700">
                <p className="font-medium">Typischer ROI: <span className="text-gray-900">{roi}</span></p>
                <p className="mt-1">Preis: <span className="font-semibold text-gray-900">{price}</span></p>
              </div>
              <a href="/preise#pakete" className="mt-4 inline-flex justify-center px-4 py-2 rounded-md bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold">Mehr erfahren</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
