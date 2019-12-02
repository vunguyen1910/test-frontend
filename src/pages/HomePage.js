import React from 'react'
import Navbar from '../components/Navbar'
import MasterHead from '../components/MasterHead'
import AboutUs from '../components/AboutUs'
import Courses from '../components/Courses'
export default function HomePage() {
    return (
        <div>
            <Navbar/>
            <MasterHead />
            <AboutUs />
            <Courses />
        </div>
    )
}
