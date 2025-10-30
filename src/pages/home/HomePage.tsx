import React from 'react'
import { getAsset, getSvg } from '../../utils/assets'
import './css/homepage.css'
import { Link } from 'react-router-dom'
import Carousel from '../../components/ui/carousel/Carousel'
import ArticleCard from '../../components/ui/cards/article/ArticleCard'
import Card from '../../components/ui/cards/card/Card'
import WorkCard from '../../components/ui/cards/card/WorkCard'
import Header from '../../components/ui/header/Header'
import Description from '../../components/ui/header/Description'

const HomePage = () => {

  const workExperience = [
    {
      id: 1,
      role: "Software Engineer",
      company: "Chromosis Tech Pvt. Ltd",
      location: "Hubballi, Karnataka",
      duration: "June 2023 - Present",
      responsibilities: [
        "Designed and developed full-stack web applications using Laravel (backend) and React.js (frontend).",
        "Built and maintained RESTful APIs and implemented CRUD operations for scalable web solutions.",
        "Optimized backend logic and integrated MySQL databases to improve query performance and system efficiency.",
        "Collaborated with cross-functional teams in an Agile environment to deliver high-quality, responsive applications."
      ],
      techStack: ["React.js", "Laravel", "MySQL", "REST API", "Tailwind CSS", "Bootstrap 5"]
    }
  ];

  const articles = [
    {
      date: "October 27, 2025",
      title: "Day 1 of #60DaysOfReactTS — Kicking Off My Full-Stack React Journey",
      description:
        "Today marks the beginning of my 60-day deep dive into React & TypeScript. I’ll be documenting my progress daily — building real-world components, improving TypeScript fluency, and sharing what I learn along the way.",
      linkTitle: "Read Article",
      link: "https://www.linkedin.com/pulse/day-1-60daysofreactts-nikhil-kurane-oumoc/?trackingId=ANV5st%2BlxfEifUcTEGMCig%3D%3D",
    },
    {
      date: "October 28, 2025", // update actual date if known
      title: "Day 2 of #60DaysOfReactTS",
      description: "Continuing my daily React + TypeScript journey — exploring new concepts and building on Day 2.",
      linkTitle: "Read Article",
      link: "https://www.linkedin.com/pulse/day-2-60daysofreactts-nikhil-kurane-n7joc/?trackingId=kmTcBaWe2HtumYTjgulIPg%3D%3D"
    },
    {
      date: "October 29, 2025", // update actual date if known
      title: "Day 3 of #60DaysOfReactTS — I built a small timer app in React & taught myself …",
      description: "On Day 3 I built a timer app using React + TS — hands-on learning in action.",
      linkTitle: "Read Article",
      link: "https://www.linkedin.com/pulse/day-3-60daysofreactts-i-built-small-timer-app-react-taught-kurane-a3i1c/?trackingId=pFMQdxghCCs4NnrwPGiL9Q%3D%3D"
    },
    {
      date: "October 30 2025", // update actual date if known
      title: "Day 4 of #60DaysOfReactTS",
      description: "Day 4 of the challenge: advancing my React/TS stack and building more features.",
      linkTitle: "Read Article",
      link: "https://www.linkedin.com/pulse/day-4-60daysofreactts-nikhil-kurane-afyzc/?trackingId=FLja0SzziW1bLl4OC7Rb2g%3D%3D"
    }
  ];






  return (
    <section className='container'>
      {/* profile container */}


      <div className='flex flex-col gap-[1.8rem]'>
        {/* image */}
        <div className='profile-img'>
          <img src={getAsset('image-10', 'jpeg')} alt="" />
        </div>
        {/* heading */}

        <Header
          title={"Full-Stack Developer and UI Enthusiast"}
        />
        {/* description */}
        <Description
          description={"I’m Nikhil Kurane, a developer who loves building web and mobile apps that are fast, simple, and easy to use. I work mainly with React, Node.js, and Laravel to turn ideas into real, scalable products. My goal is to create clean, user-friendly experiences that make a difference."}
        />
        {/* icons */}
        <div className='flex gap-[1.2rem]'>
          {/* <Link to="/">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"><path d="M13.3174 10.7749L19.1457 4H17.7646L12.7039 9.88256L8.66193 4H4L10.1122 12.8955L4 20H5.38119L10.7254 13.7878L14.994 20H19.656L13.3171 10.7749H13.3174ZM11.4257 12.9738L10.8064 12.0881L5.87886 5.03974H8.00029L11.9769 10.728L12.5962 11.6137L17.7652 19.0075H15.6438L11.4257 12.9742V12.9738Z"></path></svg>
          </Link > */}
          <Link to="https://www.instagram.com/reels/DQWs40nAnd3/">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"><path d="M12 3c-2.444 0-2.75.01-3.71.054-.959.044-1.613.196-2.185.418A4.412 4.412 0 0 0 4.51 4.511c-.5.5-.809 1.002-1.039 1.594-.222.572-.374 1.226-.418 2.184C3.01 9.25 3 9.556 3 12s.01 2.75.054 3.71c.044.959.196 1.613.418 2.185.23.592.538 1.094 1.039 1.595.5.5 1.002.808 1.594 1.038.572.222 1.226.374 2.184.418C9.25 20.99 9.556 21 12 21s2.75-.01 3.71-.054c.959-.044 1.613-.196 2.185-.419a4.412 4.412 0 0 0 1.595-1.038c.5-.5.808-1.002 1.038-1.594.222-.572.374-1.226.418-2.184.044-.96.054-1.267.054-3.711s-.01-2.75-.054-3.71c-.044-.959-.196-1.613-.419-2.185A4.412 4.412 0 0 0 19.49 4.51c-.5-.5-1.002-.809-1.594-1.039-.572-.222-1.226-.374-2.184-.418C14.75 3.01 14.444 3 12 3Zm0 1.622c2.403 0 2.688.009 3.637.052.877.04 1.354.187 1.67.31.421.163.72.358 1.036.673.315.315.51.615.673 1.035.123.317.27.794.31 1.671.043.95.052 1.234.052 3.637s-.009 2.688-.052 3.637c-.04.877-.187 1.354-.31 1.67-.163.421-.358.72-.673 1.036a2.79 2.79 0 0 1-1.035.673c-.317.123-.794.27-1.671.31-.95.043-1.234.052-3.637.052s-2.688-.009-3.637-.052c-.877-.04-1.354-.187-1.67-.31a2.789 2.789 0 0 1-1.036-.673 2.79 2.79 0 0 1-.673-1.035c-.123-.317-.27-.794-.31-1.671-.043-.95-.052-1.234-.052-3.637s.009-2.688.052-3.637c.04-.877.187-1.354.31-1.67.163-.421.358-.72.673-1.036.315-.315.615-.51 1.035-.673.317-.123.794-.27 1.671-.31.95-.043 1.234-.052 3.637-.052Z"></path><path d="M12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-7.622a4.622 4.622 0 1 0 0 9.244 4.622 4.622 0 0 0 0-9.244Zm5.884-.182a1.08 1.08 0 1 1-2.16 0 1.08 1.08 0 0 1 2.16 0Z"></path></svg>
          </Link >
          <Link to="http://github.com/nikhil8808">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"></path></svg>
          </Link >
          <Link to="https://www.linkedin.com/in/nikhil-kurane-60b962371/">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"><path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"></path></svg>
          </Link >


        </div>
      </div>
      {/* gallery */}

      <Carousel
        images={[
          getAsset('image-5', 'jpeg'),
          getAsset('image-2', 'jpeg'),
          getAsset('image-6', 'jpeg'),

          getAsset('image-8', 'jpeg'),
          getAsset('image-4', 'jpeg'),
          getAsset('image-9', 'jpeg'),

        ]}

      />
      <div className='flex flex-col md:flex-row'>
        {/* articles section */}
        <div className='flex flex-wrap gap-1 md:w-[60%]'>
          {articles?.map((article, index) => {
            return <ArticleCard
              key={index}
              date={article?.date}
              title={article?.title}
              description={article?.description}
              linkTitle={article?.linkTitle}
              link={article?.link}
            />
          })}

        </div>
        <div className='md:w-[40%] '>
          {/* get in touch section*/}
          <div className='hidden'>


            <Card
              title={`Contact Me`}
              icon={<>
                <svg viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" className="h-6 w-6 flex-none"><path d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z" className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"></path><path d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6" className="stroke-zinc-400 dark:stroke-zinc-500"></path></svg>
              </>}
              body={<>
                <div className='card-body'>
                  <p className='card-description'>Get notified when I publish something new, and unsubscribe at any time.</p>
                  <div className='input-container'>
                    <input type="text" className='input' placeholder='Email Address' />
                    <button className='join-btn'>Join</button>
                  </div>

                </div>

              </>}

            />
          </div>

          {/* work  section */}
          <Card
            title={`Work`}
            icon={<>
              <svg viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" className="h-6 w-6 flex-none"><path d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z" className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"></path><path d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5" className="stroke-zinc-400 dark:stroke-zinc-500"></path></svg>
            </>}
            body={<>
              <div className='card-body'>
                {workExperience?.map((work) => {

                  return (<WorkCard
                    key={work?.id}
                    company_name={work?.company}
                    role={work?.role}
                    duration={work?.duration}

                  />)



                })}
                <div className='flex'>
                  <a className='flex justify-center download-cv bg-gray-100 w-full py-1 rounded-md no-underline' href="/Nikhil_Kurane_FullStack_Resume.pdf" download>
                    <div className='flex items-center gap-1'>
                      <span className=' text-base'>Download CV </span>
                      <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="h-5 w-5 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50"><path d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    </div>
                  </a>
                </div>

              </div>
            </>}

          />

        </div>

      </div>




    </section>
  )
}

export default HomePage