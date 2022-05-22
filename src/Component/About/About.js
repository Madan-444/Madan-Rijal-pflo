import React,{useState,useEffect} from 'react'
import Layout from '../../Layout/Layout'
import {useNavigate} from 'react-router-dom'
import { animated, useTrail, to, useTransition } from "react-spring";

function About() {
  const history = useNavigate()
  const [isVisible,setIsVisible] = useState(false)
  const transition = useTransition(isVisible,{
    from: {x: -100,y:800, opacity: 0},
    enter: {x:0,y:0,opacity: 1},
    leave: {x:100,y:800,opacity:0}
  })


useEffect(()=> {
  setIsVisible(true)
},[])

  return (
    <Layout>
        {transition((style,item)=> item && <animated.div className="aboutme" style={style}>
          <h1>About Me</h1>
          <div className="aboutme--container">
            <div className="aboutme--container__box1">
            <ion-icon name="heart-circle-outline"></ion-icon>
              <h1>Robotics enthusiastic</h1>
              <div>
                <p>I am from electronics and communication engineering background. Deep passion about ROS(Robot Operating System) and humanoid!</p>
              </div>
            </div>
            <div className="aboutme--container__box1">
            <ion-icon name="flower-outline"></ion-icon>
              <h1>Blockchain enthusiastic</h1>
              <div>
                <p>Slowly but surely is the blockchain technology going to change everything. We are right in middel of a revolution and want to participate!</p>
              </div>
            </div>
            <div className="aboutme--container__box1">
            <ion-icon name="help-buoy-outline"></ion-icon>
              <h1>AI and ML enthusiastic</h1>
              <div>
                <p>AI and ML are the future of technology and revolution of computer science. I'm eagerly anticipating some revolution to this world through it!</p>
              </div>
            </div>
          </div>
          <div className="madan--buttons">
              <button onClick={()=> history(-1)}>Back</button>
              <button onClick={()=> {
                
                setIsVisible(false)
                setTimeout(()=> {
                  history('/skills')
                },300)
              }}>Next</button>
            </div>
        </animated.div>)}

    </Layout>
  )
}

export default About