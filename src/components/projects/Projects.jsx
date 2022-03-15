import React from "react";
import "./projects.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Projects() {
  React.useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div className="projects" id="projects">
      <h1>Projects</h1>
      <div className="line"></div>
      <div data-aos="fade-right" className="pcards">
        <div className="pimg">
          <img src={"assets/Pantaloons.jpeg"} alt="" />
        </div>
        <div className="pinf">
          {/* <div className="pinfone"> */}
          <h3>Pantaloons</h3>
          <p>Pantaloons is one of India's largest fast-fashion store brands.</p>

          <div className="features">
            <p>
              <h3>Feature</h3>
            </p>
            <ul>
              <li>
                Contains the same workflow as the original website of
                Pantaloons.
              </li>
              <li>Sorting functionality in the product section.</li>
              <li>
                Applying coupon code (provide discount on the total price).
              </li>
            </ul>
          </div>

          {/* </div> */}
          <h4>Tech Stack</h4>
          <p><span><img className="skill" src={"assets/html5.png"}></img></span><span><img className="skill1" src={"assets/css3.png"}></img></span><span className="p"><img className="skill2" src={"assets/JavaScript.png"}></img></span></p>
          <div className="card_btn">
            <button>
              <a target="_blank" href="https://selva658.github.io/Pantaloons/">
                DEMO
              </a>
            </button>
            <button>
              <a target="_blank" href="https://github.com/selva658/Pantaloons">
                {" "}
                CODE
              </a>
            </button>
          </div>
        </div>
      </div>

      <div data-aos="fade-left" className="pcards">
        <div className="pimg">
          <img src={"assets/Lybrate.jpeg"} alt="" />
        </div>
        <div className="pinf">
          <h3>Lybrate</h3>
          <p>
            Lybrate is a mobile healthcare technology company that developed an
            online platform to connect doctors and patients..
          </p>

          <div className="features">
            <p>
              <h3>Feature</h3>
            </p>
            <ul>
              <li> Mock server Authentication(for login/signup)</li>
              <li>Filter and sorting functionality in product page</li>
              <li> Authentication in the payment section.</li>
            </ul>
          </div>

          <h4>Tech Stack</h4>
          <p><span><img className="skill" src={"assets/html5.png"}></img></span><span><img className="skill1" src={"assets/css3.png"}></img></span><span className="p"><img className="skill1" src={"assets/express.png"}></img></span><span className="p"><img className="skill1" src={"https://cdn.svgporn.com/logos/nodejs-icon.svg"}></img></span><span className="p"><img className="skill1" src={ "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"}></img></span></p>
          <div className="card_btn">
            <button>
              <a
                target="_blank"
                href="https://selva658.github.io/Lybrate_Clone_Project/"
              >
                DEMO
              </a>
            </button>
            <button>
              <a
                target="_blank"
                href="https://github.com/selva658/Lybrate_backend"
              >
                {" "}
                CODE
              </a>
            </button>
          </div>
        </div>
      </div>

      <></>

      {/* <div className="pcards">
        <div className="pimg">
          <img src={"assets/indeed1.png"} alt="" />
        </div>
        <div className="pinf">
          <h3>Indeed(clone)</h3>
          <p>
            A clone of online Job search platform which provides a number of job opportunities for the jobseekers.
          </p>
          <h4>Tech Stack</h4>
          <p>React . Material-UI . Bootstrap . Styled-Components</p>
          <div className="card_btn">
            <button><a target="_blank" href="https://clone-of-indeed.netlify.app/">DEMO</a></button>
            <button><a target="_blank" href="https://github.com/sheikhtausif/IndeedClone"> CODE</a></button>
          </div>
        </div>
          </div> */}
    </div>
  );
}
