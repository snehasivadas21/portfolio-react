import React from 'react'
import ProjectCard from './ProjectCard';


const works = [
  {
    imgSrc: 'sneha/images/project-1.jpg',
    title: 'Full stack Bus Booking app',
    tags: ['DRF', 'React'],
    projectLink: 'https://github.com/snehasivadas21/booking-app'
  },
  {
    imgSrc: 'sneha/images/project-2.jpg',
    title: 'User management',
    tags: ['DRF', 'React-Redux'],
    projectLink: 'https://github.com/snehasivadas21/user-management'
  },
  {
    imgSrc: 'sneha/images/project-3.png',
    title: 'OLX',
    tags: ['React', 'API'],
    projectLink: 'https://github.com/snehasivadas21/olx-react'
  },
  {
    imgSrc: 'sneha/images/project-4.png',
    title: 'Netflix',
    tags: ['Firebase', 'React'],
    projectLink: 'https://github.com/snehasivadas21/netflix-react'
  },
  {
    imgSrc: 'sneha/images/project-5.png',
    title: 'eCommerce website',
    tags: ['Django', 'HTML','CSS'],
    projectLink: 'https://github.com/snehasivadas21/jewellery'
  },
  {
    imgSrc: 'sneha/images/project-6.jpg',
    title: 'Personal portfolio',
    tags: ['Web-design', 'Development'],
    projectLink: 'https://github.com/snehasivadas21/portfolio'
  },
];

const Work = () => {
  return (
    <div>
      <section id="work" className="section">
      <div className='container'>
        <h2 className="headline-2 mb-8 reveal-up">
            My portfolio highlights
        </h2>
        <div className='grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]'>
             {works.map(({imgSrc,title,tags,projectLink},key)=>(
                <ProjectCard key={key} imgSrc={imgSrc} title={title} tags={tags}  projectLink={projectLink} classes="reveal-up" />
             ))}
        </div>
      </div>
      </section>
    </div>
  )
}

export default Work
