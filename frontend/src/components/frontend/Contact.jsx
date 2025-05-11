import React from 'react'
import Header from './layout/Header'
import Footer from './layout/Footer'
import Hero from './layout/Hero'

const contents = {
    preHeading: 'Quality. Intregity. Value.',
    heading: 'Contact Us',
    text:''
}

const Contact = () => {
  return (
    <>
        <Header/>
            <main>
                {/* Hero Section */}
                <Hero contents={contents}/>
            </main>
            <section className='section-9 py-5'>
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Contact Us</h2>
                        <p>
                            Our dedicated experts are here to help you with any of your questions, contact us by <br/>
                            filling out the form below and we will be in touch shortly.
                        </p>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-3 mb-3">
                            <div className="card shadow border-0">
                                <div className='card-body p-4'>
                                    <h3>Call Us</h3>
                                    <div>
                                        <a href="#">(808-080-808)</a>
                                    </div>
                                    <div>
                                        <a href="#">(808-080-808)</a>
                                    </div>

                                    <h3 className='mt-4'>You can write us</h3>
                                    <div><a href="#">info@example.com</a></div>
                                    <div><a href="#">info@example.com</a></div>
                                    
                                    <h3 className='mt-4'>Address</h3>
                                    <div>1234 Street Name, <br/>City Name,<br/> United States</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="card shadow border-0">
                                <div className="card-body p-5">
                                    <form action="">
                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <label htmlFor="" className='form-label'>Name</label>
                                                <input type="text" className='form-control form-control-lg' placeholder='Enter your name' />
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <label htmlFor="" className='form-label'>Email</label>
                                                <input type="email" className='form-control form-control-lg' placeholder='Enter your email' />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <label htmlFor="" className='form-label'>Phone</label>
                                                <input type="text" className='form-control form-control-lg' placeholder=' Phone No.' />
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <label htmlFor="" className='form-label'>Subject</label>
                                                <input type="email" className='form-control form-control-lg' placeholder='Subject' />
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="" className='form-label'>Message</label>
                                            <textarea name="" id="" placeholder='Message' rows={5} className='form-control form-control-lg'></textarea>
                                        </div>
                                        <button className="btn btn-primary large mt-3">
                                            Submit
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        <Footer/>
    </>
  )
}

export default Contact