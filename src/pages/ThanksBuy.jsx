export default function ThanksBuy(){
  return (
    <div className="max-w-[700px] mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Willkommen bei VoiceForge!</h1>
      <p className="mt-3 text-slate-300">Ihre Bestellung ist eingegangen. Wir freuen uns auf die Zusammenarbeit!</p>
      <div className="mt-6 text-sm text-slate-300 space-y-1">
        <div>• Sie erhalten in Kürze eine E-Mail mit dem Onboarding-Formular</div>
        <div>• Füllen Sie das Formular aus (5-10 Minuten)</div>
        <div>• Wir melden uns innerhalb 24h für den Kick-Off-Call</div>
        <div>• Erwartung: Go-Live in 7-14 Tagen</div>
      </div>
      <p className="mt-4 text-sm text-slate-300">Fragen? support@voiceforge.de</p>
      <div className="mt-8">
        <a href="/" className="btn btn-primary">Zurück zur Startseite</a>
      </div>
    </div>
  )
}
