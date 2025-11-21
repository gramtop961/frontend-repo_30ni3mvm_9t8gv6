import Layout from '../components/Layout'

export default function UeberUns(){
  return (
    <Layout>
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Mehr Umsatz & Entlastung für Handwerksbetriebe</h1>
        <p className="mt-4 text-gray-700">VoiceForge wurde gegründet, weil wir gesehen haben, wie viel Potenzial Handwerksbetriebe durch verpasste Anrufe und ineffiziente Prozesse verschenken. Unser Ziel: Jedem Handwerker die Technologie geben, die bisher nur Großkonzerne hatten – zu einem fairen Preis und ohne Komplexität.</p>
        <h2 className="mt-8 text-xl font-semibold text-gray-900">Mission</h2>
        <p className="text-gray-700">Wir spezialisieren uns auf Omnichannel-AI-Agents für Handwerk. Kein generisches SaaS, sondern maßgeschneiderte Lösungen für Ihre Branche.</p>
        <h2 className="mt-8 text-xl font-semibold text-gray-900">Werte</h2>
        <ul className="mt-2 list-disc pl-5 text-gray-700 space-y-1">
          <li>Transparenz: Klare Preise, keine versteckten Kosten</li>
          <li>Zuverlässigkeit: 99.5% Uptime, deutscher Support</li>
          <li>Fairness: Keine Abzocke, ehrliche ROI-Versprechen</li>
        </ul>
        <h2 className="mt-8 text-xl font-semibold text-gray-900">Team</h2>
        <div className="mt-2 p-4 bg-white rounded-lg border border-gray-200">Gründer-Foto + kurze Bio (Platzhalter). "Wir sind selbst Unternehmer und wissen, was zählt: Ergebnisse."</div>
        <h2 className="mt-8 text-xl font-semibold text-gray-900">Standort</h2>
        <p className="text-gray-700">Entwickelt und betrieben in Leipzig, Deutschland. DSGVO-konform, EU-Server, lokaler Support.</p>
      </div>
    </Layout>
  )
}
