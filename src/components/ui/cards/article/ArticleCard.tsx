import React from 'react'
import { Link } from 'react-router-dom'
import './css/article.css'

interface ArticleCardProps {
  date: string
  title: string
  description: string
  linkTitle: string
  link: string
}

const ArticleCard = ({ date, title, description, linkTitle, link }: ArticleCardProps) => {
  return (
    <article className="article-card ">
      <div className="meta flex gap-2">
        <span className="date-bar  w-[5px] h-[2rem]" aria-hidden="true" />
        <time className="date">{date}</time>
      </div>

      <h5 className="title ">{title}</h5>

      <p className="description">{description}</p>

      <div className="link-container">
        <Link className="link" to={link} aria-label={linkTitle}>
          {linkTitle}
        </Link>
      </div>
    </article>
  )
}

export default ArticleCard