import React from "react";
import { Menu } from "./Solomon";

const TopBar = () => {
  return (
    <div>
      <div class="container-fluid bg-dark text-light p-0">
        <div class="row gx-0 d-none d-lg-flex">
          <div class="col-lg-7 px-5 text-start">
            <div class="h-100 d-inline-flex align-items-center me-4">
              <small class="fa fa-map-marker-alt text-primary me-2"></small>
              <small>Accra,Anyaa Palas Town</small>
            </div>
            <div class="h-100 d-inline-flex align-items-center">
              <small class="far fa-clock text-primary me-2"></small>
              <small>Mon - Fri : 09.00 AM - 09.00 PM</small>
            </div>
          </div>
          <div class="col-lg-5 px-5 text-end">
            <div class="h-100 d-inline-flex align-items-center me-4">
              <small class="fa fa-phone-alt text-primary me-2"></small>
              <a href="tel:+233 (0)555618873"><small>+233 (0)555618873</small></a>
            </div>
            <div class="h-100 d-inline-flex align-items-center mx-n2">
              <a class="btn btn-square btn-link rounded-0 border-0 border-end border-secondary" href="">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a class="btn btn-square btn-link rounded-0 border-0 border-end border-secondary" href="">
                <i class="fab fa-twitter"></i>
              </a>
              <a class="btn btn-square btn-link rounded-0 border-0 border-end border-secondary" href="">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a class="btn btn-square btn-link rounded-0" href="">
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <nav class="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
        <a href="index.html" class="navbar-brand d-flex align-items-center border-end px-4 px-lg-5">
          <h2 class="m-0"><i class="fa fa-binoculars text-primary me-2"></i>Fashion</h2>
        </a>
        <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse mr-5" id="navbarCollapse" style={{marginRight:"80px"}}>
          <div class="navbar-nav ms-auto p-4 p-lg-0">
            {Menu.map(menu =>(
              <a href={`/https://main--ezekielclothings.netlify.app${menu.link}`}class="nav-item nav-link active">{menu.name}</a>
            ))}
          </div>
          {/* <a href="" class="btn btn-primary py-4 px-lg-5 d-none d-lg-block">Get Started<i class="fa fa-arrow-right ms-3"></i></a> */}
        </div>
      </nav>
    </div>
  );
};

export default TopBar;
