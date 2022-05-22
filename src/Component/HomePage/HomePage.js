import React, {useState,useEffect} from "react";
import { Link } from "react-router-dom";
import Layout from "../../Layout/Layout";
import ParticleBackground from "../../ParticleBackground";
import HeroImg from "../../assets/nasik-lababan-Au99VL6Jwqw-unsplash.jpg";

import { animated, useTrail, to, useTransition } from "react-spring";

function HomePage() {
  const handleMouseMove = (e) => {
    console.log("The mouse move event", e);
  };

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
      {transition((style,item)=> item &&
      <animated.div className="container" style={style}>
        <div className="card">
          <div className="imgBox">
            <img src={HeroImg} alt="Hero Img" />
          </div>
          <div className="details">
            <div className="details--intro">
            <h2>Web Developer </h2>
            <div>
              <p>Hi! I am Madan Rijal Magar. </p>
              <p>

              I am mern stack Developer with
              experience of 1 year plus. My working process is think, visualize
              with the magic of imagination and execute the idea. I love to write
              code which will be efficient, optimized and readable to create
              pretty smooth, attractive and excellent software and web
              application.{" "}
            </p>
            </div>
            
            <div className="madan--buttons">
              <button>Download CV</button>
              <Link to='/about'><button>Next</button></Link>
            </div>
            </div>
          </div>
        </div>
      </animated.div>
)}
    </Layout>
  );
}

export default HomePage;
