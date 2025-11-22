const faqs = [
  {
    q: 'Wie funktioniert der Agent technisch?',
    a: 'VoiceForge nutzt modernste KI-Technologie (GPT-4, ElevenLabs) kombiniert mit Telefonie (Twilio) und Ihren bestehenden Systemen (Kalender, CRM). Der Agent kann sowohl Anrufe entgegennehmen als auch über einen Chat auf Ihrer Website kommunizieren – alles mit derselben Intelligenz.'
  },
  {
    q: 'Welche Informationen muss ich bereitstellen?',
    a: 'Website-URL, Öffnungszeiten, Services/Preise, FAQ-Liste, Kalenderzugang (Google/Outlook), optional CRM/Branchensoftware.'
  },
  {
    q: 'Welche Tools/Accounts brauche ich?',
    a: 'Eigener ElevenLabs-Account (~€30-80/Monat), eigener Twilio-Account (~€30-80/Monat), Kalender (Google/Outlook). VoiceForge unterstützt die Einrichtung.'
  },
  {
    q: 'Wie läuft die Einrichtung ab?',
    a: 'Buchung → Onboarding-Formular (5-10 Min) → Konfiguration (3-5 Tage) → Test (1-2 Tage) → Go-Live (7-14 Tage).'
  },
  { q: 'Ist die KI-Nutzung transparent für Anrufer?', a: 'Ja, der Agent identifiziert sich klar als KI-Assistent und kann jederzeit an einen Menschen übergeben.' },
  { q: 'Kann jederzeit auf einen menschlichen Mitarbeiter umgeleitet werden?', a: 'Ja, bei komplexen Anfragen oder auf Wunsch eskaliert der Agent per SMS/Anruf an Ihr Team oder leitet weiter.' },
  { q: 'Welche rechtlichen Aspekte muss ich beachten?', a: 'DSGVO-konform (EU-Server, Datenlöschung nach 30 Tagen). Datenschutzerklärung mit AI-Hinweis, Consent für Recordings optional. AVV-Vertrag inklusive.' },
  { q: 'Wie lange dauert die Implementierung?', a: '1 Agent: 7-10 Tage, 2-3 Agents: 10-14 Tage, 4 Agents: 14-21 Tage, Integrationen: +5-10 Tage.' },
  { q: 'Kann ich ohne Demo direkt kaufen?', a: 'Ja, auf der Preise-Seite können Sie direkt kaufen. Danach erhalten Sie das Onboarding-Formular und einen kurzen Kick-off-Call.' },
  { q: 'Gibt es Mindestvertragslaufzeiten?', a: 'Monatlich kündbar mit 30 Tagen Frist. Setup-Gebühr nicht erstattbar, Monatsgebühr endet mit Kündigung.' },
  { q: 'Was passiert mit meinen Daten?', a: 'Hosting EU-Server, Speicherung 30 Tage, Zugriff nur für Sie und VoiceForge (Support). Löschung innerhalb 7 Tage nach Kündigung.' },
  { q: 'Wie ist der Support?', a: 'E-Mail <24h, Priority <4h für 2+ Agent-Kunden, Knowledge Base und Onboarding-Support.' },
]

function Item({ q, a }){
  return (
    <details className="p-4 bg-white rounded-lg border border-gray-200 group" open={false}>
      <summary className="cursor-pointer font-semibold text-gray-900 list-none flex items-center justify-between">
        {q}
        <span className="text-sm text-gray-500 group-open:hidden">aufklappen</span>
        <span className="text-sm text-gray-500 hidden group-open:inline">zuklappen</span>
      </summary>
      <p className="mt-2 text-sm text-gray-700">{a}</p>
    </details>
  )
}

export default function FAQ(){
  return (
    <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">Häufig gestellte Fragen</h1>
      <div className="space-y-3">
        {faqs.map((f) => (<Item key={f.q} q={f.q} a={f.a} />))}
      </div>
    </div>
  )
}
