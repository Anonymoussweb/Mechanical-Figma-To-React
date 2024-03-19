import { useState } from 'react'
import './App.css'
import { FaPhone, FaSquareFacebook, FaLinkedin } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineLocalPhone } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";






function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
        <div className="upper-nav">

          <div className='turn' >
            <h2>TURNAROUND TIME 24-48 HOUR!</h2>
            <div className='aff' >
              <h2 >Afforable Estimate (30% off) </h2>
            </div>
          </div>
          <div>
            <p className='phone'> <FaPhone style={{ borderRadius: "50%", border: "1px solid white", fontSize: "23px" }} /> +1 917 300 1079</p>
            <p className='mail'> <IoIosMail style={{ borderRadius: "50%", border: "1px solid white", fontSize: "25px" }} /> Dave@procoreestimators.com</p>
          </div>
          <div>
            <a href=""> <FaFacebook /></a>
            <a href=""><FaLinkedin style={{ marginLeft: "10px" }} /></a>
          </div>

        </div>
        {/* ------------------------ */}

        <div className='navbar'>
          <a href=""><img src="logo (5) 1.png" alt="" /></a>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Service</a></li>
            <li><a href="">About us</a></li>
            <li><a href="">Payment</a></li>
            <li><a href="">Testimonials</a></li>
            <li><a href="">Samples</a></li>
            <li><a href="">Estimation fee</a></li>
            <li><a href="">Contact us</a></li>
            <li className='nbtn'><a style={{color:"white"}} href="">Get Estimate</a></li>
          </ul>
        </div>
        {/* -----------------------Banner-------------------------- */}

        <div className='slider'>
          <p>Mechanical/Plumbing</p>
        </div>
        {/* --------------------------Paragraph--------------------------- */}
        <div className='slider-paragraph'>

          <div className="sliderinner">          <p>
            At <span>Procore Estimators</span>, our area of expertise lies in delivering precise and dependable mechanical and plumbing estimates. Our seasoned team of estimators grasps the complexities of mechanical and plumbing systems, offering all-encompassing and thorough estimates for your projects. Catering to both residential and commercial constructions, we factor in equipment, materials, labor, and project-specific requirements. Our unwavering commitment to providing vital information enables our clients to make well-informed decisions to ensure the success of their projects. Our mechanical and plumbing estimates form the bedrock of a triumphant construction project.
          </p>
          </div>

        </div>
        {/* -------------------------row1--------------------------- */}
        <div className='after-paragraph'>
          <p>Mechanical Estimation Data</p>
          <div className='row'>
            <div className='d1'>
              <h3>HVAC</h3>
              <img src="r1.png" alt="" />
            </div>
            <div className='d2'>
              <h3>Mechanical Equipment <br /> Installation</h3>
              <img src="r2.jpg" alt="" />
            </div>
            <div className='d3'>
              <h3>Energy Efficiency Updates</h3>
              <img src="r3.jpg" alt="" />
            </div>
          </div>
        </div>
        {/* -------------------------row2--------------------------- */}
        <div className='after-paragraph'>
          <p style={{ marginTop: "40px" }}>Plumbing Estimation Data</p>
          <div className='row'>
            <div className='d1'>
              <h3>Piping Systems</h3>
              <img src="r1.png" alt="" />
            </div>
            <div className='d2'>
              <h3 style={{ marginTop: "30px" }}>Fixtures and Sanitaryware</h3>
              <img src="r2.jpg" alt="" />
            </div>
            <div className='d3'>
              <h3>Drainage and Water Supply</h3>
              <img src="r3.jpg" alt="" />
            </div>
          </div>
        </div>
        {/* --------------------------After Rows-------------------------- */}

        <div className='Content-section'>

          <div className='Content-section1'>
            <h3>Benefits of Mechanical Estimation</h3>
            <ul>
              <li>Getting access to the industry standard insights</li>
              <li>Understanding the internal project cost.</li>
              <li>Getting the most reliable mechanical estimates.</li>
              <li>Increasing the probability of high profit.</li>
              <li>Boosting their win-bid ratio.</li>
              <li>Streamlining their project activities with more confidence.</li>
              <li>Identifying the errors and flaws in their mechanical project.</li>
              <li>Mitigating the potential risk while saving their time and <br /> money.</li>
            </ul>
          </div>

          <div className='Content-section2'>
            <div className='ul1'>
              <h3>Our Plumbing Estimating Services</h3>
              <ul>
                <li>Cold Water Pipes</li>
                <li>Hot Water Pipes</li>
                <li>Vent Pipes</li>
                <li>Gas Pipes</li>
                <li>Sanitary Pipes</li>
                <li>Underground Pipes</li>
                <li>Pipe Fittings</li>
              </ul>
            </div>
            <div className='ul2'>
              <ul>
                <li>Pipe Concealment</li>
                <li>Insulations</li>
                <li>Valves</li>
                <li>Hangers</li>
                <li>Struts</li>
                <li>Supports</li>
              </ul>
            </div>
          </div>

          <div className='abs'>
            <img src="Rectangle 247.png" alt="" />
          </div>
        </div>
        {/* -----------------------Are You Ready Content Section------------------------ */}
        <div className='ready'>
          <h2>Are You Ready To Get Started With Us!</h2>
          <h3>
            1- Upload your Plans
          </h3>
          <p>
            <span style={{ borderBottom: "2px solid " }}>Click Here </span> to upload your plans. we accept PDF format and your plans can be Bid set, Schematic, Design Development, Construction document, or conceptual drawings.
          </p>
          <h3>
            2- Get a Quote
          </h3>
          <p>
            Quotes will be based on invoice, delivery date, and turnaround time.
          </p>
          <h3>
            3- Receive Estimate
          </h3>
          <p>
            Estimates will be delivered to you in EXCEL sheets comprising all the material and labor pricing with cut reports either in MasterFormat or your customized format.
          </p>

        </div>
        {/* --------------------Look----------------------------- */}
        <div className='look'>
          <h2>Take a Look at our Trades</h2>
          <div className='sublook'>
            <div className='l1'>
              <img src="l3.png" alt="" />
              <p>General requirement</p>
            </div>
            <div className='l1'>
              <img src="l4.png" alt="" />
              <p>General requirement</p>
            </div>
            <div className='l1'>
              <img src="l2.png" alt="" />
              <p>General requirement</p>
            </div>
            <div className='l1'>
              <img src="l1.png" alt="" />
              <p>General requirement</p>
            </div>

          </div>

        </div>
        {/* ----------------------Bottom Slider--------------------------- */}
        <div className='bslider'>
          <div>
            <p>UPLOAD YOUR PLANS</p>
            <div className='a'>
              <a href=""><img src="i1.png" alt="" /></a>
              <a href=""><img src="i2.png" alt="" /></a>
            </div>

          </div>
          <div>
            <h2>For a quick quote based on your project scope, call us at +1 917 300 1079 or email us at Dave@procoreestimators.com </h2>
          </div>
        </div>
        {/* -------------------------------Footer------------------------------- */}
        <div className="footer">


          <div className='f1'>
            <img src="logof.png" alt="" />
            <p>PROCORE Estimators are an industry leader in providing accurate and reliable construction cost estimation services. We specialize in Quantity and Material Takeoff, Scheduling, and Planning for your project management needs. Our experts use advanced softwares and we pay close attention to detail to ensure accurate estimates. We provide you with accurate information in a timely manner, enabling you to make informed decisions and execute projects efficiently. Rely on PROCORE Estimators for precise and prompt cost estimation in construction.</p>
          </div>
          <div className='f2'>
            <h2>Navigation</h2>
            <h3>Service</h3>
            <h3>About us</h3>
            <h3>Payment</h3>
            <h3>Sample</h3>
          </div>
          <div className='f3'>
            <h2>Contact</h2>
            <p> <IoLocationOutline style={{borderRadius:"50%", border:"2px solid white"}}/> 2505 Bedford Ave, Brooklyn, NY 11226, USA</p>
            <p> <MdOutlineLocalPhone style={{borderRadius:"50%", border:"2px solid white"}}/> +1 917 300 1079</p>
            <p> <IoMailOutline style={{borderRadius:"50%", border:"2px solid white"}}/> &nbsp;

              Dave@procoreestimators.com</p>
          </div>


        </div>
        <div className='privacy'>
          <p>Copyright © 2023 Procore Estimators Designed By <span><img src="footert.png" alt="" /></span> &#174;  </p>
        </div>








      </div>
    </>
  )
}

export default App
