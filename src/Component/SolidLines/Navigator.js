import React, {useState} from 'react'

import {useNavigate} from 'react-router-dom'


function Navigator() {
  const history = useNavigate()
    const [haha,setHaha] = useState(false)
    var style1 = { "--i":0, "--x":1, "--y":1 }
    var style5 = { "--i":2, "--x":1, "--y":-1 }
    var style3 = { "--i":4, "--x":0, "--y":0 }
    var style4 = { "--i":5, "--x":-1, "--y":-1 }
    var style2 = { "--i":8, "--x":-1, "--y":1 }

  return (
      
    <div className='bottom--navigator'>
        <div class={`${haha ? "navigation active": "navigation"}`} onClick={()=> setHaha(!haha)}>
            <span style={style1}><ion-icon name="ribbon-outline" onClick={()=> history("/experience")}></ion-icon></span>
             
             <span style={style5}><ion-icon name="list-circle-outline" onClick={()=> history("/skills")}></ion-icon></span>

            <span style={style3}><ion-icon name="home-outline" onClick={()=> history("/")}></ion-icon></span>

            <span style={style4}><ion-icon name="person-circle-outline" onClick={()=> history("/about")}></ion-icon></span>
            <span style={style2}><ion-icon name="map-outline" onClick={()=> history('/projects')}></ion-icon></span>
            

        </div>
    </div>
  )
}

export default Navigator