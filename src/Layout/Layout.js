import React, { Fragment,useState } from "react";
import BottomBar from "../Component/Bottombar/BottomBar";
import Navigator from "../Component/SolidLines/Navigator";
import SolidLines from "../Component/SolidLines/SolidLines";
import ParticleBackground from "../ParticleBackground";
import "../Sass/mainStyle.css";

function Layout({ children }) {
  const [showBottombar,setShowBottombar] = useState(false)
  const [myClienX,setMyClintX] = useState(null)

  const [isVisible,setIsVisible] = useState(false)

  const handleMouseMove = (e)=> {
    setMyClintX(e.clientY)
    if(e.clientY > (window.innerHeight - 80)) {
      setShowBottombar(true)
      setIsVisible(true)
    }
    else {
      setIsVisible(false)
      setTimeout(()=> {
        setShowBottombar(false)
      },300)
    }
  }

  return (
    <Fragment>
      {/* <ToastContainer /> */}
      <div className="main--container" onMouseMove={handleMouseMove}>
        <ParticleBackground />
        <div className="solidlines">
          <SolidLines />
          <div className="main--container__body">
            <section>
            
              <div>{children}</div>
            </section>
          </div>
        </div>
        <Navigator />

        {showBottombar && <BottomBar isVisible={isVisible} />}

        
      </div>
    </Fragment>
  );
}

export default Layout;
