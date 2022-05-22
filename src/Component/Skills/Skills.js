import React, { useState, useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";
import Layout from "../../Layout/Layout";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";import { animated, to, useTransition } from "react-spring";


ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export const data = {
  labels: ["HTML", "ANTD", "MATERIAL", "JAVASCRIPT", "REACT", "NEM"],

  datasets: [
    {
      label: "# of Votes",
      data: [90, 60, 30, 70, 90, 60],
      backgroundColor: [
        "rgba(255, 99, 132, 0.5)",
        "rgba(54, 162, 235, 0.5)",
        "rgba(255, 206, 86, 0.5)",
        "rgba(75, 192, 192, 0.5)",
        "rgba(153, 102, 255, 0.5)",
        "rgba(255, 159, 64, 0.5)",
      ],
      borderColor: "pink",
      hoverBorderColor: "red",
      borderWidth: 1,
    },
  ],
};

function Skills() {
  const history = useNavigate()

  const [isVisible,setIsVisible] = useState(false)
  const transition = useTransition(isVisible,{
    from: {x: -100,y:800, opacity: 0},
    enter: {x:-20,y:10,opacity: 1},
    leave: {x:100,y:800,opacity:0}
  })


useEffect(()=> {
  setIsVisible(true)
},[])

  var style1 = { "--i": 0, "--w":95 };
  var style2 = { "--i": 1, "--w":60 };
  var style3 = { "--i": 2, "--w":30 };
  var style4 = { "--i": 3, "--w":70 };
  var style5 = { "--i": 4, "--w":90 };
  var style6 = { "--i": 5, "--w":60 };
  const [html, setHtml] = useState(0);
  const [myAntd, setMyAntd] = useState(0);
  const [meterailD, setMaterialD] = useState(0);
  const [javascpt, setJavascpt] = useState(0);
  const [reactJs, setReactJs] = useState(0);
  const [nodeExpress, setNodeExpress] = useState(0);
  if (html < 95) {
    setTimeout(() => {
      setHtml(html + 1);
    }, 10);
  }
  if (myAntd < 60) {
    setTimeout(() => {
      setMyAntd(myAntd + 1);
    }, 10);
  }
  if (meterailD < 30) {
    setTimeout(() => {
      setMaterialD(meterailD + 1);
    }, 10);
  }
  if (javascpt < 70) {
    setTimeout(() => {
      setJavascpt(javascpt + 1);
    }, 10);
  }
  if (reactJs < 90) {
    setTimeout(() => {
      setReactJs(reactJs + 1);
    }, 10);
  }
  if (nodeExpress < 60) {
    setTimeout(() => {
      setNodeExpress(nodeExpress + 1);
    }, 10);
  }

  return (
    <Layout>
      {transition((style,item)=> item && <animated.div style={style}>
        <div className="skill">
          <div className="skill--container">
            <div className="chart--container">
              <PolarArea data={data} />
            </div>
            
            <div className="skill--showcase">
              <p>HTML/CSS/SASS</p>
              <div className="skill--showcase__items">
                <div style={style1}>a</div>
              </div>{" "}
              <span>{html}%</span>
              <p>ANT DESIGN</p>
              <div className="skill--showcase__items">
                <div style={style2} >a</div>
              </div>
              <span>{myAntd}%</span>
              <p>MATERIAL DESIGN</p>
              <div className="skill--showcase__items">
                <div style={style3}>a</div>
              </div>
              <span>{meterailD}%</span>
              <p> JAVASCRIPT / TYPESCRIPT</p>
              <div className="skill--showcase__items">
                <div style={style4}>a</div>
              </div>
              <span>{javascpt}%</span>
              <p> REACT JS</p>
              <div className="skill--showcase__items">
                <div style={style5}>a</div>
              </div>
              <span>{reactJs}%</span>
              <p> NODE/EXPRESS/MONGODB</p>
              <div className="skill--showcase__items">
                <div style={style6}>a</div>
              </div>
              <span>{nodeExpress}%</span>
            </div>
          </div>
          <div className="madan--buttons" style={{marginTop: "-30px"}}>
            <button onClick={()=> {
              setIsVisible(false);
              setTimeout(()=> {
                history(-1)
              },300)
              
            }}>Back</button>
              <button onClick={()=> {
                setIsVisible(false);
                setTimeout(()=> {
                  history("/projects")
                },300)
              }}>Next</button>
          </div>
        </div>
      </animated.div>)}
    </Layout>
  );
}

export default Skills;
