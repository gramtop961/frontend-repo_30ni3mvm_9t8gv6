import Layout from '../components/Layout'

export default function Datenschutz(){
  return (
    <Layout>
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Datenschutzerklärung</h1>
        <div className="mt-4 text-gray-700 space-y-3 text-sm">
          <p>Diese Vorlage dient als Platzhalter. Nutzen Sie einen DSGVO-konformen Generator (z.B. e-recht24.de oder activemind.de). Erwähnen Sie die Nutzung von ElevenLabs, Twilio, OpenAI als Subprozessoren. Datenaufbewahrung: Gesprächshistorie 30 Tage, danach Löschung. Rechte der Betroffenen: Auskunft, Berichtigung, Löschung, Einschränkung, Widerspruch.</p>
          <p>Cookie-Hinweis bei Einsatz von Analytics (GA4 oder Plausible). AVV-Vertrag mit VoiceForge möglich. Hosting auf EU-Servern.</p>
        </div>
      </div>
    </Layout>
  )
}
