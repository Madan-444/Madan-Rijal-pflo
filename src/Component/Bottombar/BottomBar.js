import React, {useState,useEffect} from 'react'
import { animated, useTrail, to, useTransition } from "react-spring";
import {useNavigate} from 'react-router-dom'


function BottomBar({isVisible}) {
  const history = useNavigate()

  const transition = useTransition(isVisible,{
    from: {y:100, opacity: 0},
    enter: {y:0,opacity: 1},
    leave: {y:100,opacity:0}
  })

  return (
    <>
      {transition((style,item)=> item && <animated.div style={style} className='bottombar'>
        <div className="bottom-bar--container">
          <div className='bottomNavX'>
          <div className='bottom--home' onClick={()=> history("/")}>Home</div>
            <div className='bottom--about' onClick={()=> history("/about")}>About</div>
            <div className='bottom--skills' onClick={()=> history("/skills")}>Skills</div>
            <div className='bottom--project' onClick={()=> history("/projects")}>Projects</div>
            
            <div className='bottom--experience' onClick={()=> history("/experience")}>Experience</div>
            <div className='bottom--contactme' onClick={()=> history("/contact-me")}>Contact Me</div>
            
          </div>
        </div>
        
      </animated.div>)}
    </>
  )
}

export default BottomBar