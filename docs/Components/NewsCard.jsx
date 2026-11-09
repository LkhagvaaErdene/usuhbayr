function NewsCard({ title, description, date, image, link }) {
  return (
    <article className="news-card">
      <div className="news-image">
        {image ? (
          <img src={image} alt={title} />
        ) : (
          "МЭДЭЭ"
        )}
      </div>

      <div className="news-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <span>{date}</span>

        {link && (
          <a href={link} className="news-link">
            Дэлгэрэнгүй
          </a>
        )}
      </div>
    </article>
  )
}

export default NewsCard