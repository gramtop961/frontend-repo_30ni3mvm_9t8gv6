import { CalendarCheck2, Moon, Bell, Headset } from 'lucide-react'

const details = [
  {
    key: 'termin-lead-agent',
    name: 'Termin-Lead-Agent',
    icon: CalendarCheck2,
    problem: 'Sie verpassen täglich 10-15 Anrufe während Sie auf Baustellen sind. Jeder verpasste Anruf kostet Sie durchschnittlich €1.100 an entgangenem Umsatz.',
    features: [
      'Automatische Terminbuchung über Google Calendar, Outlook oder CalDAV',
      'Intelligentes Lead-Scoring (Dringlichkeit, Budget, Passgenauigkeit)',
      'Automatische Bestätigungs-SMS und E-Mail an Kunden',
      'Echtzeit-Kalender-Sync verhindert Doppelbuchungen',
      'Chatbot auf Ihrer Website für parallele Online-Anfragen',
      'Strukturierte Erfassung aller Kundeninformationen',
    ],
    dialogues: [
      'Kunde: "Ich brauche einen Klempner, mein Rohr ist geplatzt!"\nAgent: "Das klingt dringend. Ich koordiniere sofort einen Notfall-Termin. Können Sie mir Ihre Adresse nennen?"',
      'Kunde: "Was kostet eine Heizungswartung?"\nAgent: "Eine Standard-Wartung kostet €180. Möchten Sie einen Termin vereinbaren? Ich habe morgen um 14 Uhr oder Donnerstag um 10 Uhr verfügbar."',
    ],
    requirements: [
      'Zugang zu Ihrem Kalender (Google, Outlook oder andere)',
      'Ihre Öffnungszeiten und Verfügbarkeiten',
      'Liste typischer Services und Preise',
      'FAQ (häufigste Kundenfragen)'
    ],
    channels: ['Telefon (eigene Nummer oder Weiterleitung)', 'Website-Chat-Widget (einbettbar auf Ihrer Seite)'],
    roi: {
      before: 'Verpasste Anrufe vorher: 15/Tag = 450/Monat',
      captured: 'Mit Agent erfasst: 70% = 315 zusätzliche Anrufe',
      conversion: 'Conversion zu Terminen: 30% = 95 neue Termine',
      value: 'Durchschnittlicher Auftragswert: €350',
      revenue: 'Zusätzlicher Umsatz: €33.250/Monat',
      cost: 'Kosten Agent: €369/Monat',
      roi: 'ROI: 90:1 (konservativ 43:1)'
    }
  },
  {
    key: 'after-hours-hotline',
    name: 'After-Hours-Hotline',
    icon: Moon,
    problem: 'Anrufe außerhalb der Geschäftszeiten gehen verloren, besonders abends und am Wochenende.' ,
    features: [
      '24/7 Erreichbarkeit mit intelligenter Notfall-Erkennung',
      'Sofortige Eskalation per SMS/Anruf an Ihr Team',
      'Priorisierung nach Dringlichkeit und Ticket-Erstellung',
      'Regionale Weiterleitungen bei mehreren Standorten',
      'Anbindung an CRM/Helpdesk möglich',
      'Transparente Reports zu Anrufvolumen & Erfolgsquote'
    ],
    dialogues: [
      'Kunde: "Heizung ausgefallen, es ist 22:30 Uhr."\nAgent: "Ich markiere das als Notfall und eskaliere sofort an den Bereitschaftsdienst. Darf ich die Adresse und eine Rückrufnummer haben?"',
      'Kunde: "Ich wollte nur wissen, ob Sie morgen geöffnet haben."\nAgent: "Ja, von 8-17 Uhr. Darf ich Ihnen einen Rückruf für 9 Uhr einplanen?"',
    ],
    requirements: [ 'Öffnungszeiten', 'Bereitschaftsnummer für Notfälle', 'FAQ & Services' ],
    channels: ['Telefon', 'Website-Chat'],
    roi: { before: '200 After-Hours-Anrufe/Monat', captured: '85% erfasst', conversion: '40% Notfälle', value: 'Ø Auftragswert €500', revenue: '€34.000/Monat', cost: '€369/Monat', roi: 'ROI: >90:1' }
  },
  {
    key: 'outbound-reminder',
    name: 'Outbound-Reminder',
    icon: Bell,
    problem: 'No-Shows kosten bares Geld und Zeit.' ,
    features: [
      'Automatische Termin-, Zahlungs- und Follow-up-Erinnerungen',
      'Wahl zwischen SMS, E-Mail und Anruf',
      'Smart-Scheduling nach Uhrzeit und Kanal-Präferenz',
      'Vorlagen mit Personalisierung',
      'Rückbestätigungs-Flow (Y/N) mit Kalender-Update',
      'Berichte zu No-Show-Quote und Ersparnis'
    ],
    dialogues: [
      'Agent: "Erinnerung für Ihren Termin morgen um 10:00 Uhr. Bestätigen Sie mit JA oder verschieben mit NEIN."',
      'Agent: "Ihre Zahlung für die Wartung ist offen. Möchten Sie jetzt per Link bezahlen oder eine Rechnung erhalten?"',
    ],
    requirements: [ 'Kalenderzugang', 'Kundendaten (Name, Kontakt)', 'Typische Services/Preise' ],
    channels: ['Telefon', 'SMS', 'E-Mail', 'Website-Chat'],
    roi: { before: '15 No-Shows/Monat', captured: '70% Reduktion = 10 vermieden', conversion: '—', value: 'Ø Verlust €300', revenue: '€3.000/Monat', cost: '€369/Monat', roi: 'ROI: ~8:1 (nur No-Shows)'}
  },
  {
    key: 'service-support',
    name: 'Service L1/L2 Support',
    icon: Headset,
    problem: 'Standardfragen überlasten Ihr Team, echte Probleme bleiben liegen.' ,
    features: [
      'FAQ-Beantwortung rund um die Uhr',
      'Ticket-Erstellung und Priorisierung',
      'Eskalation an L2 mit vollständigem Kontext',
      'Wissensdatenbank-Integration',
      'Mehrsprachigkeit (Deutsch/Englisch)',
      'Analytics zu Themen und Lösungszeiten'
    ],
    dialogues: [
      'Kunde: "Wie hoch ist die Anfahrtspauschale?"\nAgent: "Die beträgt €29 im Stadtgebiet Leipzig."',
      'Kunde: "Ich brauche eine Rechnungskopie."\nAgent: "Gerne, ich sende sie an Ihre E-Mail. Können Sie mir die Rechnungsnummer nennen?"',
    ],
    requirements: [ 'FAQ', 'Ticket-System oder E-Mail', 'Prozess-Definitionen' ],
    channels: ['Website-Chat', 'Telefon'],
    roi: { before: '100 Supportanfragen/Woche', captured: '40% automatisiert', conversion: '—', value: 'Zeitersparnis 40 Std/Monat', revenue: 'Wert der Stunde €60 → €2.400', cost: '€369/Monat', roi: 'ROI: ~6:1 (nur Zeitersparnis)'}
  }
]

