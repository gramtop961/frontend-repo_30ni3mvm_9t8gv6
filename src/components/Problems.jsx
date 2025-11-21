import { Clock, CalendarX2, Users, PhoneMissed, Folder, BarChart3 } from 'lucide-react'

const items = [
  { icon: Clock, title: 'Verpasste Geschäftszeiten', text: 'Anrufe abends und am Wochenende gehen verloren.' },
  { icon: CalendarX2, title: 'Termin-Doppelbuchungen', text: 'Chaos im Terminkalender führt zu Konflikten.' },
  { icon: Users, title: 'Hoher Personalaufwand', text: 'Standardanfragen binden wertvolle Zeit.' },
  { icon: PhoneMissed, title: 'Verlorene Anrufe', text: '27% aller Anrufe bleiben unbeantwortet.' },
  { icon: Folder, title: 'Inkonsistente Daten', text: 'Kundeninformationen gehen verloren oder sind unvollständig.' },
  { icon: BarChart3, title: 'Fehlende Insights', text: 'Keine Übersicht über Anrufvolumen und Erfolgsraten.' },
]

export default function Problems() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Die Probleme im Alltag von Handwerksbetrieben</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, text }) => (
            <div key={title} className="p-6 bg-white rounded-xl border border-gray-200 hover:shadow-sm transition-shadow">
              <Icon className="text-cyan-600" />
              <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
