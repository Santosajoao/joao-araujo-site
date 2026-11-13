import { useEffect, useState } from 'react'
import { contact, plans } from '../data/site'
const initial = { name: '', date: '', city: '', type: '', plan: '', msg: '', guests: '' }
export default function BookingForm() {
  const [f, setF] = useState(initial)
  const set = k => e => setF(s => ({ ...s, [k]: e.target.value }))
  useEffect(() => {
    const h = e => setF(s => ({ ...s, plan: e.detail }))
    window.addEventListener('select-plan', h)
    return () => window.removeEventListener('select-plan', h)
  }, [])
  const submit = e => {//quero formatar a data para dd/mm/aaaa
    e.preventDefault()
    const plan = plans.find(p => p.id === f.plan)?.name || 'Ainda não sei'
    const text = `Olá, João! Gostaria de um orçamento.\n\nNome: ${f.name}\nData do evento: ${f.date ? new Date(f.date).toLocaleDateString() : 'a definir'}\nCidade: ${f.city}\nTipo de evento: ${f.type}\nFormação: ${plan}${f.msg ? `\nObservações: ${f.msg}` : ''}\nNúmero de convidados: ${f.guests}`
    window.open(`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener')
  }
  return (
    <section id="orcamento" className="section booking">
      <div>
        <h2>Peça seu orçamento</h2>
        <p className="lead">Preencha os dados e a conversa abre no WhatsApp com tudo pronto.</p>
        <p>WhatsApp: <a href={`https://wa.me/${contact.whatsapp}`}>{contact.whatsappLabel}</a></p>
        <p>E-mail: <a href={`mailto:${contact.email}`}>{contact.email}</a></p>
        <p>Instagram: <a href={`https://instagram.com/${contact.instagram}`} target="_blank" rel="noopener noreferrer">@{contact.instagram}</a></p>
      </div>
      <form onSubmit={submit}>
        <label>Seu nome<input required value={f.name} onChange={set('name')} autoComplete="name" /></label>
        <label>Data do evento<input type="date" value={f.date} onChange={set('date')} /></label>
        <label>Cidade do evento<input required value={f.city} onChange={set('city')} /></label>
        <label>Número de convidados<input required type="number" value={f.guests} onChange={set('guests')} /></label>
        <label>Tipo de evento<input required placeholder="Casamento, rodeio, festa..." value={f.type} onChange={set('type')} /></label>
        <label>Formação
          <select value={f.plan} onChange={set('plan')}>
            <option value="">Ainda não sei</option>
            {plans.map(p => <option key={p.id} value={p.id}>{p.name} </option>)}
          </select>
        </label>
        <label>Observações<textarea rows="3" value={f.msg} onChange={set('msg')} /></label>
        <button className="btn" type="submit">Enviar pelo WhatsApp</button>
      </form>
    </section>
  )
}
