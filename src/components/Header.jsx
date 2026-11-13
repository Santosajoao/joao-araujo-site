const links = [['Sobre', '#sobre'], ['Vídeos', '#videos'], ['Formações', '#formacoes'], ['Como funciona', '#como-funciona']]
export default function Header() {
  return (
    <header className="header">
      <a href="#topo" className="logo">
        <img src="/images/logo.png" alt="João Araújo" />
      </a>
      <nav aria-label="Principal">
        {links.map(([l, h]) => <a key={h} href={h} className="nav-link">{l}</a>)}
      </nav>
      <a className="btn btn-sm" href="#orcamento">Pedir orçamento</a>
    </header>
  )
}
