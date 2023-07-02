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
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
            Aveti Learning
            </h3>
           
            <p>
             worked as a software developer intern 
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
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
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
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
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
           
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
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
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
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
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
           
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">Engineering C.S.E
            </h3>
            <h4 className="vertical-timeline-element-subtitle"></h4>
            <p>
        Started my Bachelor of Technology (B.Tech) in Computer Science and Engineering from Krishna Engineering College
            </p>
          </VerticalTimelineElement>

       

          
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">12th
            </h3>
            <h4 className="vertical-timeline-element-subtitle"></h4>
            <p>
        
            Completed 12th standard from Central Board of Secondary Education
            </p>
          </VerticalTimelineElement>

 
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
           
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">10th
            </h3>
            <h4 className="vertical-timeline-element-subtitle"></h4>
            <p>
        
            Completed 10th standard from Central Board of Secondary Education
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
