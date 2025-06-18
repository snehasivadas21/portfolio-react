import React from 'react'

const aboutItems = [
  {
    label: 'Project done',
    number: 10
  },
  {
    label: 'Years of experience',
    number: 1
  }
];

const About = () => {
  return (
    <div>
      <section
      id='about'
      className='section'>
      <div className='container'>
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-21 reveal-up">
          <div className="text-zinc-300 space-y-5 md:text-xl md:max-w-[60ch]">
            <p>
              I specialize in both frontend and backend development, with a strong focus on building full-stack web applications.
            </p>
            <p>
              On the <span className="text-sky-400 font-medium">frontend</span>, I primarily use <strong>React.js</strong> to build clean, responsive interfaces with <strong>Tailwind CSS</strong>. I manage application state using <strong>Redux</strong> and have integrated tools like <strong>Firebase</strong> for authentication and hosting.
            </p>
            <p>
              On the <span className="text-sky-400 font-medium">backend</span>, I’m proficient with <strong>Django</strong> and <strong>Django Rest Framework (DRF)</strong> for building secure APIs, along with <strong>FastAPI</strong> for lightweight services. I work with <strong>PostgreSQL</strong>, OTP-based login, and <strong>Google OAuth</strong> integration.
            </p>
            <p>
              I transform ideas into digital products that balance design and performance. 
            </p>
          </div>
          <div className='flex flex-wrap items-center gap-4 md:gap-7'>
            {
              aboutItems.map(({label,number},key)=>(
                  <div key={key}>
                      <div className='flex items-center md:mb-2'>
                        <span className='text-2xl font-semibold md:text-4xl'>{number}</span>
                        <span className='text-sky-400 font-semibold md:text-3xl'>+</span>
                      </div>
                      <p className='text-sm text-zinc-400'>{label}</p>
                  </div>
              ))
            }
            <img src="sneha/images/logo.svg" alt="logo" width={30} height={30} className='ml-auto md:w-[40px] md:h-[40px]'/>
          </div>
        </div>
      </div>
      </section>
    </div>
  )
}

export default About
