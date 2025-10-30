import Header from "../../components/ui/header/Header"
import Description from "../../components/ui/header/Description"
import ProjectCard from "../../components/ui/cards/card/ProjectCard"
import type { ReactNode } from "react"

interface Project {
  title: string;
  description: string;
  github: string;
  icon: ReactNode;
}

export default function ProjectsPage() {

  const projects: Project[] = [
    {
      title: "University Intelligence",
      description:
        "A digital marketing analytics platform for universities to manage campaigns across Google, Facebook, and LinkedIn.",
      github: "",
      icon: "🎓",
    },
    {
      title: "Bagstore Management System",
      description:
        "A store management solution for automating sales, inventory, and daily logs using React and Node.js.",
      github: "",
      icon: "👜",
    },
    {
      title: "Developer Portfolio",
      description:
        "A personal portfolio website built with React and Tailwind CSS inspired by Tailwind UI Spotlight.",
      github: "",
      icon: "💼",
    },
  ]



  return (
    <section className="px-6 py-[3rem] ">
      <div >
        <div className="flex flex-col gap-[2rem]">
          <Header title="Things I’ve made trying to put my dent in the universe." />
          <Description description="I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved." />
        </div>

        <div className="py-[3rem] flex flex-col gap-[3rem] md:flex-row md:flex-wrap md:gap-[2rem] md:justify-start">

          {projects?.map((project) => {
            return <ProjectCard
              title={project?.title}
              description={project?.description}
              linkText={''}
              linkHref={project?.github}

            />
          })}



        </div>
      </div>



    </section>
  )
}
