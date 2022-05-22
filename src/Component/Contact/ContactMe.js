import React, { useState, useEffect, useRef } from "react";
import Layout from "../../Layout/Layout";

import GLOBE from "vanta/dist/vanta.globe.min";

function ContactMe() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        GLOBE({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xe1e1e1,
          size: 0.7,
          backgroundColor: 0x000001,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <Layout>
      <div ref={myRef}>
        <div className="contactme">
          <div>Contact Me</div>
          <div>
            <p>
              <ion-icon name="person-outline"></ion-icon> : Madan Rijal Magar
            </p>
            <p>
              <ion-icon name="mail-outline"></ion-icon> : mmadan3600@gmail.com
            </p>
            <p>
              <ion-icon name="chatbubble-ellipses-outline"></ion-icon> :
              www.linkedin/madanRijl
            </p>
          </div>
          <hr />
          <div className="contact--form">
            <p>
              I am here to answer any query you may have about my experience and
              ability about work as an Front end Developer. Drop your
              information bellow to reach out to me. I will response as soon as possible.{" "}
            </p>
            <div>
              <p>
                <label htmlFor="">Name : </label>
                <input type="text" placeholder="Name" />
              </p>
              <p>
                <label htmlFor="">Email : </label>
                <input type="text" placeholder="Email" />
              </p>
            </div>
            <div>
              {" "}
              <p>
                <label htmlFor="">Query : </label>
                <textarea type="text" placeholder="Email" />
              </p>
            </div>
            <button>Submit</button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ContactMe;
