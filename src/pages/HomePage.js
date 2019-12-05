import React from 'react'
import Navbar from '../components/Navbar'
import MasterHead from '../components/MasterHead'
import AboutUs from '../components/AboutUs'
import Courses from '../components/Courses'

export default function HomePage(props) {
    console.log(props.user, "HOMEPAGE")
    return (
        <div>

            <MasterHead />
            <AboutUs />
            <Courses />
        </div>
    )
}
