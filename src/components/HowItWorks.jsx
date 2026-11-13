import { services, notes } from '../data/site'
export default function HowItWorks() {
  return (
    <section id="como-funciona" className="section">
      <h2>O que está incluso</h2>
      <div className="cols">
        {services.map(s => <div key={s.title}><h3>{s.title}</h3><p>{s.text}</p></div>)}
      </div>
      <h2 className="mt">Combinados importantes</h2>
      <div className="cols">
        {notes.map(s => <div key={s.title}><h3>{s.title}</h3><p>{s.text}</p></div>)}
      </div>
    </section>
  )
}
