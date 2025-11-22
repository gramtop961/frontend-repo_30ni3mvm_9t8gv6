import { useState } from 'react'

export default function Demo(){
  const [form, setForm] = useState({ name: '', email: '', company: '', phone: '', interest: '', message: '' })
  const [status, setStatus] = useState(null)
  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const submit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(`${backend}/api/demo`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form)
      })
      if(!res.ok) throw new Error('Fehler beim Senden')
      setStatus('ok')
      window.location.href = '/danke-demo'
    } catch (e) {
      setStatus('error')
    }
  }

  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Vereinbaren Sie einen kostenlosen Demo-Termin</h1>
          <div className="mt-6 grid sm:grid-cols-2 gap-4 text-sm text-slate-300">
            <div>• Analyse Ihrer aktuellen Situation (5 Min)</div>
            <div>• Live-Demo mit echten Daten von Ihrer Website (15 Min)</div>
            <div>• Erster Prototyp-Einblick</div>
            <div>• Individuelles Angebot mit ROI-Kalkulation</div>
          </div>
          <div className="mt-6">
            <iframe className="w-full h-[420px] rounded-lg border border-gray-200 bg-white" src="https://cal.com/flames-blue/30min?hide_event_type_details=true&primary_color=10b981" title="Demo buchen"></iframe>
            <div className="text-xs text-slate-400 mt-2">Alternativ: Schreiben Sie uns über das Formular.</div>
          </div>
        </div>
        <form onSubmit={submit} className="p-6 bg-white rounded-xl border border-gray-200 space-y-3">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input required className="w-full border rounded-md px-3 py-2" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">E-Mail</label>
            <input required type="email" className="w-full border rounded-md px-3 py-2" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-gray-700">Unternehmen</label>
              <input className="w-full border rounded-md px-3 py-2" value={form.company} onChange={e=>setForm({...form, company:e.target.value})} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Telefon</label>
              <input className="w-full border rounded-md px-3 py-2" value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Agent-Interesse</label>
            <select className="w-full border rounded-md px-3 py-2" value={form.interest} onChange={e=>setForm({...form, interest:e.target.value})}>
              <option value="">Bitte wählen</option>
              <option>Termin-Lead-Agent</option>
              <option>After-Hours-Hotline</option>
              <option>Outbound-Reminder</option>
              <option>Service L1/L2 Support</option>
              <option>Multi-Agent-Paket</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Nachricht</label>
            <textarea rows={4} className="w-full border rounded-md px-3 py-2" value={form.message} onChange={e=>setForm({...form, message:e.target.value})} />
          </div>
          <button disabled={status==='sending'} className="w-full px-5 py-3 rounded-md bg-emerald-500 hover:bg-emerald-600 text-white font-semibold">Demo-Termin jetzt buchen</button>
          {status==='error' && <p className="text-sm text-red-600">Senden fehlgeschlagen. Bitte später erneut versuchen.</p>}
        </form>
      </div>
    </div>
  )
}
