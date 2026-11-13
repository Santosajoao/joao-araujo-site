import { useState } from 'react'
export default function VideoCard({ video }) {
  const [playing, setPlaying] = useState(false)
  const ratio = video.vertical ? '9 / 16' : '16 / 9'
  const youtubeId = video.type === 'youtube' ? video.src.split('?')[0] : null
  const thumb = video.type === 'youtube' ? `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg` : video.poster
  return (
    <figure className={`video ${video.vertical ? 'video-v' : 'video-h'}`} style={{ aspectRatio: ratio }}>
      {!playing ? (
        <button className="video-play" onClick={() => setPlaying(true)} style={{ backgroundImage: `url(${thumb})` }} aria-label={`Reproduzir: ${video.title}`}>
          <span className="play-icon" aria-hidden="true">▶</span>
        </button>
      ) : video.type === 'youtube' ? (
        <iframe src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`} title={video.title} allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen />
      ) : (
        <video src={video.src} poster={video.poster} controls autoPlay playsInline />
      )}
      <figcaption>{video.title}</figcaption>
    </figure>
  )
}
