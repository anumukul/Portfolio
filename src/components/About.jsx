import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>

      <div className='max-w-screen-lg p4 mx-auto flex flex-col justify-center w-full h-full'>

        <div className='pb-8'>

            <p className='text-4xl font-bold inline border-b-4 border-gray-500' >About</p>
        </div>

        <p className='text-xl mt-20'>
            I'm Anubhav Singh,and I'm a passionate about all things related to technology and innovation.As a dedicated software engineering enthusiast, I'm curious for developing innovative solutions and exploring emerging technologies.With a profound love for web development,I thrive in creating dynamic and user-centric software experiences.
        </p>

        <br />

        <p className='text-xl'>

          Currently, I'm actively looking for part-time or full-time opportunities where I can apply my passion for software engineering in a dynamic and challenging environment.I'm eager to leverage my skilss and learn from experienced mentors while making meaningful contributions to cutting-edge projects.Feel free to contact me here.
        </p>
      </div>

    </div>
  )
}

export default About