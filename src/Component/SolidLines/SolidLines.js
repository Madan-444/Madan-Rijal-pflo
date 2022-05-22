import React from "react";
import {FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import {AiFillGithub,AiOutlineTwitter } from 'react-icons/ai'
import {SiCodewars } from 'react-icons/si'

function SolidLines() {
  return (
    <div>
      <div className="horizontal--lines">
        <span>1</span>
        <span>2</span>
        
      </div>
      <div className="vertical--lines">
        <span>1</span>
        <span>2</span>
        <div className="socialmedia--link">
          <div onClick={()=> {
            window.open("https://www.facebook.com/wishes.magar")
          }}><FaFacebookF /></div>
          <div onClick={()=> {
            window.open("https://np.linkedin.com/in/madan-magar")
          }}><FaLinkedinIn /></div>
          <div onClick={()=> window.open("https://github.com/Madan-444")}><AiFillGithub /></div>
          <div onClick={()=> window.open("https://www.codewars.com/users/Madan-444")}><SiCodewars /></div>
          <div onClick={()=> window.open("https://twitter.com/")}><AiOutlineTwitter /></div>
        </div>
      </div>
    </div>
  );
}

export default SolidLines;
