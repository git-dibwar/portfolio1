import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

            <div className='pd-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-20'>
                Persuing B.Tech in CSE from Jorhat Engineering College, Assam, India. I have a keen interest in Data Science and various related tech with it. Simultaneously I'm trying my hands on Front End Development, I like to also do Competitive Coding, participate in Hackathons, etc,.
            </p>
            <br/>
            <p className='text-xl'></p>
        </div>
    </div>
  );
};

export default About;