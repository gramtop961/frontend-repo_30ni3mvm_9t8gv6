export default function ThanksDemo(){
  return (
    <div className="max-w-[700px] mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Vielen Dank für Ihre Demo-Anfrage!</h1>
      <p className="mt-3 text-slate-300">Wir haben Ihre Buchung erhalten. Sie bekommen in Kürze eine Bestätigungsmail mit allen Details.</p>
      <div className="mt-6 text-sm text-slate-300 space-y-1">
        <div>• Prüfen Sie Ihre E-Mails (auch Spam).</div>
        <div>• Bereiten Sie Fragen vor (was möchten Sie wissen?).</div>
        <div>• Wir melden uns spätestens 24h vor dem Termin nochmal.</div>
      </div>
      <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
        <a href="/" className="btn btn-primary">Zurück zur Startseite</a>
        <a href="/roi-rechner" className="btn btn-outline">ROI-Rechner ausprobieren</a>
      </div>
    </div>
  )
}
