import React from 'react'
import Header from './layout/Header'
import Footer from './layout/Footer'
import {default as AboutSection} from './layout/About'
import TeamImg1 from '../../assets/images/team1.jpg'
import TeamImg2 from '../../assets/images/team2.jpg'
import Hero from './layout/Hero'
import ShowTestimonial from './layout/ShowTestimonial'
import ShowMembers from './layout/ShowMembers'

const contents = {
    preHeading: 'Quality. Intregity. Value.',
    heading: 'About Us',
    text:'We offer a diverse array of construction services, <br/> spanning residential, commercial, and industrial projects.'
}

const About = () => {

    return (
        <>
            <Header/>
                <main>

                    {/* Hero Section */}
                    <Hero contents={contents}/>

                    {/* About Section   */}
                    <AboutSection/>

                    {/* Our Teams */}
                    <ShowMembers/>

                    {/* Testimonials  */}
                    <ShowTestimonial/>
                </main>
            <Footer/>
        </>
    )
}

export default About