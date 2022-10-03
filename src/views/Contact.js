import React,{useState} from 'react';

const Contact = () => {

    const [formItems, setFormItems] = useState({
        name:"",
        email:"",
        subject:"",
        message:"",
    });

    const handleChange = (e) => {
        e.preventDefault();

        const {name, value} = e.target;

        setFormItems((prevState) => ({...prevState,[name]:value}));
    }

    const submitForm = (e) => {
        e.preventDefault();
        alert(JSON.stringify(formItems))
        //postoptions
    }

  return (
    <div>
      <div class="container-fluid page-header py-6 my-6 mt-0 wow fadeIn" data-wow-delay="0.1s">
        <div class="container text-center">
            <h1 class="display-4 text-white animated slideInDown mb-4">Contact Us</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol class="breadcrumb justify-content-center mb-0">
                    <li class="breadcrumb-item"><a class="text-white" href="#">Home</a></li>
                    <li class="breadcrumb-item"><a class="text-white" href="#">Pages</a></li>
                    <li class="breadcrumb-item text-primary active" aria-current="page">Contact</li>
                </ol>
            </nav>
        </div>
    </div>
    <div class="container-xxl py-6">
        <div class="container">
            <div class="row g-5">
                <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" style={{minHeight: "450px"}}>
                    <div class="position-relative h-100">
                        <iframe class="position-relative w-100 h-100"
                        src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d369.1640320570288!2d-0.29669545587352103!3d5.601659467614071!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sgh!4v1659379501635!5m2!1sen!2sgh" frameborder="0" style={{minHeight: "450px", border:"0"}} allowfullscreen="" aria-hidden="false"
                        tabindex="0"></iframe>
                    </div>
                </div>
                <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                    <h6 class="text-primary text-uppercase mb-2">Contact Us</h6>
                    <h1 class="display-6 mb-4">If You Have Any Query, Please Contact Us</h1>
                    <p class="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p>
                    <form id='frmSidney' onSubmit={submitForm}>
                        <div class="row g-3">
                            <div class="col-md-6">
                                <div class="form-floating">
                                    <input type="text" class="form-control border-0 bg-light" id="name" placeholder="Your Name" name='name' value={formItems.name} onChange={handleChange} required />
                                    <label for="name">Your Name</label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-floating">
                                    <input type="email" class="form-control border-0 bg-light" id="email" placeholder="Your Email" name='email' value={formItems.email} onChange={handleChange} required />
                                    <label for="email">Your Email</label>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="form-floating">
                                    <input type="text" class="form-control border-0 bg-light" id="subject" placeholder="Subject" name='subject' value={formItems.subject} onChange={handleChange} required />
                                    <label for="subject">Subject</label>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="form-floating">
                                    <textarea class="form-control border-0 bg-light" placeholder="Leave a message here" id="message" style={{height: "150px"}} name='message' value={formItems.message} onChange={handleChange} required ></textarea>
                                    <label for="message">Message</label>
                                </div>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-primary py-3 px-5" type="submit"  >Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Contact
