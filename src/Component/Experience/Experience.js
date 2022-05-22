import React, {useState,useEffect} from "react";
import Layout from "../../Layout/Layout";


import {useNavigate} from 'react-router-dom'
import { animated, useTrail, to, useTransition } from "react-spring";


function Experience() {
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
        {transition((style,item)=> item && <animated.div className="experience" style={style}>
            <h2>Experience</h2>
          <main>
            <div>
                <h4 style={{color: "pink",textAlign: "end"}}><span>Intern</span> (2021-08-29 - 2021-08-20)</h4>
                <p style={{textAlign: "end"}}>Ausnep It Solutions</p>
              <p style={{textAlign: "end"}}>Learned about the different frontend development tools like html, css, javascript and React ecosystem : React, Redux, Typescript, React Router. Learn to convert wireframes to desing and integrate backend apis into real world projects.</p>
            </div>
            <div>
            <h4 style={{color: "pink"}}><span>Frontend Developer</span> (2021-08-29 - 2021-08-20)</h4>
                <p>Ausnep It Solutions</p>
              Developed different web app using socket, google map, QR code and many other key functionality that are essential for the web apps. I worked on dynamic forms, dynamic api request and multi stage form with code splitting and code optimization.
            </div>
          </main>
        <section className="madan--buttons">
              <button onClick={()=> history(-1)}>Back</button>
              <button onClick={()=> {
                
                setIsVisible(false)
                setTimeout(()=> {
                  history('/contact-me')
                },300)
              }}>Next</button>
            </section>
        </animated.div>)}

    </Layout>
  );
}

export default Experience;
