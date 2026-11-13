import { videos } from '../data/site'
import VideoCard from './VideoCard'
export default function VideoGallery() {
  return (
    <section id="videos" className="section">
      <h2>Veja como é o show</h2>
      <p className="lead">Takes de apresentações reais, para você sentir o clima antes de contratar.</p>
      <div className="video-grid">
        {videos.map(v => <VideoCard key={v.id} video={v} />)}
      </div>
    </section>
  )
}
