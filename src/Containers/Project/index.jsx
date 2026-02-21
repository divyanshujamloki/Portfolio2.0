import React from "react";
import PageHeaderContent from '../../Components/PageHeader'
import { BsInfoCircleFill } from "react-icons/bs";
import "./Style.scss";


import { useState } from "react";
import { Link } from "react-router-dom";

const ImageOne = "https://user-images.githubusercontent.com/77928275/237051892-51caafc3-fbf2-420b-b1c6-536a007279c5.png";
const ImageTwo = "https://user-images.githubusercontent.com/77928275/249864035-f303e38b-cab6-43f2-b778-32099a2883ff.png";
const ImageThree = "https://user-images.githubusercontent.com/77928275/200170481-4232c978-bdcd-4552-b80c-ff652630d832.png";
const ImageFour = "https://png.pngtree.com/png-clipart/20220621/original/pngtree-work-in-progress-warning-sign-with-yellow-and-black-stripes-painted-png-image_8161322.png";
const ImageFive = "https://png.pngtree.com/png-clipart/20220621/original/pngtree-work-in-progress-warning-sign-with-yellow-and-black-stripes-painted-png-image_8161322.png";
const portfolioData = [
  {
    id: 1,
    name: "Viblo - AI Video Platform",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // AI/Video related image
    link: "https://viblo.ai/",
  },
  {
    id: 2,
    name: "Ecommerce (D-COMM)",
    image: ImageOne,
    link: "https://github.com/divyanshujamloki/D-COMM",
  },
  {
    id: 3,
    name: "Spotify-clone",
    image: ImageThree,
    link: "https://github.com/divyanshujamloki/SpotifyClone",
  },
];

const filterData = [
  {
    filterId: 1,
    label: "Top Best Projects",

  },

];


const Portfolio = () => {
  const [filteredvalue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }

  console.log("====================================");
  console.log(hoveredValue);
  console.log("====================================");

  const filteredItems =
    filteredvalue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredvalue);

  console.log(filteredItems);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredvalue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
              {item.link}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <img alt="Image" src={item.image} />
                </a>
              </div>
              <div className="overlay">
                <div>
                  <p>{item.name}</p>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <button>Visit</button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;