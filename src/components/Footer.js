import React from 'react'
import { Menu } from './Solomon'

const Footer = () => {

    const date = new Date();

  return (
    <div>
         <div class="container-fluid bg-dark text-light footer my-6 mb-0 py-6 wow fadeIn" data-wow-delay="0.1s">
        <div class="container">
            <div class="row g-5">
                <div class="col-lg-3 col-md-6">
                    <h4 class="text-white mb-4">Get In Touch</h4>
                    <h2 class="text-primary mb-4"><i class="fa fa-binoculars text-white me-2"></i>Fashion</h2>
                    <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>Anyaa Palas Town, Accra, Ghana</p>
                    <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>+233 (0)555618873</p>
                    <p class="mb-2"><i class="fa fa-envelope me-3"></i>info@example.com</p>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h4 class="text-light mb-4">Quick Links</h4>
                    {Menu.map(menu =>(
                        <a class="btn btn-link"href={`/${menu.link}`}>{menu.name}</a>
                    ))}
                </div>
                <div class="col-lg-3 col-md-6">
                    <h4 class="text-light mb-4">Quick Links</h4>
                    {Menu.map(menu =>(
                        <a class="btn btn-link"href={`/${menu.link}`}>{menu.name}</a>
                    ))}
                </div>
                <div class="col-lg-3 col-md-6">
                    <h4 class="text-light mb-4">Newsletter</h4>
                    <form action="">
                        <div class="input-group">
                            <input type="text" class="form-control p-3 border-0" placeholder="Your Email Address"/>
                            <button class="btn btn-primary">Sign Up</button>
                        </div>
                    </form>
                    <h6 class="text-white mt-4 mb-3">Follow Us</h6>
                    <div class="d-flex pt-2">
                        <a class="btn btn-square btn-outline-light me-1" href=""><i class="fab fa-twitter"></i></a>
                        <a class="btn btn-square btn-outline-light me-1" href="https://www.facebook.com/profile.php?id=100086562933409"><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-square btn-outline-light me-1" href=""><i class="fab fa-youtube"></i></a>
                        <a class="btn btn-square btn-outline-light me-0" href=""><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid copyright text-light py-4 wow fadeIn" data-wow-delay="0.1s">
        <div class="container">
            <div class="row">
                <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                    &copy; <a href="www.ezekielclothings.com">Ezekiel Clothing</a>, {date.getFullYear()} All Right Reserved.
                </div>
                <div class="col-md-6 text-center text-md-end">
                    Developed By: <a href="/">Solomon Aboagye</a>
                    <br/>Distributed By: <a href="/" target="">Mojave Cosultancy</a>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Footer
