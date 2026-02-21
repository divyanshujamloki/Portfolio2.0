import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import PageHeaderContent from "../../Components/PageHeader";
import "./Style.scss"
import { BsInfoCircleFill } from "react-icons/bs";



export default function Experience() {
  return (
    <section id="exprience" className="exprience">
      <PageHeaderContent
        headerText="Experience"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(67 73 78)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(67 73 78)" }}
            iconStyle={{ background: "rgb(67 73 78)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              <a
                href="https://www.vega6.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'white' }}
              >
                Vega6 Webware Technologies
              </a>
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Full Stack Developer | 02/2025 – Present</h4>
            <p>
              Leading AI/ML full-stack development initiatives, focusing on scalable architecture and performance.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(67 73 78)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(67 73 78)" }}
            iconStyle={{ background: "rgb(67 73 78)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              <a
                href="https://en.wikipedia.org/wiki/Director_General_Armed_Forces_Medical_Services_(India)"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'white' }}
              >
                Directorate General of Armed Forces Medical Services (DGAFMS)
              </a>
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Full Stack Developer | 12/2023 – 02/2025</h4>
            <p>
              Developed a full-stack HR and officer portfolio system for the Army, Navy, and Air Force (DGAFMS), improving efficiency by 75% and reducing manual work by 85%.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(67 73 78)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(67 73 78)" }}
            iconStyle={{ background: "rgb(67 73 78)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              <a
                href="https://avetilearning.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'white' }}
              >Aveti Learning</a>

            </h3>
            <h4 className="vertical-timeline-element-subtitle">Software Developer Intern | 02/2023 – 05/2023</h4>
            <p>
              Contributed to educational technology platforms and optimized frontend user experiences.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(67 73 78)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(67 73 78)" }}

            iconStyle={{ background: "rgb(67 73 78)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              Tech Sprint
            </h3>
            <h2 className="vertical-timeline-element-subtitle"></h2>
            <p>
              Participated in Tech Sprint Hackathon 2023 organized by Ramanujan College, Delhi University
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(67 73 78)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(67 73 78)" }}

            iconStyle={{ background: "rgb(67 73 78)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              Invictus 2023
            </h3>
            <h4 className="vertical-timeline-element-subtitle"></h4>
            <p>
              Participated in Invictus 2023 coding events organized by Delhi Technological University (DTU)
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(67 73 78)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(67 73 78)" }}

            iconStyle={{ background: "rgb(67 73 78)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              AKTU Annual Fest - Zonals
            </h3>
            <h4 className="vertical-timeline-element-subtitle"></h4>
            <p>
              Represent my college in zonal level coding competition of our university's annual fest
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(67 73 78)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(67 73 78)" }}

            iconStyle={{ background: "rgb(67 73 78)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">Victory Point
            </h3>
            <h4 className="vertical-timeline-element-subtitle"></h4>
            <p>
              Worked as a Front-end developer in MERN Stack
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(67 73 78)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(67 73 78)" }}

            iconStyle={{ background: "rgb(67 73 78)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">Engineering C.S.E
            </h3>
            <h4 className="vertical-timeline-element-subtitle"></h4>
            <p>
              Started my Bachelor of Technology (B.Tech) in Computer Science and Engineering from Krishna Engineering College
              I Divison with distinction (8.01 cgpa)
            </p>
          </VerticalTimelineElement>




          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(67 73 78)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(67 73 78)" }}

            iconStyle={{ background: "rgb(67 73 78)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">12th
            </h3>
            <h4 className="vertical-timeline-element-subtitle"></h4>
            <p>

              Completed 12th standard from Central Board of Secondary Education (cgpa 9.1)
            </p>
          </VerticalTimelineElement>


          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(67 73 78)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(67 73 78)" }}

            iconStyle={{ background: "rgb(67 73 78)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">10th
            </h3>
            <h4 className="vertical-timeline-element-subtitle"></h4>
            <p>

              Completed 10th standard from Central Board of Secondary Education (cgpa 9.0)
            </p>
          </VerticalTimelineElement>






          <VerticalTimelineElement
            iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          />
        </VerticalTimeline>
      </div>
    </section>
  );
}
