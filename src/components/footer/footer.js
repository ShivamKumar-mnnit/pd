import React from 'react';
import './footer.css';
import insta from "../../img/instagram.png";
import linkedin from "../../img/linkedin.png";
import blog from "../../img/blogimg.png";
import github from "../../img/github.png";

function footer() {
  return (
    
    <footer id='contact'>
<div class="row primary">
  <div class="column about">

  <h3>&nbsp;&nbsp;&nbsp;PenDown</h3>

   <p>A Study Material website for MNNIT Students created by: ShivamKumar (ElectricalEngineering) AyushKumar (ElectronicsAndCommunicationEngineering) collaborately.<br/>If You need any possible help then we will be Happy to help you. You can feel free to Contact us.
  </p>

  <div class="social">
    <i class="fa-brands fa-facebook-square"></i>
    <i class="fa-brands fa-instagram-square"></i>
    <i class="fa-brands fa-twitter-square"></i>
    <i class="fa-brands fa-youtube-square"></i>
    <i class="fa-brands fa-whatsapp-square"></i>
  </div>
</div>

<div class="column links">
<h3>Social Media</h3>

 <ul>
  <li>
  <a href="https://github.com/MICKEY-mi">
          <img src={github} alt="#" />  
          </a>
  </li>

  <li>
  <a href="https://instagram.com/shivamkumar6188?igshid=ZmZhODViOGI=">
   <img src={insta} alt="#"/>
   </a>
  </li>

  <li>  
  <a href="https://www.linkedin.com/in/shivam-kumar-9b2520224?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BLs6YrrONTi66SJqkBt%2FaZw%3D%3D">
  <img src={linkedin} alt="#"/>
  </a>
  </li>
  <li>
  <a href="https://mickeycode.blogspot.com/">
   <img src={blog} alt="#"/>
   </a>
  </li>

  </ul>

</div>
<div>

</div>

<div class="column subscribe">
 <h3>Contact</h3>
  <div>
    <input type="name" placeholder='Enter your name' required />
   <input type="email" placeholder="Your email id here" required />
   <input type="message" placeholder='Enter your message' required />
   <button>Send</button>
  </div>

</div>

</div>

<div class="row copyright">
  <div class="footer-menu">

  </div>
   <p>Copyright &copy; 2023Pendown. || All rights reserved</p>
</div>
</footer>


  )
}

export default footer