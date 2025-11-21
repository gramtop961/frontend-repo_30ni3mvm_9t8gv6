import Layout from '../components/Layout'

export default function Impressum(){
  return (
    <Layout>
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Impressum</h1>
        <div className="mt-4 text-gray-700 space-y-2">
          <p>VoiceForge GmbH (i.G.)</p>
          <p>Beispielstraße 1, 04109 Leipzig</p>
          <p>E-Mail: info@voiceforge.de • Telefon: +49 341 000000</p>
          <p>Vertreten durch: Max Mustermann</p>
          <p>USt-IdNr.: DE000000000 (Platzhalter)</p>
        </div>
      </div>
    </Layout>
  )
}
