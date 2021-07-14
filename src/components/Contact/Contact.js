import React from 'react'
import emailjs from 'emailjs-com';
import Form from 'react-bootstrap/Form';

import './Contact.scss';

function Contact() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_klnupno', 'template_erechao', e.target, 'user_LVelaRjEnySJLjHM3xmUy')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (

<section className="contact">

  <div className="contact__wrapper"> 
      <div className="contact__div">
        <h1 className="contact__title">Contact Me</h1>
    <Form className="contact__form" onSubmit={sendEmail}>
      <Form.Group controlId="formGroupName">
    <Form.Label className="label" >Name</Form.Label>
    <Form.Control type="name" placeholder="Name" />
  </Form.Group>
  <Form.Group controlId="formGroupEmail">
    <Form.Label className="label" >Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>
  <Form.Group  controlId="formGroupComment">
    <Form.Label className="label">Comment</Form.Label>
    <Form.Control className="contact__comment" type="comment" placeholder="Leave a message" />
  </Form.Group>
</Form>
</div>

</div>
</section>
    
  );
}

export default Contact;