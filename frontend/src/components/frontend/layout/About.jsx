import React from 'react'
import AboutImg from '../../../assets/images/about-us.jpg'

const About = () => {
  return (
    <>
        {/* About Section   */}
        <section className='section-2 py-5'>
            <div className='container py-5'>
                <div className='row'>
                    <div className="col-md-6">
                        <img src={AboutImg} className='w-100' />
                    </div>
                    <div className="col-md-6">
                        <span>About Us</span>
                        <h2>Crafting structures that last a lifetime</h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default About