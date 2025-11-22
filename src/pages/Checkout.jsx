import { useMemo, useState } from 'react'

const options = [
  { key: 'termin', label: 'Termin-Lead-Agent', price: 369, setup: 1499 },
  { key: 'afterhours', label: 'After-Hours-Hotline', price: 369, setup: 1499 },
  { key: 'reminder', label: 'Outbound-Reminder', price: 369, setup: 1499 },
  { key: 'support', label: 'Service L1/L2 Support', price: 369, setup: 1499 },
]

export default function Checkout(){
  const [selected, setSelected] = useState([])

  const totals = useMemo(() => {
    const monthly = selected.reduce((sum, k) => sum + (options.find(o=>o.key===k)?.price||0), 0)
    const setup = selected.length === 0 ? 0 : (selected.length === 1 ? 1499 : selected.length === 2 ? 2499 : selected.length === 3 ? 3249 : 3999)
    return { monthly, setup }
  }, [selected])

  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const purchase = async () => {
    if(selected.length===0) return
    const body = {
      customer_name: 'Checkout (UI)',
      customer_email: 'checkout@voiceforge.de',
      selection: selected.map(k => ({ agent: k, quantity: 1 })),
      setup_fee: totals.setup,
      monthly_total: totals.monthly,
      notes: 'UI Checkout – Zahlung extern (später via Stripe/Paddle)'
    }
    try{
      await fetch(`${backend}/api/order`, { method: 'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(body) })
      window.location.href = '/danke-kauf'
    }catch(e){
      alert('Fehler beim Absenden. Bitte später erneut versuchen.')
    }
  }

  const toggle = (k) => setSelected(prev => prev.includes(k) ? prev.filter(x=>x!==k) : [...prev, k])

  return (
    <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Jetzt Agent direkt kaufen</h1>
      <p className="mt-2 text-slate-300">Wählen Sie einen oder mehrere Agents. Zahlung erfolgt nach Onboarding-Formular.</p>
      <div className="mt-6 grid sm:grid-cols-2 gap-4">
        {options.map(o => (
          <label key={o.key} className={`p-4 rounded-lg cursor-pointer flex items-start gap-3 card border ${selected.includes(o.key)?'border-emerald-500/70 bg-emerald-900/10':'border-slate-700'}`}>
            <input type="checkbox" className="mt-1 accent-emerald-500" checked={selected.includes(o.key)} onChange={()=>toggle(o.key)} />
            <div>
              <div className="font-semibold text-white">{o.label}</div>
              <div className="text-sm text-slate-300">€{o.price}/Monat • Setup: €{o.setup}</div>
            </div>
          </label>
        ))}
      </div>
      <div className="mt-6 card p-4">
        <div className="flex items-center justify-between">
          <div className="text-slate-300">Monatlich</div>
          <div className="text-xl font-extrabold text-white">€{totals.monthly}</div>
        </div>
        <div className="flex items-center justify-between mt-1">
          <div className="text-slate-300">Setup einmalig</div>
          <div className="text-xl font-extrabold text-white">€{totals.setup}</div>
        </div>
        <button disabled={selected.length===0} onClick={purchase} className="mt-4 w-full btn btn-primary disabled:opacity-50">Jetzt kaufen</button>
        <p className="text-xs text-slate-400 mt-2">Hinweis: Zahlung erfolgt nach Onboarding-Formular.</p>
      </div>
    </div>
  )
}
