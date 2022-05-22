import React, { useState, useEffect,useRef } from "react";
import Layout from "../../Layout/Layout";
import { animated, useTrail, to, useTransition } from "react-spring";
import { projectList } from "./projectList";
import { Carousel } from "antd";
import "antd/dist/antd.css";
import activImgOne from '../../assets/Screen Shot 2022-04-19 at 23.21.40.png'
import activImgTwo from '../../assets/Screen Shot 2022-04-19 at 23.29.04.png'
import activLogo from '../../assets/active account_white-02.png'

import gurugImgOne from '../../assets/gurugimgOne.png'
import gurugImgTwo from '../../assets/gurugimgTwo.png'
import gurugLogo from '../../assets/gurugLogo.png'

import orkmateImgOne from '../../assets/orkmateImgOne.png'
import orkmateImgTwo from '../../assets/orkmateImgTwo.png'
import orkmateLogo from '../../assets/orkmateLogo.jpeg'

import gurugRideImgOne from '../../assets/gurugRideImgOne.png'
import gurugRideImgTwo from '../../assets/gurugRideImgTwo.png'
import gurugRideLogo from '../../assets/GURUG_LOGO-06.png'

import hamroRemit from '../../assets/hamroRemit.png'





import gurugFoodOne from '../../assets/gurugfood1.png'

