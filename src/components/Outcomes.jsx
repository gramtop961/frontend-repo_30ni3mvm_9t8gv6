export default function Outcomes() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Messbare Ergebnisse für Ihr Unternehmen</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-xl border border-gray-200 text-center">
            <div className="text-4xl font-extrabold text-gray-900">€12k-18k</div>
            <div className="mt-2 text-gray-600">Zusätzlicher monatlicher Umsatz</div>
          </div>
          <div className="p-6 bg-white rounded-xl border border-gray-200 text-center">
            <div className="text-4xl font-extrabold text-gray-900">70%</div>
            <div className="mt-2 text-gray-600">No-Show-Reduktion</div>
          </div>
          <div className="p-6 bg-white rounded-xl border border-gray-200 text-center">
            <div className="text-4xl font-extrabold text-gray-900">27%</div>
            <div className="mt-2 text-gray-600">Mehr beantwortete Anrufe</div>
          </div>
        </div>
        <div className="mt-10 p-6 bg-white rounded-xl border border-gray-200 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Berechnen Sie Ihren Return on Investment</h3>
            <p className="text-gray-600">Wie viel Umsatz verschenken Sie aktuell? Finden Sie es in 30 Sekunden heraus.</p>
          </div>
          <a href="/roi-rechner" className="mt-4 sm:mt-0 inline-flex justify-center px-5 py-3 rounded-md bg-emerald-500 hover:bg-emerald-600 text-white font-semibold">ROI jetzt berechnen</a>
        </div>
      </div>
    </section>
  )
}
