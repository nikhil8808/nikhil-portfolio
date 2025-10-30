
import './css/education.css'
import Header from '../../components/ui/header/Header'
import Description from '../../components/ui/header/Description'

const EducationPage = () => {
  const education = [
    {
      degree: "Bachelor of Engineering in Computer Science",
      institution: "KLE Technological University, Hubli",
      duration: "2020 – 2023",
      description:
        "Focused on software development, algorithms, and modern web technologies. Worked on full-stack projects and research related to scalable web applications.",
    },
    {
      degree: "Diploma in Computer Science",
      institution: "Government Polytechnic, Athani",
      duration: "2017-2020",
      description:
        "Learned the foundations of programming, database management, and system design while developing small-scale applications and utilities.",
    },
  ]

  return (
   <section className='container'>
    <div className='flex flex-col gap-[1.8rem]'>
      <Header
      title='Education'
      />
      <Description
      description='My academic journey has built a strong foundation in computer science and full-stack development.
        Through hands-on projects and structured learning, I developed the technical and problem-solving
        skills that power my work as a software engineer today.' 

      />

    </div>

      <div className="my-[4rem] flex flex-col gap-[3rem]">
        {education.map((edu) => (
          <article className="edu-card md:w-[60%] w-full px-[2rem] py-[1rem]" key={edu.degree}>
            <header className="edu-meta">
              <span className="edu-date">{edu.duration}</span>
            </header>

            <h3 className="edu-title">{edu.degree}</h3>
            <p className="edu-institution">{edu.institution}</p>

            <p className="edu-desc">{edu.description}</p>

            <div className="edu-link">
              {/* <a href="#" className="read-link">Read article</a> */}
            </div>
          </article>
        ))}
      </div>



   </section>
  )
}

export default EducationPage