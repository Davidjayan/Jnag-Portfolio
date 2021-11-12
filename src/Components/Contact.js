import React from "react";
import './styles/Contact.css';

const Contact = () =>{
    return(
        <div className="contact-body">
           <div className="foot1">
               Follow us on Social Medias
              <a> <i className="fab fa-instagram"></i></a>
              <a> <i className="fab fa-facebook"></i></a>
              <a> <i class="fab fa-youtube"></i></a>
           </div>
           <div className="foot2">
              <p> Mail to :<a href="mailto:tanbarasanjnag@gmail.com" >  tanbarasanjnag@gmail.com</a></p>
            <p><a href="tel:+919840436181">9840436181</a></p>

           </div>
        </div>
    )
}
export default Contact;