import Layout from '../components/Layout'

export default function AGB(){
  return (
    <Layout>
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Allgemeine Geschäftsbedingungen (AGB)</h1>
        <div className="mt-4 text-gray-700 space-y-3 text-sm">
          <p>Diese AGB sind ein Platzhalter. Empfohlen wird eine anwaltliche Prüfung. Leistungsumfang: Bereitstellung von Omnichannel-KI-Agents, Verfügbarkeit 99.5% (SLA), Support gemäß Preisliste.</p>
          <p>Kündigungsfristen: monatlich, 30 Tage. Zahlungsbedingungen: Setup einmalig, Abo monatlich. Haftungsbeschränkung, Gewährleistung und Datenschutz gemäß geltendem Recht.</p>
        </div>
      </div>
    </Layout>
  )
}
