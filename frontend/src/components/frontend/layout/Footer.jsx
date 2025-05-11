import React from 'react'

const Footer = () => {
  return (
    <div>
        {/* Footer */}
        <footer>
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-3">
                        <h3 className='mb-3'>SweetHome Constructions</h3>
                        <div className="pe-5">
                            <p>
                                Our post-construction services gives you peace of mind knowing that we are still here for you even after
                            </p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <h3 className='mb-3'>Our Services</h3>
                        <ul>
                            <li>
                                <a href="">Speciality Construction</a>
                            </li>
                            <li>
                                <a href="">Civil Construction</a>
                            </li>
                            <li>
                                <a href="">Residential Construction</a>
                            </li>
                            <li>
                                <a href="">Corporate Construction</a>
                            </li>
                            <li>
                                <a href="">Building Construction</a>
                            </li>
                            <li>
                                <a href="">Industrial Construction</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h3 className='mb-3'>Quick Links</h3>
                        <ul>
                            <li>
                                <a href="">About Us</a>
                            </li>
                            <li>
                                <a href="">Services</a>
                            </li>
                            <li>
                                <a href="">Projects</a>
                            </li>
                            <li>
                                <a href="">Blog</a>
                            </li>
                            <li>
                                <a href="">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h3 className='mb-3'>Contact Us</h3>
                        <ul>
                            <li>
                                <a href="">(666-0000-111)</a>
                            </li>
                            <li>
                                <a href="">info@sweethome.com</a>
                            </li>
                            <p>
                                Perumahan Hijau Raya, No.23 A <br />
                                Jl. Tebet Barat, Jakarta Selatan <br />
                                DKI Jakarta, Indonesia
                            </p>
                        </ul>
                    </div>
                    <hr />
                    <div className='text-center pt-4'>
                        Copyright &copy; 2025 SweetHome Constructions. All Rights Reserved.
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer