import { heroImage } from '../data/site'
export default function Hero() {
  return (
    <section id="topo" className="hero">
      <div className="hero-text">
        <h1>Sertanejo que faz o seu evento cantar do início ao fim.</h1>
        <p>Voz e violão, banda reduzida ou banda completa para casamentos, rodeios, casas de show e eventos corporativos.</p>
        <div className="row">
          <a className="btn" href="#orcamento">Pedir orçamento</a>
          <a className="btn btn-ghost" href="#videos">Ver o show</a>
        </div>
      </div>
      <div className="hero-photo" style={{ backgroundImage: `url(${heroImage})` }} role="img" aria-label="João Araújo no palco" />
    </section>
  )
}
