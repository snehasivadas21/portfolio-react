import React from 'react'
import SkillCard from './SkillCard';

const skillItem = [
  {
    imgSrc: 'sneha/images/figma.svg',
    label: 'Figma',
    desc: 'Design tool'
  },
  {
    imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    label: 'Python',
    desc: 'Programming Language',
  },
  {
    imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    label: 'PostgreSQL',
    desc: 'Database',
  },
  {
    imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
    label: 'Django',
    desc: 'Web Framework',
  },
  {
    imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
    label: 'FastAPI',
    desc: 'Modern Python API',
  },
  {
    imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
    label: 'Redux',
    desc: 'State Management'
  },
  {
    imgSrc: 'sneha/images/javascript.svg',
    label: 'JavaScript',
    desc: 'Interaction'
  },
  {
    imgSrc: 'sneha/images/mongodb.svg',
    label: 'MongoDB',
    desc: 'Database'
  },
  {
    imgSrc: 'sneha/images/react.svg',
    label: 'React',
    desc: 'Library'
  },
  {
    imgSrc: 'sneha/images/tailwindcss.svg',
    label: 'TailwindCSS',
    desc: 'User Interface'
  },
  {
    imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
    label: 'Firebase',
    desc: 'Backend as a Service'
  },
  {
    imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
    label: 'AWS',
    desc: 'Cloud Hosting'
  },
  {
  imgSrc: 'https://www.postman.com/assets/logos/postman-logo-stacked.svg',
  label: 'Postman',
  desc: 'API Testing & Debugging'
  },
  {
    imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
    label: 'C',
    desc: 'Programming Language'
  },
  {
    imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    label: 'Git',
    desc: 'Version Control'
  },
];

const Skills = () => {
  return (
    <div>
      <section className='section'>
        <div class="container">
            <h2 className='headline-2 reveal-up'>
                Essential Tools I use
            </h2>
            <p className='text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up'>
                Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
            </p>
            <div className='grid gap-3 grid-cols-[repeat (auto-fill,_minmax(250px,_1fr))]'>
                {skillItem.map(({imgSrc,label,desc},key)=>(
                  <SkillCard key={key} imgSrc={imgSrc} label={label} desc={desc} classes="reveal-up"/>
                ))}
            </div>
        </div>

      </section>
    </div>
  )
}

export default Skills
