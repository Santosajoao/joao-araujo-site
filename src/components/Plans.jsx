import { plans } from '../data/site'
export default function Plans() {
  return (
    <section id="formacoes" className="section">
      <h2>Formações e investimento</h2>
      <p className="lead">Escolha o formato que combina com o seu evento. Valores de referência, sujeitos à data e local.</p>
      <div className="plans">
        {plans.map(p => (
          <article key={p.id} className={`plan ${p.featured ? 'plan-featured' : ''}`}>
            <h3>{p.name}</h3>
            <p className="price">{p.price}</p>
            <p><strong>Formação:</strong> {p.lineup}</p>
            <p>{p.ideal}</p>
            <a className="btn btn-sm" href="#orcamento" onClick={() => window.dispatchEvent(new CustomEvent('select-plan', { detail: p.id }))}>Quero este formato</a>
          </article>
        ))}
      </div>
    </section>
  )
}
