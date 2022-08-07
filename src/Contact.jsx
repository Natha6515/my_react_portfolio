import React from "react";
import './Home.css';
import emailjs from 'emailjs-com';

const Contact = () => {

  const sendEmail = (form) => {
       
       form.preventDefault();

    emailjs.sendForm('service_6w6mb0j','template_ekuhac9',form.target ,'fzrDKPRcGQ73oveQ-')
    .then(function(response) {
        alert('SUCCESS!', response.status, response.text);
     }, function(error) {
        alert('FAILED...', error);
     });

  };

    return (
        <>
           <div className="my-5">
              <h1 className="text-center hedingModifi">Contact Me</h1>
           </div>
           <div className="container-fluid d-flex justify-content-center">
              <div className="row">
                 <div className="col-md-6 col-10 col-sm-8 mx-auto">
                  <form className="bg-light" onSubmit={sendEmail}>
                    <div class="form-group">
                      <label for="formGroupExampleInput"> First Name </label>
                      <input type="text" class="form-control my-2" id="formGroupExampleInput" name="fn" placeholder="Your Name"/>
                    </div><div class="form-group">
                      <label for="formGroupExampleInput"> Last Name </label>
                      <input type="text" class="form-control my-2" id="formGroupExampleInput" name="ln" placeholder="Surname"/>
                    </div>
                    <div className="form-group my-2">
                      <label for="exampleFormControlInput1"> Mobile Number </label>
                      <input type="text" className="form-control my-2" id="exampleFormControlInput1" name="mob" placeholder="10 digit number"/>
                    </div>
                    <div className="form-group my-2">
                      <label for="exampleFormControlInput1"> Email Address </label>
                      <input type="email" className="form-control my-2" id="exampleFormControlInput1" name="email" placeholder="name@example.com"/>
                    </div>
                    <div className="form-group">
                      <label for="exampleFormControlTextarea1"> Subject </label>
                      <textarea className="form-control my-2" id="exampleFormControlTextarea1" name="subject" rows="3"></textarea>
                    </div>
                    <div className="mt-4 d-flex justify-content-center my-5">
                      <button type="submit" className="btn_color px-3">Submit</button>
                    </div>
                  </form>
                 </div>

              </div>
           </div>
        </>
      );

};

export default Contact;