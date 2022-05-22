import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from '../Component/About/About'
import ContactMe from '../Component/Contact/ContactMe'
import Experience from '../Component/Experience/Experience'

import HomePage from '../Component/HomePage/HomePage'
import Projects from '../Component/Projects/Projects'
import Skills from '../Component/Skills/Skills'


function MainRoutes() {
    return (
        
        <Router>
            <Routes>
                <Route exact path= "/" element={<HomePage />} />
                <Route exact path= "/about" element={<About />} />
                <Route exact path= "/skills" element={<Skills />} />
                <Route exact path= "/experience" element={<Experience />} />
                <Route exact path= "/projects" element={<Projects />} />
                <Route exact path= "/contact-me" element={<ContactMe />} />
            </Routes>
        </Router>
    )
}

export default MainRoutes