function Projects() {
  const bottomBoxRef = useRef()
  const containerRef = useRef()
  const [carouselHeight,setCarouselHeight] = useState(0)
  const [currentProject,setCurrentProject] = useState("projectOne")

  useEffect(()=> {
    function handleResize() {
      const carouselHeight = containerRef?.current?.clientHeight - bottomBoxRef?.current?.clientHeight
      setCarouselHeight(carouselHeight)
      console.log("haha",bottomBoxRef?.current.clientHeight)
    }
    window.addEventListener("resize",handleResize)
  },[])
  useEffect(()=> {
    const carouselHeight = containerRef?.current?.clientHeight - bottomBoxRef?.current?.clientHeight
      setCarouselHeight(carouselHeight)
  },[])
  const div = document.getElementById("jpt")
  console.log("tje geet",div?.getBoundingClientRect().height)

  console.log("carousele height",carouselHeight)
  // console.log("bottomBoxRef",bottomBoxRef?.current?.clientHeight)
  const [isVisible, setIsVisible] = useState(false);
  const transition = useTransition(isVisible, {
    from: { x: -100, y: 800, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: { x: 100, y: 800, opacity: 0 },
  });
  const contentStyle = {
    height: `${carouselHeight}px`,
    color: '#fff',
    width: "100%",
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

  const [trail, api] = useTrail(projectList.length, () => ({
    // trail: 1000,
    opacity: 1,
    sc: 0.9,
    x: "0%",
    y: "0px",
    skewX: 0,
    from: {
      opacity: 0,
      sc: 0.8,
      x: "100%",
      y: "100px",
      skewX: 20,
    },
  }));
  console.log("The api", trail);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const showOneProject = () => {
    return (
      <div className="oneProject" ref={containerRef}>
        <div className="oneProject--carousel">
          <Carousel effect="fade" autoplay style={{ width: "100%" }}>
            <div className="carousel--style" >
              <div style={contentStyle}>
                <img src={activImgOne} alt="" style={{height: "100%",width: "100%",objectFit: "contain"}} />
              </div>
            </div>
            <div className="carousel--style">
            <div style={contentStyle}>
            <img src={activImgTwo} alt="" style={{height: "100%",width: "100%",objectFit: "contain"}} />
            
              </div>
            </div>
            <div className="carousel--style">
            <div style={contentStyle}>
            <img src={activImgOne} alt="" style={{height: "100%",width: "100%",objectFit: "contain"}} />
              </div>
            </div>
            <div className="carousel--style">
            <div style={contentStyle}>
            <img src={activImgTwo} alt="" style={{height: "100%",width: "100%",objectFit: "contain"}} />
              </div>
            </div>
          </Carousel>
          
        </div>
        <div className="oneProject--details" id="jpt" ref={bottomBoxRef}>
        <h3>Description :-</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In consequuntur dolorum, nemo dicta ex dignissimos ut officia reprehenderit reiciendis voluptate esse harum recusandae eius ducimus voluptas laboriosam voluptatum impedit rerum.</p>
        </div>
      </div>
    );
  };
  const showTwoProject = () => {
    return (
      <div className="oneProject" ref={containerRef}>
        <div className="oneProject--carousel">
          <Carousel effect="fade" autoplay style={{ width: "100%" }}>
            <div className="carousel--style" >
              <div style={contentStyle}>
                <img src={gurugImgOne} alt="" style={{height: "100%",width: "100%",objectFit: "contain"}} />
              </div>
            </div>
            <div className="carousel--style">
            <div style={contentStyle}>
            <img src={gurugImgTwo} alt="" style={{height: "100%",width: "100%",objectFit: "contain"}} />
            
              </div>
            </div>
            <div className="carousel--style">
            <div style={contentStyle}>
            <img src={gurugImgOne} alt="" style={{height: "100%",width: "100%",objectFit: "contain"}} />
              </div>
            </div>
            <div className="carousel--style">
            <div style={contentStyle}>
            <img src={gurugImgTwo} alt="" style={{height: "100%",width: "100%",objectFit: "contain"}} />
              </div>
            </div>
          </Carousel>
          
        </div>
        <div className="oneProject--details" id="jpt" ref={bottomBoxRef}>
        <h3>Description :-</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In consequuntur dolorum, nemo dicta ex dignissimos ut officia reprehenderit reiciendis voluptate esse harum recusandae eius ducimus voluptas laboriosam voluptatum impedit rerum.</p>
        </div>
      </div>
    );
  };
  const showSixProject = () => {
    return (
      <div className="oneProject" ref={containerRef}>
        <div className="oneProject--carousel">
          <Carousel effect="fade" autoplay style={{ width: "100%" }}>
            <div className="carousel--style" >
              <div style={contentStyle}>
                <img src={gurugRideImgOne} alt="" style={{height: "100%",width: "100%",objectFit: "contain"}} />
              </div>
            </div>
            <div className="carousel--style">
            <div style={contentStyle}>
            <img src={gurugRideImgTwo} alt="" style={{height: "100%",width: "100%",objectFit: "contain"}} />
            
              </div>
            </div>
            <div className="carousel--style">
            <div style={contentStyle}>
            <img src={gurugRideImgOne} alt="" style={{height: "100%",width: "100%",objectFit: "contain"}} />
              </div>
            </div>
            <div className="carousel--style">
            <div style={contentStyle}>
            <img src={gurugRideImgTwo} alt="" style={{height: "100%",width: "100%",objectFit: "contain"}} />
              </div>
            </div>
          </Carousel>
          
        </div>
        <div className="oneProject--details" id="jpt" ref={bottomBoxRef}>
        <h3>Description :-</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In consequuntur dolorum, nemo dicta ex dignissimos ut officia reprehenderit reiciendis voluptate esse harum recusandae eius ducimus voluptas laboriosam voluptatum impedit rerum.</p>
        </div>
      </div>
    );
  };
  const showThreeProject = () => {
    return (
      <div className="oneProject" ref={containerRef}>
        <div className="oneProject--carousel">
          <Carousel effect="fade" autoplay style={{ width: "100%" }}>
            <div className="carousel--style" >
              <div style={contentStyle}>
                <img src={orkmateImgOne} alt="" style={{height: "100%",width: "100%",objectFit: "contain"}} />
              </div>
            </div>
            <div className="carousel--style">
            <div style={contentStyle}>
            <img src={orkmateImgTwo} alt="" style={{height: "100%",width: "100%",objectFit: "contain"}} />
            
              </div>
            </div>
            <div className="carousel--style">
            <div style={contentStyle}>
            <img src={orkmateImgOne} alt="" style={{height: "100%",width: "100%",objectFit: "contain"}} />
              </div>
            </div>
            <div className="carousel--style">
            <div style={contentStyle}>
            <img src={orkmateImgTwo} alt="" style={{height: "100%",width: "100%",objectFit: "contain"}} />
              </div>
            </div>
          </Carousel>
          
        </div>
        <div className="oneProject--details" id="jpt" ref={bottomBoxRef}>
        <h3>Description :-</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In consequuntur dolorum, nemo dicta ex dignissimos ut officia reprehenderit reiciendis voluptate esse harum recusandae eius ducimus voluptas laboriosam voluptatum impedit rerum.</p>
        </div>
      </div>
    );
  };
  return (
    <Layout>
      <div className="project--container">
        <h2>Projects</h2>
        <div className="project">
          <div className="project--details">
            {currentProject === "projectOne" ? showOneProject(): null}
            {currentProject === "projectTwo" ? showTwoProject(): null}
            {currentProject === "projectThree" ? showThreeProject(): null}
            {currentProject === "projectSix" ? showSixProject(): null}
          </div>
          <div className="project--navigator">
            <div className="projectNav">
              <div className="projectNav__firstRow">
                <div className="box--1" onClick={()=> {
                  setCurrentProject("projectOne")
                }}>
                  <img src={activLogo} alt="logo" />
                </div>
                <div className="box--2" onClick={()=> {
                  setCurrentProject("projectTwo")
                }}><img src={gurugLogo} alt="logo" /></div>
              </div>
              <div className="projectNav__secondRow">
              <div className="box--3" onClick={()=> {
                  setCurrentProject("projectThree")
                }}>
                  <img src={orkmateLogo} alt="logo" />
                </div>
                <div className="box--4"><img src={hamroRemit} alt="logo" /></div>
              </div>
              <div className="projectNav__thirdRow">
              <div className="box--5" onClick={()=> {
                  setCurrentProject("projectFour")
                }}>
                  <img src={orkmateLogo} alt="logo" />
                </div>
                <div className="box--6" onClick={()=> {
                  setCurrentProject("projectSix")
                }}><img src={gurugRideLogo} alt="logo" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Projects;
