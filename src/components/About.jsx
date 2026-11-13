import { about, aboutImage } from '../data/site'
export default function About() {
  return (
    <section id="sobre" className="section about">
      <img
        className="about-photo"
        src={aboutImage}
        alt="João Araújo cantando no palco"
        loading="lazy"
      />
      <div>
        <h2>Quem é João Araújo</h2>
        {about.map((t, i) => <p key={i}>{t}</p>)}
      </div>
    </section>
  )
}