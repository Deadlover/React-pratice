import React, { useState } from 'react'

export default function About() {

    const [dark,setdark]=useState({
        'color':'black',
        'backgroundcolor':'white'
    })
    const darkmode = ()=>{
        if(dark.color==='black'){
        setdark({'color':'white',
        'backgroundColor':' black'})
    }
    else{
        setdark({'color':'black',
        'backgroundcolor':'white'})
    }
    }
    return (
        <div  style={dark} >
            <h1 className='capitalize text-medium ' style={dark}> about</h1>
            <div className='w-full h-2/4'>
                <div className='p-10'>

                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati accusantium, reiciendis rerum qui
                    eos eius sint molestiae autem, dolor assumenda cum repellendus fugit in quam, aliquam voluptatibus minima mollitia at.

                </div>
                <div className='p-10'>

                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati accusantium, reiciendis rerum qui eos eius sint molestiae
                    autem, dolor assumenda cum repellendus fugit in quam, aliquam voluptatibus minima mollitia at.
                </div>
                <div className='p-10'>

                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati accusantium, reiciendis rerum qui eos eius sint molestiae
                    autem, dolor assumenda cum repellendus fugit in quam, aliquam voluptatibus minima mollitia at.
                </div>
            </div>
            <button onClick={darkmode}>dark</button>
        </div>
    )
}

