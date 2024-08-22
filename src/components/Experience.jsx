import React from 'react'

import Html from "../assets/html.png"
import Github from "../assets/github.png"
import Js from "../assets/javascript.png"
import Node from "../assets/node.png"
import ReactImage from "../assets/react.png"
import Tailwind from "../assets/tailwind.png"
import Express from "../assets/expressJs.png"
import MongoDb from "../assets/MongoDB.png"
import Css from "../assets/css.png"


const Experience = () => {

    const techs=[

        {

            id:1,
            src:Html,
            title:"HTML",
            



        },

        {

            id:2,
            src:Css,
            title:"CSS",
            



        },

        {

            id:3,
            src:Js,
            title:"JavaScript",
            


        },

        {

            id:4,
            src:ReactImage,
            title:"React",
            



        },

        {

            id:5,
            src:Tailwind,
            title:"Tailwind",
           



        },

        {

            id:6,
            src:Express,
            title:"ExpressJs",
           



        },

        {

            id:7,
            src:Node,
            title:"NodeJs",
            



        },

        {

            id:8,
            src:MongoDb,
            title:"MongoDb",
           



        },

        {

            id:9,
            src:Github,
            title:"GitHub",
            



        },
    ]
  return (
    <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>

        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div >
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
                <p className='py-6'>These are the technologies I've worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>




              {

                techs.map(({id,src,title})=>(

                    <div key={id} className=" shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-gray-400">
                        

                    <img src={src} alt="" className='w-20 mx-auto'/>
                    <p className='mt-4'>{title}</p>
                </div>


                ))
              }



             
            </div>
        </div>
    </div>
  )
}

export default Experience