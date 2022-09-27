import React from "react";

const Slider = () => {
  return (
    <div>
      <div class="container-fluid p-0 wow fadeIn" data-wow-delay="0.1s">
        <div id="header-carousel" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="w-100" src="assets/img/slider-2.jpg" alt="Image" />
              <div class="carousel-caption">
                <div class="container">
                  <div class="row justify-content-center">
                    <div class="col-lg-7">
                      <h1 class="display-2 text-light mb-5 animated slideInDown">Learn To Dress With Confidence</h1>
                      <a href="" class="btn btn-primary py-sm-3 px-sm-5">Read More</a>
                      <a href="" class="btn btn-light py-sm-3 px-sm-5 ms-3">Our Gallery</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img class="w-100" src="assets/img/slider-3.jpg" alt="Image" />
              <div class="carousel-caption">
                <div class="container">
                  <div class="row justify-content-center">
                    <div class="col-lg-7">
                      <h1 class="display-2 text-light mb-5 animated slideInDown">Confidence Dressing Is Our Top Priority</h1>
                      <a href="" class="btn btn-primary py-sm-3 px-sm-5">Read More</a>
                      <a href="" class="btn btn-light py-sm-3 px-sm-5 ms-3">Our Gallery</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div class="container-fluid facts py-5 pt-lg-0">
        <div class="container py-5 pt-lg-0">
          <div class="row gx-0">
            <div class="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
              <div class="bg-white shadow d-flex align-items-center h-100 p-4" style={{ minHeight: "150px" }}>
                <div class="d-flex">
                  <div class="flex-shrink-0 btn-lg-square bg-primary">
                    <i class="fa fa-car text-white"></i>
                  </div>
                  <div class="ps-4">
                    <h5>Free Delivery </h5>
                    <span>Free delivery on orders over 5% in Ga Central</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 wow fadeIn" data-wow-delay="0.3s">
              <div class="bg-white shadow d-flex align-items-center h-100 p-4" style={{ minHeight: "150px" }}>
                <div class="d-flex">
                  <div class="flex-shrink-0 btn-lg-square bg-primary">
                    <i class="fa fa-users text-white"></i>
                  </div>
                  <div class="ps-4">
                    <h5>100% Money back</h5>
                    <span>Refunds to customers when certain terms and aggreement is not meet</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
              <div class="bg-white shadow d-flex align-items-center h-100 p-4" style={{ minHeight: "150px" }}>
                <div class="d-flex">
                  <div class="flex-shrink-0 btn-lg-square bg-primary">
                    <i class="fa fa-file-alt text-white"></i>
                  </div>
                  <div class="ps-4">
                    <h5>Online support 24/7</h5>
                    <span>Visit Ezekiel Clothings at www.ezekielclothings.com to get all your orders and delivery done</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
