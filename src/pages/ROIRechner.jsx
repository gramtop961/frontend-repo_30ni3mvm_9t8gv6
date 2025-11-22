import { useMemo, useState } from 'react'

function formatEUR(v){
  return v.toLocaleString('de-DE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 })
}

export default function ROIRechner(){
  const [calls, setCalls] = useState(400)
  const [missedPct, setMissedPct] = useState(27)
  const [avgValue, setAvgValue] = useState(350)
  const [noShows, setNoShows] = useState(15)

  const result = useMemo(() => {
    const missed = calls * (missedPct/100)
    const captured = missed * 0.65
    const newJobs = captured * 0.25
    const addedRevenue = newJobs * avgValue

    const preventedNoShows = noShows * 0.70
    const savings = preventedNoShows * 300

    const total = addedRevenue + savings
    const cost = 369
    const roi = total / cost - 1

    return { missed, captured, newJobs, addedRevenue, preventedNoShows, savings, total, cost, roi }
  }, [calls, missedPct, avgValue, noShows])

  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Berechnen Sie Ihren Return on Investment in 30 Sekunden</h1>
      </header>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="p-6 bg-white rounded-xl border border-gray-200">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Monatliches Anrufvolumen (Inbound)</label>
              <input type="range" min={100} max={1000} step={10} value={calls} onChange={e=>setCalls(+e.target.value)} className="w-full" />
              <div className="flex justify-between text-xs text-gray-500"><span>100</span><span>{calls}</span><span>1000+</span></div>
              <p className="text-xs text-gray-500 mt-1">Wie viele Anrufe erhalten Sie durchschnittlich pro Monat?</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Geschätzter Anteil verpasster Anrufe (%)</label>
              <input type="range" min={10} max={50} step={1} value={missedPct} onChange={e=>setMissedPct(+e.target.value)} className="w-full" />
              <div className="flex justify-between text-xs text-gray-500"><span>10%</span><span>{missedPct}%</span><span>50%</span></div>
              <p className="text-xs text-gray-500 mt-1">Branchendurchschnitt: 27%</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Durchschnittlicher Auftragswert (€)</label>
              <input type="number" min={100} max={2000} value={avgValue} onChange={e=>setAvgValue(+e.target.value)} className="w-full border rounded-md px-3 py-2" />
              <p className="text-xs text-gray-500 mt-1">Was ist Ihr typischer Auftragswert?</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">No-Shows pro Monat</label>
              <input type="number" min={0} max={50} value={noShows} onChange={e=>setNoShows(+e.target.value)} className="w-full border rounded-md px-3 py-2" />
              <p className="text-xs text-gray-500 mt-1">Wie viele Kunden erscheinen nicht zu Terminen?</p>
            </div>
          </div>
        </div>
        <div className="p-6 bg-white rounded-xl border border-gray-200">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
              <div className="p-3 bg-gray-50 rounded-lg border"><div className="text-xs text-gray-500">Zusätzliche Anrufe erfasst</div><div className="font-semibold">{Math.round(result.captured)}</div></div>
              <div className="p-3 bg-gray-50 rounded-lg border"><div className="text-xs text-gray-500">Neue Aufträge (25%)</div><div className="font-semibold">{Math.round(result.newJobs)}</div></div>
              <div className="p-3 bg-gray-50 rounded-lg border"><div className="text-xs text-gray-500">No-Shows verhindert (70%)</div><div className="font-semibold">{Math.round(result.preventedNoShows)}</div></div>
              <div className="p-3 bg-gray-50 rounded-lg border"><div className="text-xs text-gray-500">Ersparnis No-Shows</div><div className="font-semibold">{formatEUR(result.savings)}</div></div>
            </div>
            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
              <div className="text-sm text-emerald-900">Monatlicher geschätzter Mehrumsatz</div>
              <div className="text-3xl font-extrabold text-emerald-900">{formatEUR(result.total)}</div>
              <div className="mt-3 text-sm text-gray-700">Kosten VoiceForge Agent: {formatEUR(result.cost)}</div>
              <div className="text-sm text-gray-700">Netto-Gewinn: {formatEUR(result.total - result.cost)}</div>
              <div className="text-sm text-gray-700">Return on Investment: {(result.roi*100).toFixed(0)}% ({(result.total/result.cost).toFixed(1)}:1)</div>
            </div>
            <a href="/demo" className="inline-flex px-5 py-3 rounded-md bg-emerald-500 hover:bg-emerald-600 text-white font-semibold">Demo buchen und echte Zahlen sehen</a>
          </div>
          <p className="mt-3 text-xs text-gray-500">Dies ist eine konservative Schätzung basierend auf Branchendurchschnitten. Individuelle Ergebnisse können abweichen.</p>
        </div>
      </div>
    </div>
  )
}
