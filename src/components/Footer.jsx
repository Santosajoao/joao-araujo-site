import { contact } from '../data/site'
export default function Footer() {
  return <footer className="footer"><span>© {new Date().getFullYear()} {contact.name}</span><a href={`https://instagram.com/${contact.instagram}`} target="_blank" rel="noopener noreferrer">@{contact.instagram}</a></footer>
}
