import React, { useContext } from "react";
import Header from "../Ui/Header";
import "../Styles/dashboard.css";
import myImage from "../Multimedia/my images.jpeg";
import project1 from "../Multimedia/project1.jpeg";
import project2 from "../Multimedia/project2.jpeg";
import project3 from "../Multimedia/project4.jpeg";
import Footer from "../Ui/Footer";
import * as Yup from "yup";
import { EmailContext } from "../../Context/EmailContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const contactSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  message: Yup.string()
    .min(10, "Message must be at least 5 characters")
    .required("Message is required"),
});

const Dashboard = () => {
  const { sendEmail, sendingEmail } = useContext(EmailContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  
  const onSubmit = async (form) => {
    const result = await sendEmail(form);

    
  }
  return (
    <div
      style={{
        backgroundColor: "rgb(254,250,246)",
      }}
    >
      <div>
        <Header />
      </div>
      <div
        style={{
          background:
            "linear-gradient(135deg, #FFF1F3 0%, #FFE4E6 50%, #FFF7ED 100%)",
        }}
        id="home"
      >
        <div
          className="dashboard-container"
        >
          <div
            style={{
              backgroundColor: "rgba(241, 192, 106, 1)",
              width: "250px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "10px",
              borderRadius: "15px",
              color: "white",
              fontWeight: "bold",
            }}
          >
            <p>Avaliable for freelance work</p>
          </div>
          <div className="dashboard-section1">
            <div>
              <h1>
                Hello, I'm Adeniyi Feranmi <span>Full-Stack</span> Developer
              </h1>
              <p>
                Beyond writing code, I design solutions. I focus on real
                problems, not just features. Every build has a purpose and
                impact. Technology is my tool, solutions are the goal.
              </p>
              <div className="dashboard-section1-buttons">
                <a href="">
                  <button className="button1">View Projects</button>
                </a>
                <a href="">
                  <button className="button2">Contact Me</button>
                </a>
              </div>
            </div>
            <div className="dashboard-image-div">
              <img src={myImage} alt="" />
              <div className="div1">
                <h3>Node.js</h3>
              </div>
              <div className="div2">
                <h3>React</h3>
              </div>
              <div className="div3">
                <h3>CSS3</h3>
              </div>
              <div className="div4">
                <h3>HTML5</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard-section2" id="project">
        <div className="dashboard-section2-paragraph">
          <h1>Selected Projects</h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "18%",
              height: "5px",
              margin: "auto",

              backgroundColor: "rgb(220,124,6)",
            }}
          ></div>
          <p>
            A showcase of production-ready applications solving real-world
            problems through modern web technologies.
          </p>
        </div>
        <div className="dashboard-project">
          <div className="dashboard-card">
            <div>
              <img src={project1} alt="" />
            </div>
            <div className="dashboard-text">
              <h2>AI Video Generator Platform</h2>
              <p>
                {" "}
                Text-to-video generation platform that transforms written
                prompts into engaging video content using artificial
                intelligence.
              </p>
              <div className="stack">
                <p>React</p>
                <p>Node.js</p>
                <p>Tailwind</p>
                <p>Express</p>
                <p>Vite</p>
                <p>MongoDB</p>
              </div>

              <div className="dashboard-link">
                <a href="https://picgi-x-15vk.vercel.app/" target="_blank">
                  <i class="bi bi-box-arrow-up-right"></i> Live Demo
                </a>
                <a
                  href="https://github.com/adeniyiferanmi/PicgiX.git"
                  target="_blank"
                >
                  <i className="bi bi-github"></i>View Code
                </a>
              </div>
            </div>
          </div>
          <div className="dashboard-card">
            <div>
              <img src={project2} alt="" />
            </div>
            <div className="dashboard-text">
              <h2>Mobile Commerce Platform</h2>
              <p>
                A full-featured mobile e-commerce platform enabling users to
                browse, purchase, and manage smartphone orders seamlessly.
              </p>
              <div className="stack">
                <p>HTML</p>
                <p>CSS</p>
                <p>JAVASCRIPT</p>
                <p>FIREBASE</p>
              </div>
              <div className="dashboard-link">
                <a
                  href="https://adeniyiferanmi.github.io/mobile-collection/"
                  target="_blank"
                >
                  <i className="bi bi-box-arrow-up-right"></i> Live Demo
                </a>
                <a
                  href="https://github.com/adeniyiferanmi/mobile-collection.git"
                  target="_blank"
                >
                  <i className="bi bi-github"></i>View Code
                </a>
              </div>
            </div>
          </div>
          <div className="dashboard-card">
            <div>
              <img src={project3} alt="" />
            </div>
            <div className="dashboard-text">
              <h2>Kuda Website</h2>
              <p>A responsive website</p>
              <div className="stack">
                <p>HTML</p>
                <p>CSS</p>
                <p>Bootstrap</p>
              </div>
              <div className="dashboard-link">
                <a
                  href="https://adeniyiferanmi.github.io/kuda/"
                  target="_blank"
                >
                  <i className="bi bi-box-arrow-up-right"></i> Live Demo
                </a>
                <a
                  href="https://github.com/adeniyiferanmi/kuda.git"
                  target="_blank"
                >
                  <i className="bi bi-github"></i>View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard-section3" id="skill">
        <div>
          <h1>Technical Skillset</h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "18%",
              height: "5px",
              margin: "auto",
              backgroundColor: "rgb(220,124,6)",
            }}
          ></div>
          <p>
            The technologies I use to design, build, and deliver scalable
            applications.
          </p>
        </div>
        <div className="dashboard-grid">
          <div className="dashboard-stack">
            <div className="dashboard-icon">
              <i class="bi bi-globe2"></i>
            </div>
            <h4>React</h4>
          </div>
          <div className="dashboard-stack">
            <div className="dashboard-icon">
              <i class="bi bi-hdd-stack-fill"></i>
            </div>
            <h4>Node.js</h4>
          </div>
          <div className="dashboard-stack">
            <div className="dashboard-icon">
              <i class="bi bi-database-fill"></i>
            </div>
            <h4>MongoDB</h4>
          </div>

          <div className="dashboard-stack">
            <div className="dashboard-icon">
              <i class="bi bi-bootstrap-fill"></i>
            </div>
            <h4>Bootstrap</h4>
          </div>

          <div className="dashboard-stack">
            <div className="dashboard-icon">
              <i class="bi bi-file-code-fill"></i>
            </div>
            <h4>HTML5</h4>
          </div>

          <div className="dashboard-stack">
            <div className="dashboard-icon">
              <i class="bi bi-css"></i>
            </div>
            <h4>CSS3</h4>
          </div>
          <div className="dashboard-stack">
            <div className="dashboard-icon">
              <i class="bi bi-terminal-fill"></i>
            </div>
            <h4>JavaScript</h4>
          </div>
          <div className="dashboard-stack">
            <div className="dashboard-icon">
              <i class="bi bi-git"></i>
            </div>
            <h4>Git workflow</h4>
          </div>

          <div className="dashboard-stack">
            <div className="dashboard-icon">
              <i class="bi bi-cloud-fill"></i>
            </div>
            <h4>Cloudinary</h4>
          </div>

          <div className="dashboard-stack">
            <div className="dashboard-icon">
              <i class="bi bi-server"></i>
            </div>
            <h4>Express.js</h4>
          </div>
          <div className="dashboard-stack">
            <div className="dashboard-icon">
              <i class="bi bi-palette"></i>
            </div>
            <h4>Tailwind CSS</h4>
          </div>

          <div className="dashboard-stack">
            <div className="dashboard-icon">
              <i class="bi bi-fire"></i>
            </div>
            <h4>Firebase</h4>
          </div>
        </div>
      </div>
      <div className="dashboard-section4" id="contact">
        <div>
          <h1>Contact Me</h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "12%",
              height: "5px",
              margin: "auto",
              backgroundColor: "rgb(220,124,6)",
            }}
          ></div>
          <p className="dashboard-paragraph">
            Have a project in mind or want to explore potential opportunities?
            I’d be glad to connect.
          </p>
        </div>
        <div className="dashboard-contact-form">
          <div className="dashboard-contact">
            <h5>Contact Information</h5>
            <div className="dashboard-cotact-info">
              <i class="bi bi-envelope"></i>
              <div>
                <h6>Email</h6>
                <p>adeniyiferanmi2024@gmail.com</p>
              </div>
            </div>
            <div className="dashboard-cotact-info">
              <i class="bi bi-telephone"></i>
              <div>
                <h6>Phone</h6>
                <p>+234 901 4859 405</p>
              </div>
            </div>
            <div className="dashboard-cotact-info">
              <i class="bi bi-geo-alt"></i>
              <div>
                <h6>Location</h6>
                <p>Oyo State, Nigeria</p>
              </div>
            </div>
            <div className="dashboard-contact-social">
              <h4>Follow Me</h4>
              <div className="dashboard-social-icons">
                <a href="https://github.com/adeniyiferanmi" target="_blank">
                  <i class="bi bi-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/feranmi-adeniyi-489526371/"
                  target="_blank"
                >
                  <i class="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="dashboard-form">
            <h5>Send Me a Message</h5>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label htmlFor="">Your Name</label>
                <input type="text" {...register("name", { required: true })} />
              </div>
              <div>
                <label htmlFor="">Your Email</label>
                <input type="text" {...register("email", { required: true })} />
              </div>
              <div>
                <label htmlFor="">Your Message</label>
                <textarea name="" id="" cols="30" rows="10" {...register("message", { required: true })}></textarea>
              </div>
              <button disabled={sendingEmail}>{sendingEmail ? "Sending..." : "Send Message"}</button>
            </form>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
