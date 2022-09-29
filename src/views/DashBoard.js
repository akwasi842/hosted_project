import React, {useState} from "react";
import Slider from "../components/Slider";

const DashBoard = () => {

  const [formItems, setFormItems] = useState({name:"", email:"", message:""});

  const handleChange = (e) => {
      e.preventDefault();

      const {name, value} = e.target;

      setFormItems((prevState)=>({...prevState,[name]:value}));
  };

  const submitForm = (e) => {
      e.preventDefault();

      // alert(JSON.stringify(formItems));

      //post options

      setFormItems({
        name:"",
        email:"",
        message:""
      });
  };

  return (
    <div>
       <Slider />
      <div class="container-xxl py-6">
        <div class="container">
          <div class="row g-5">
            <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div class="position-relative overflow-hidden ps-5 pt-5 h-100" style={{ minHeight: "400px" }}>
                <img class="position-absolute w-100 h-100" src="assets/img/ezekiel2.jpeg" alt="" style={{ objectFit: "cover" }}/>
                <img class="position-absolute top-0 start-0 bg-white pe-3 pb-3" src="assets/img/ezekiel2.jpeg" alt="" style={{ width: "200px", height: "200px" }}/>
              </div>
            </div>
            <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div class="h-100">
                <h6 class="text-primary text-uppercase mb-2">About Us</h6>
                <h1 class="display-6 mb-4">We Design and create  & Creates to Design Says Mr.Boahen Ofosu Ezekiel</h1>
                <p style={{color:"black",fontSize:"17px"}}>Boahen Ofosu Ezekiel the Chief Executive Officer of Ezekiel Clothing who started 
                   his creativity carer right from infancy. Mr. Ezekiel who has been is the creative art 
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
                  <div class="col-sm-6"><i class="fa fa-check text-primary me-2"></i>Best Designers</div>
                  <div class="col-sm-6"><i class="fa fa-check text-primary me-2"></i>Afordable Fee</div>
                  <div class="col-sm-6"><i class="fa fa-check text-primary me-2"></i>Time Effective</div>
                </div>
                <div class="row g-4">
                  <div class="col-sm-6">
                    <a class="btn btn-primary py-3 px-5" href="/">Read More</a>
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
                    <a class="btn btn-outline-primary border-2" href="/">Read More</a>
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
                    <a class="btn btn-outline-primary border-2" href="/">Read More</a>
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
                    <a class="btn btn-outline-primary border-2" href="/">Read More</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-8 my-6 mb-0 wow fadeInUp" data-wow-delay="0.1s">
              <div class="bg-primary text-center p-5">
                <h1 class="mb-4">Make Appointment</h1>
                <form id="frmAppointment" onSubmit={submitForm}>
                  <div class="row g-3">
                    <div class="col-sm-6">
                      <div class="form-floating">
                        <input type="text" class="form-control border-0" id="gname" placeholder="Full Name" name="name" onChange={handleChange} value={formItems.name} required />
                        <label for="gname">Your Name</label>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-floating">
                        <input type="email" class="form-control border-0" id="gmail"placeholder="Your Email" name="email" onChange={handleChange} value={formItems.email} required />
                        <label for="gmail">Your Email</label>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-floating">
                        <textarea class="form-control border-0" placeholder="Leave a message here" id="message"style={{ height: "100px" }} name="message" onChange={handleChange} value={formItems.message} required></textarea>
                        <label for="message">Message</label>
                      </div>
                    </div>
                    <div class="col-12">
                      <button class="btn btn-dark w-100 py-3" type="submit"form="frmAppointment" >Submit</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-xxl py-6">
        <div class="container">
          <div class="row g-5">
            <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <h6 class="text-primary text-uppercase mb-2">Why Choose Us!</h6>
              <h1 class="display-6 mb-4">Best Threads of Distinction In Your City</h1>
              <p class="mb-5" style={{color:"black",fontSize:"17px"}}>At Exzekiel Clothings, our clients satisfaction is our top priority.We put threads of distinctions together to ensure the best for our clients.We make sure our clients 
                look astonishing at his or her location.Ezekiel Clothings where creativity meets excellent.
              </p>
              <div class="row gy-5 gx-4">
                <div class="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                  <div class="d-flex align-items-center mb-3">
                    <div class="flex-shrink-0 btn-square bg-primary me-3">
                      <i class="fa fa-check text-white"></i>
                    </div>
                    <h5 class="mb-0">Creativity</h5>
                  </div>
                  <span style={{color:"black"}}>Creativity is the hallmark of Exzekiel Clothing</span>
                </div>
                <div class="col-sm-6 wow fadeIn" data-wow-delay="0.2s">
                  <div class="d-flex align-items-center mb-3">
                    <div class="flex-shrink-0 btn-square bg-primary me-3">
                      <i class="fa fa-check text-white"></i>
                    </div>
                    <h5 class="mb-0">Best Designers</h5>
                  </div>
                  <span style={{color:"black"}}>At Ezekiel Clothings, we sort of the best designers ensuring creativity</span>
                </div>
                <div class="col-sm-6 wow fadeIn" data-wow-delay="0.3s">
                  <div class="d-flex align-items-center mb-3">
                    <div class="flex-shrink-0 btn-square bg-primary me-3">
                      <i class="fa fa-check text-white"></i>
                    </div>
                    <h5 class="mb-0">Afordable Fee</h5>
                  </div>
                  <span style={{color:"black"}}>Ezekiel Clothings ensures that cost is minimaze to suit every customer</span>
                </div>
                <div class="col-sm-6 wow fadeIn" data-wow-delay="0.4s">
                  <div class="d-flex align-items-center mb-3">
                    <div class="flex-shrink-0 btn-square bg-primary me-3">
                      <i class="fa fa-check text-white"></i>
                    </div>
                    <h5 class="mb-0">Time Effective</h5>
                  </div>
                  <span style={{color:"black"}}>At Ezekiel Clothings, time is one thing we factor, ensuring puntuality</span>
                </div>
              </div>
            </div>
            <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div class="position-relative overflow-hidden pe-5 pt-5 h-100" style={{ minHeight: "400px" }}>
                <img class="position-absolute w-100 h-100" src="assets/img/ezekiel3.jpeg" alt=""style={{ objectFit: "cover" }}/>
                <img class="position-absolute top-0 end-0 bg-white ps-3 pb-3" src="assets/img/ezekiel4.jpeg"alt="" style={{ width: "200px", height: "200px" }}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div class="container-xxl py-6">
        <div class="container">
          <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s"style={{ maxWidth: "500px" }}>
            <h6 class="text-primary text-uppercase mb-2">Meet The Team</h6>
            <h1 class="display-6 mb-4">We Have Great Experience Of Driving</h1>
          </div>
          <div class="row g-0 team-items">
            <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div class="team-item position-relative">
                <div class="position-relative">
                  <img class="img-fluid" src="assets/img/team-1.jpg" alt="" />
                  <div class="team-social text-center">
                    <a
                      class="btn btn-square btn-outline-primary border-2 m-1"
                      href=""
                    >
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a
                      class="btn btn-square btn-outline-primary border-2 m-1"
                      href=""
                    >
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a
                      class="btn btn-square btn-outline-primary border-2 m-1"
                      href=""
                    >
                      <i class="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div class="bg-light text-center p-4">
                  <h5 class="mt-2">Full Name</h5>
                  <span>Trainer</span>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div class="team-item position-relative">
                <div class="position-relative">
                  <img class="img-fluid" src="assets/img/team-2.jpg" alt="" />
                  <div class="team-social text-center">
                    <a
                      class="btn btn-square btn-outline-primary border-2 m-1"
                      href=""
                    >
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a
                      class="btn btn-square btn-outline-primary border-2 m-1"
                      href=""
                    >
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a
                      class="btn btn-square btn-outline-primary border-2 m-1"
                      href=""
                    >
                      <i class="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div class="bg-light text-center p-4">
                  <h5 class="mt-2">Full Name</h5>
                  <span>Trainer</span>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div class="team-item position-relative">
                <div class="position-relative">
                  <img class="img-fluid" src="assets/img/team-3.jpg" alt="" />
                  <div class="team-social text-center">
                    <a
                      class="btn btn-square btn-outline-primary border-2 m-1"
                      href=""
                    >
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a
                      class="btn btn-square btn-outline-primary border-2 m-1"
                      href=""
                    >
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a
                      class="btn btn-square btn-outline-primary border-2 m-1"
                      href=""
                    >
                      <i class="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div class="bg-light text-center p-4">
                  <h5 class="mt-2">Full Name</h5>
                  <span>Trainer</span>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
              <div class="team-item position-relative">
                <div class="position-relative">
                  <img class="img-fluid" src="assets/img/team-4.jpg" alt="" />
                  <div class="team-social text-center">
                    <a
                      class="btn btn-square btn-outline-primary border-2 m-1"
                      href=""
                    >
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a
                      class="btn btn-square btn-outline-primary border-2 m-1"
                      href=""
                    >
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a
                      class="btn btn-square btn-outline-primary border-2 m-1"
                      href=""
                    >
                      <i class="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div class="bg-light text-center p-4">
                  <h5 class="mt-2">Full Name</h5>
                  <span>Trainer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default DashBoard;
