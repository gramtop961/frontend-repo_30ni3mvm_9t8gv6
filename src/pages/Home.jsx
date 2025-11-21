import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Problems from '../components/Problems'
import Solutions from '../components/Solutions'
import Outcomes from '../components/Outcomes'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Problems />
      <Solutions />
      <Outcomes />
      <section id="demo" className="py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-2xl font-bold text-gray-900">Demo-Termin buchen</h2>
            <p className="text-gray-600">Schnell, unverbindlich, 30 Minuten.</p>
            <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-3 text-sm text-gray-700">
                <div>• Analyse Ihrer aktuellen Situation (5 Min)</div>
                <div>• Live-Demo mit echten Daten von Ihrer Website (15 Min)</div>
                <div>• Erster Prototyp-Einblick (wie Ihr Agent klingen würde)</div>
                <div>• Individuelles Angebot mit ROI-Kalkulation und Zeitplan</div>
              </div>
              <div>
                <iframe className="w-full h-[420px] rounded-lg border border-gray-200" src="https://cal.com/flames-blue/30min?hide_event_type_details=true&primary_color=10b981" title="Demo buchen"></iframe>
                <div className="text-xs text-gray-500 mt-2">Falls der Kalender nicht lädt, <a href="https://cal.com" className="underline">hier klicken</a>.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
