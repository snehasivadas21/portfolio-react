import React from 'react'
import {ButtonPrimary,ButtonOutline} from "./Button";
const Hero = () => {
  return (
    <div>
        <section id='home' className='pt-28 lg:pt-36'>
        <div className='container items-center lg:grid lg:grid-cols-2 lg:gap-10'>
            
            {/* LEFT COLUMN */}
            <div>
            <div className='flex items-center gap-3'>
                <figure className='img-box w-15 h-15 rounded-lg'>
                <img src="sneha/images/sneha 1.avif" width={50} height={50} alt="sneha" className='img-cover'/>
                </figure>
                <div className='flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide'>
                <span className='relative w-2 h-2 rounded-full bg-emerald-400'>
                    <span className="absolute w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                </span>
                Available for work
                </div>
            </div>

            <h3 className='headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10'>
                Welcome! I&apos;m Sneha, a professional web developer with a knack for crafting visually stunning and functional websites.
            </h3>

            <div className='flex items-center gap-3'>
                <ButtonPrimary label="Download CV" icon="download" href="sneha/images/S SNEHA (4).pdf" download="sneha_resume"/>
                <ButtonOutline href="#about" label="Scroll down" icon="arrow_downward"/>
            </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className='hidden lg:block'>
            {/* <figure className='w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400 to-65% rounded-[60px] overflow-hidden'> */}
            <figure className='w-[400px] h-[500px] ml-auto bg-gradient-to-t from-sky-400 via-sky-400 to-sky-200 rounded-[40px] overflow-hidden'>

                <img src="sneha/images/sneha 3.avif" width={600} height={600} alt="sneha" className='w-full'/>
            </figure>
            </div>

        </div>
        </section>
    </div>
  )
}

export default Hero
