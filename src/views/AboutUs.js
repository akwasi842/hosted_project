import React from "react";

const AboutUs = () => {
  return (
    <div>
      <div class="container-fluid page-header py-6 my-6 mt-0 wow fadeIn" data-wow-delay="0.1s">
        <div class="container text-center">
          <h1 class="display-4 text-white animated slideInDown mb-4">About Us</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol class="breadcrumb justify-content-center mb-0">
              <li class="breadcrumb-item">
                <a class="text-white" href="#">Home</a>
              </li>
              <li class="breadcrumb-item">
                <a class="text-white" href="#">Pages</a>
              </li>
              <li class="breadcrumb-item text-primary active" aria-current="page">About</li>
            </ol>
          </nav>
        </div>
      </div>
      <div class="container-xxl py-6">
        <div class="container">
        <div class="row g-5">
            <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div class="position-relative overflow-hidden ps-5 pt-5 h-100" style={{ minHeight: "400px" }}>
                <img class="position-absolute w-100 h-100" src="assets/img/ezekiel2.jpeg" alt="" />
                <img class="position-absolute top-0 start-0 bg-white pe-3 pb-3 img-responsive" src="assets/img/ezekiel2.jpeg" alt="" style={{ width: "200px", height: "200px" }}/>
              </div>
            </div>
            <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div class="h-100">
                <h6 class="text-primary text-uppercase mb-2">About Us</h6>
                <h1 class="display-6 mb-4">We Design and create  & Creates to Design Says Mr.Boahen Ofosu Ezekiel</h1>
                <p style={{color:"black",fontSize:"17px"}}>Boahen Ofosu Ezekiel the Chief Executive Officer of Ezekiel Clothing who started 
                   his creativity carer right from infancy. Mr. Ezekiel who has been in the creative art 
                   industry decided to polish his carer in 2015 and over the years has been providing Ghanaians
                   with the latest fashion designs within Accra and its surroundings.The years Mr. Ezekiel
                   has spend in the fashion design industry has make him one of the best within the country.
                   And Mr.Ezekiel plans on giving Ghanaians the the best latest fashion designs as he has all done.
                </p>
                {/* <p class="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                  sed stet lorem sit clita duo justo magna dolore erat amet
                </p> */}
                <div class="row g-2 mb-4 pb-2">
                  <div class="col-sm-6"><i class="fa fa-check text-primary me-2"></i>Creativity</div>
                  <div class="col-sm-6"><i class="fa fa-check text-primary me-2"></i>Designers Training</div>
                  <div class="col-sm-6"><i class="fa fa-check text-primary me-2"></i>Afordable Fee</div>
                  <div class="col-sm-6"><i class="fa fa-check text-primary me-2"></i>Time Effective</div>
                </div>
                <div class="row g-4">
                  <div class="col-sm-6">
                    {/* <a class="btn btn-primary py-3 px-5" href="/aboutus">Read More</a> */}
                  </div>
                  <div class="col-sm-6">
                    <a class="d-inline-flex align-items-center btn btn-outline-primary border-2 p-2" href="tel:+233 (0)555618873">
                      <span class="flex-shrink-0 btn-square bg-primary"><i class="fa fa-phone-alt text-white"></i></span>
                      <span class="px-3">+233 (0)555618873</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-xxl courses my-6 py-6 pb-0">
        <div class="container">
          <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "500px" }}>
            <h6 class="text-primary text-uppercase mb-2">Tranding Styles</h6>
            <h1 class="display-6 mb-4">Our Gallery Upskill You With Confidence Dressing</h1>
          </div>
          <div class="row g-4 justify-content-center">
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div class="courses-item d-flex flex-column bg-white overflow-hidden h-100">
                <div class="text-center p-4 pt-0">
                  <div class="d-inline-block bg-primary text-white fs-5 py-1 px-4 mb-4">100%</div>
                  <h5 class="mb-3">Africa Wears For All Your Occassions</h5>
                  <p>At Ezekiel Clothings We Deal In All Types Of Africa Wear Being It Gents And Ladies</p>
                  <ol class="breadcrumb justify-content-center mb-0">
                    <li class="breadcrumb-item small">
                      <i class="fa fa-signal text-primary me-2"></i>Accuracy</li>
                      <li class="breadcrumb-item small"><i class="fa fa-calendar-alt text-primary me-2"></i>Perfection</li>
                  </ol>
                </div>
                <div class="position-relative mt-auto">
                  <img class="img-fluid" src="assets/img/style2.jpg" alt=""/>
                  <div class="courses-overlay">
                    <a class="btn btn-outline-primary border-2" href="/africa">Read More</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div class="courses-item d-flex flex-column bg-white overflow-hidden h-100">
                <div class="text-center p-4 pt-0">
                  <div class="d-inline-block bg-primary text-white fs-5 py-1 px-4 mb-4">100%</div>
                  <h5 class="mb-3">Suits For All Location</h5>
                  <p>Ezekiel Clothing Deals In All Kinds of Suits Being Political Suits And Wedding Suits</p>
                  <ol class="breadcrumb justify-content-center mb-0">
                    <li class="breadcrumb-item small"><i class="fa fa-signal text-primary me-2"></i>Accuracy</li>
                    <li class="breadcrumb-item small"><i class="fa fa-calendar-alt text-primary me-2"></i>Perfection</li>
                  </ol>
                </div>
                <div class="position-relative mt-auto">
                  <img class="img-fluid" src="assets/img/style2.jpg" alt=""/>
                  <div class="courses-overlay">
                    <a class="btn btn-outline-primary border-2" href="/suits">Read More</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div class="courses-item d-flex flex-column bg-white overflow-hidden h-100">
                <div class="text-center p-4 pt-0">
                  <div class="d-inline-block bg-primary text-white fs-5 py-1 px-4 mb-4">100%</div>
                  <h5 class="mb-3">Wedding Gowns For All Your Memorable Day</h5>
                  <p>Ezekiel Clothing Designs Any Type Of Wedding Gowns For Your Weddings</p>
                  <ol class="breadcrumb justify-content-center mb-0">
                    <li class="breadcrumb-item small"><i class="fa fa-signal text-primary me-2"></i>Accuracy</li>
                    <li class="breadcrumb-item small"><i class="fa fa-calendar-alt text-primary me-2"></i>Perfection</li>
                  </ol>
                </div>
                <div class="position-relative mt-auto">
                  <img class="img-fluid" src="assets/img/style2.jpg" alt=""/>
                  <div class="courses-overlay">
                    <a class="btn btn-outline-primary border-2" href="/gown">Read More</a>
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

export default AboutUs;
