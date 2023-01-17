import React, { Component } from 'react'
import Image from 'next/image';
import logo from '../public/logo.svg'
import {BsFacebook,BsTwitter,BsLinkedin,BsGithub} from 'react-icons/bs';
// footer Component
const Footer = () => {
  return (
    <footer className='m-0'>
        <div className="container-fluied myInfo mt-3 p-5">
            <div className="row">
                <div className="col-md-6 col-lg-4 ">
                    <div className="info">
                        <Image
                            alt="trash icon"
                            src={logo}
                            width={220}
                            height={50}
                        />         
                        <p className="mt-4 text-white-50 fs-5">
                            Book Review Application
                        <br />
                            All Your Needs About Books
                        </p>
                        <div className="copyright text-white-50">
                             Created By <span className='myPrimary p-2 rounded'><a href="https://www.linkedin.com/in/ahmed-hemdan-695408201/" target="_blank" className="ms-2">Ahmed Hemdan </a></span>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-2 pt-3">
                    <div className="links">
                        <span className="text-light fs-4">Links</span>
                        <ul className="list-unstyled text-white-50 ln-lg mt-3">
                            <li><a className={`nav-link text-white-50 fs-5`}href="#">Books</a></li>
                            <li><a className={`nav-link text-white-50 fs-5`}href="#">Authors</a></li>
                            <li><a className={`nav-link text-white-50 fs-5`}href="#">Countries</a></li>
                            <li><a className={`nav-link text-white-50 fs-5`}href="#">Categoires</a></li>
                            <li><a className={`nav-link text-white-50 fs-5`}href="#">Reviwers</a></li>
                        </ul>    
                    </div>
                </div>
                <div className="col-md-6 col-lg-2 pt-3">
                    <div className="links">
                       <span className="text-light fs-5">About Us</span>
                       <ul className="list-unstyled text-white-50 ln-lg mt-3">
                            <li><a className={`nav-link text-white-50 fs-5`}href="#">Our Services</a></li>
                            <li><a className={`nav-link text-white-50 fs-5`}href="#">About Us</a></li>
                            <li><a className={`nav-link text-white-50 fs-5`}href="#">Our Numbers</a></li>
                            <li><a className={`nav-link text-white-50 fs-5`}href="#">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 pt-2">
                    <div className="contact">
                        <div className="">
                            <span className="text-light fs-5">
                                Contact Us
                            </span>
                            <p className="ln-lg mt-3 text-white-50">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium in quis aspernatur.
                            </p>
                            <a  className=" w-100 "  href=""> <span className='myPrimary p-2 rounded'>ahmedashrafhemdan@gmail.com </span></a>
                            <div className={`d-md-flex align-items-center mt-2`}>
                                <a href="https://twitter.com/AhmedHemdan72" target="_blank" className="m-3" >< BsTwitter size={25}/></a>
                                <a href="https://www.facebook.com/profile.php?id=100009361588650" target="_blank" className="m-3">< BsFacebook size={25}/></a>
                                <a href="https://www.linkedin.com/in/ahmed-hemdan-695408201/" target="_blank" className="m-3"> <BsLinkedin size={25}/></a>
                                <a href="https://github.com/hemda74" target="_blank" className="m-3"> <BsGithub size={25}/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    )
}
export default Footer