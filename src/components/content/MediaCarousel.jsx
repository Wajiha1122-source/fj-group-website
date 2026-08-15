import "../../styles/components/mediaCarousel.scss"

export default function MediaCarousel({ media, className = "", eager = false }) {
  if (!media?.length) return null

  return (
    <div className={`media-carousel ${className}`.trim()}>
      {media.map((item, index) =>
        item.type === "video" ? (
          <video
            className="media-carousel__slide"
            key={item.src}
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            poster={item.poster}
            aria-label={item.alt}
          >
            <source src={item.src} type="video/mp4" />
          </video>
        ) : (
          <img
            className="media-carousel__slide"
            key={item.src}
            src={item.src}
            alt={item.alt}
            loading={eager && index === 0 ? "eager" : "lazy"}
            decoding="async"
          />
        )
      )}
    </div>
  )
}
