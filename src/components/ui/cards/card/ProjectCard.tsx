import React from 'react'
import './css/project_card.css'

interface ProjectCardProps {
  image?: string
  title?: string
  description?: string
  linkText?: string
  linkHref?: string
}

const ProjectCard = ({
  image,
  title = 'Planetaria',
  description = 'Creating technology to empower civilians to explore space on their own terms.',
  linkText = 'planetaria.tech',
  linkHref = '#',
}: ProjectCardProps) => {
  return (
    <article className="pc-card md:w-[40%]">
      <div className="pc-avatar">
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={image} alt={title} />
        ) : (
          <div className="pc-avatar-fallback" aria-hidden="true">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" fill="#6B21A8" />
              <path d="M6 12C8.5 9 12 7 16 6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        )}
      </div>

      <div className="pc-body">
        <h4 className="pc-title">{title}</h4>
        <p className="pc-desc">{description}</p>
       {
        linkHref && <>
        <a className="pc-link" href={linkHref} target="_blank" rel="noreferrer">
          <span className="pc-link-icon" aria-hidden="true">🔗</span>
          <span className="pc-link-text">{linkText}</span>
        </a>
        
        </>
       }
  
      </div>
    </article>
  )
}

export default ProjectCard