function Section({ agent }) {
  const Icon = agent.icon
  return (
    <section id={agent.key} className="py-12 border-b border-slate-800">
      <div className="max-w-[900px]">
        <div className="flex items-start gap-3">
          <Icon className="text-cyan-400" />
          <h2 className="text-2xl font-bold text-white">{agent.name}</h2>
        </div>
        <p className="mt-3 text-slate-300">{agent.problem}</p>
        <div className="mt-6 grid sm:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-white">Funktionen</h3>
            <ul className="mt-2 text-sm text-slate-300 list-disc pl-5 space-y-1">
              {agent.features.map((f) => (<li key={f}>{f}</li>))}
            </ul>
            <h3 className="mt-6 font-semibold text-white">Kanäle</h3>
            <ul className="mt-2 text-sm text-slate-300 list-disc pl-5 space-y-1">
              {agent.channels.map((c) => (<li key={c}>{c}</li>))}
            </ul>
            <h3 className="mt-6 font-semibold text-white">Was wir benötigen</h3>
            <ul className="mt-2 text-sm text-slate-300 list-disc pl-5 space-y-1">
              {agent.requirements.map((r) => (<li key={r}>{r}</li>))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white">Typische Dialoge</h3>
            <div className="mt-2 p-4 bg-white rounded-lg border border-gray-200 text-sm text-gray-800 whitespace-pre-line">
              {agent.dialogues.join('\n\n')}
            </div>
            <h3 className="mt-6 font-semibold text-white">ROI-Beispiel</h3>
            <div className="mt-2 p-4 bg-white rounded-lg border border-gray-200 text-sm">
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                {Object.values(agent.roi).map((line) => (<li key={line}>{line}</li>))}
              </ul>
            </div>
            <a href="/preise#pakete" className="mt-4 inline-flex px-4 py-2 rounded-md bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold">Agent jetzt buchen</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Loesungen() {
  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">4 Spezialisierte Agents für Ihr Handwerk</h1>
        <p className="mt-3 text-slate-300 max-w-2xl">Jeder Agent ist Omnichannel (Telefon + Web-Chat) und vorkonfiguriert für Ihre Branche.</p>
      </header>
      <div className="divide-y divide-slate-800">
        {details.map((agent) => (<Section key={agent.key} agent={agent} />))}
      </div>
    </div>
  )
}
