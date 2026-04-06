import { ExternalLink } from './Icons'

export default function VideoEmbed({ videoId, title }) {
  return (
    <>
      <div className="video-container">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      <div style={{ marginTop: '0.75rem' }}>
        <a href={`https://www.youtube.com/watch?v=${videoId}`} target="_blank" rel="noopener noreferrer" className="card-link">
          <ExternalLink />
          Watch on YouTube
        </a>
      </div>
    </>
  )
}
