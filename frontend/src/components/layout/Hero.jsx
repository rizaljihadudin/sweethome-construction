import React from 'react'

const Hero = ({contents}) => {
  return (
    <>
        {/* Hero Section */}
        <section className='section-7'>
            <div className='hero d-flex align-items-center'>
                <div className='container'>
                    <div className='text-left'>
                        <span>{contents.preHeading}</span>
                        <h1>{contents.heading}</h1>
                        <p dangerouslySetInnerHTML={{__html: contents.text}}>
                            
                        </p>
                    </div>
                </div>
            </div>
        </section> 
    </>
  )
}

export default Hero