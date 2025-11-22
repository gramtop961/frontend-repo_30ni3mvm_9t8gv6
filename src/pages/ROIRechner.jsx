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
        <p className="mt-2 text-slate-300">Zahlen anpassen und live den Effekt sehen.</p>
      </header>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="card p-6">
          <div className="space-y-6">
            <div>
              <label className="label">Monatliches Anrufvolumen (Inbound)</label>
              <input type="range" min={100} max={1000} step={10} value={calls} onChange={e=>setCalls(+e.target.value)} className="w-full" />
              <div className="flex justify-between text-xs text-slate-400"><span>100</span><span className="text-white font-semibold">{calls}</span><span>1000+</span></div>
              <p className="text-xs text-slate-400 mt-1">Wie viele Anrufe erhalten Sie durchschnittlich pro Monat?</p>
            </div>
            <div>
              <label className="label">Geschätzter Anteil verpasster Anrufe (%)</label>
              <input type="range" min={10} max={50} step={1} value={missedPct} onChange={e=>setMissedPct(+e.target.value)} className="w-full" />
              <div className="flex justify-between text-xs text-slate-400"><span>10%</span><span className="text-white font-semibold">{missedPct}%</span><span>50%</span></div>
              <p className="text-xs text-slate-400 mt-1">Branchendurchschnitt: 27%</p>
            </div>
            <div>
              <label className="label">Durchschnittlicher Auftragswert (€)</label>
              <input type="number" min={100} max={2000} value={avgValue} onChange={e=>setAvgValue(+e.target.value)} className="input" />
              <p className="text-xs text-slate-400 mt-1">Was ist Ihr typischer Auftragswert?</p>
            </div>
            <div>
              <label className="label">No-Shows pro Monat</label>
              <input type="number" min={0} max={50} value={noShows} onChange={e=>setNoShows(+e.target.value)} className="input" />
              <p className="text-xs text-slate-400 mt-1">Wie viele Kunden erscheinen nicht zu Terminen?</p>
            </div>
          </div>
        </div>
        <div className="card p-6">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4 text-sm text-slate-300">
              <div className="p-3 rounded-lg border border-slate-700 bg-[#0b1220]">
                <div className="text-xs text-slate-400">Zusätzliche Anrufe erfasst</div>
                <div className="font-semibold text-white">{Math.round(result.captured)}</div>
              </div>
              <div className="p-3 rounded-lg border border-slate-700 bg-[#0b1220]">
                <div className="text-xs text-slate-400">Neue Aufträge (25%)</div>
                <div className="font-semibold text-white">{Math.round(result.newJobs)}</div>
              </div>
              <div className="p-3 rounded-lg border border-slate-700 bg-[#0b1220]">
                <div className="text-xs text-slate-400">No-Shows verhindert (70%)</div>
                <div className="font-semibold text-white">{Math.round(result.preventedNoShows)}</div>
              </div>
              <div className="p-3 rounded-lg border border-slate-700 bg-[#0b1220]">
                <div className="text-xs text-slate-400">Ersparnis No-Shows</div>
                <div className="font-semibold text-white">{formatEUR(result.savings)}</div>
              </div>
            </div>
            <div className="p-4 rounded-lg border border-emerald-600/40 bg-emerald-900/10">
              <div className="text-sm text-emerald-300">Monatlicher geschätzter Mehrumsatz</div>
              <div className="text-3xl font-extrabold text-white">{formatEUR(result.total)}</div>
              <div className="mt-3 text-sm text-slate-300">Kosten VoiceForge Agent: {formatEUR(result.cost)}</div>
              <div className="text-sm text-slate-300">Netto-Gewinn: {formatEUR(result.total - result.cost)}</div>
              <div className="text-sm text-slate-300">Return on Investment: {(result.roi*100).toFixed(0)}% ({(result.total/result.cost).toFixed(1)}:1)</div>
            </div>
            <a href="/demo" className="btn btn-primary">Demo buchen und echte Zahlen sehen</a>
          </div>
          <p className="mt-3 text-xs text-slate-400">Dies ist eine konservative Schätzung basierend auf Branchendurchschnitten. Individuelle Ergebnisse können abweichen.</p>
        </div>
      </div>
    </div>
  )
}
