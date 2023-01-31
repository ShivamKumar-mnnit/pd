import React from 'react'
import bg1 from '../../img/bg.png';
import './intro.css';

function intro() {
  return (
    <div className='main-body' id='home'>
      <div className='bg1'>
        <img src={bg1} alt="#" />
        
      </div>

      <div className='lowerbody' id='years'>

        <div className='firstyear' id='firstyear'>


          <h1>First Year</h1>
        </div>
        <div class="container">

          <a href='/firstyear' alt="#">
            <div class="card">
              <div class="face face1">
                <div class="content">
                  <span class="stars"></span>
                  <h2 class="java">Subjects</h2>
                  <p class="java">
                        1.Mathematics
                  <br />2.Physics
                  <br />3.Chemistry
                  <br />4.Computer Programming
                  <br />5.Introduction to Computer Organisation
                  <br />6.Introduction to AI
                  <br />7.Workshop
                  <br />8.Environment and climate change
                  <br />9.Professional Communication
                  <br />10.Engineering Graphics
                  <br />...
                  </p>
                </div>
              </div>


              <div class="face face2">
                <h2>Theory</h2>
              </div>
            </div>
          </a>

          <a href='/firstyear/lab' alt="#">
          <div class="card">
            <div class="face face1">
              <div class="content">
                <span class="stars"></span>
                <h2 class="python">Labs</h2>
                <p class="python">1.Physics<br />2.Workshop<br />3.Basic Electronics Lab<br />4.Digital Electronics Lab<br />5.Principle of Electronics</p>
              </div>
            </div>
            <div class="face face2">
              <h2>Laboratories</h2>
            </div>
          </div>
          </a>


          <div class="card">
            <div class="face face1">
              <div class="content">
                <span class="stars"> </span>
                <h2 class="cSharp">Papers</h2>
                <p class="cSharp">Mid semester<br />End semester<br/><br/>As per the new education policy the papers will be available soon. </p>
              </div>
            </div>
            <div class="face face2">
              <h2>Papers</h2>
            </div>
          </div>
        </div>

        <div className='secondyear' id='secondyear'>
          <h1>Second Year</h1>
        </div>

        <div class="container">
          <div class="card">
            <div class="face face1">
              <div class="content">
                <span class="stars"></span>
                <h2 class="java">Coming Soon</h2>
              </div>
            </div>
            <div class="face face2">
              <h2>Branch</h2>
            </div>
          </div>

          <div class="card">
            <div class="face face1">
              <div class="content">
                <span class="stars"></span>
                <h2 class="python">Coming Soon</h2>
              </div>
            </div>
            <div class="face face2">
              <h2>Laboratories</h2>
            </div>
          </div>

          <div class="card">
            <div class="face face1">
              <div class="content">
                <span class="stars"></span>
                <h2 class="cSharp">Coming Soon</h2>
              </div>
            </div>
            <div class="face face2">
              <h2>Papers</h2>
            </div>
          </div>
        </div>

       

      </div>


       {/*for about us*/}
       <div  id='about-us'>

<h1>About us</h1>
<p>Get Free Study Material in Pendown. Our Materials are Well-Structured for First Year Btech Students. Topics are in pdf Format. It is Better to Download the pdf for Better Experience. There is also Notetaking Advantage on Pendown Which will Help you to Remember your Tasks or to take Instant Notes.<br/>This Website is Beta-version. The full version of the Website as per the New Education with complete content will be available as soon as Possible. </p>
<p class="para-right"><br/> Pendown<a href="https://mickey-mi.github.io/portfolio/">Shivam kumar</a>Ayush kumar<br/>Accessed: 31st jan 2023</p>
</div>

    </div>
  )
}

export default intro