import React from 'react'
import MasterHead from '../components/MasterHead'
import AboutUs from '../components/AboutUs'
import Courses from '../components/Courses'

export default function HomePage(props) {
    return (
        <div>
            <MasterHead />
            <AboutUs />
            <Courses />
        </div>
    )
}
