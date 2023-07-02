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
const ImageFive= "https://png.pngtree.com/png-clipart/20220621/original/pngtree-work-in-progress-warning-sign-with-yellow-and-black-stripes-painted-png-image_8161322.png";
const portfolioData = [
  {
    id: 2,
    name: "Ecommerce",
    image: ImageOne,
    link: "https://github.com/divyanshujamloki/D-COMM",
  },
  {
    id: 3,
    name: "B.M.I",
    link: "https://github.com/divyanshujamloki/B.M.I",
    image: ImageTwo,
  },
  {
    id: 2,
    name: "Spotify-clone",
    image: ImageThree,
    link: "https://github.com/divyanshujamloki/SpotifyClone",
  },
  {
    id: 2,
    name: "Netflix-Clone !Ongoing",
    image: ImageFour,
    link: "https://github.com/divyanshujamloki?tab=repositories",
  },
  {
    id: 3,
    name: "Image Downloader !Ongoing",
    image: ImageFive,
    link: "https://github.com/divyanshujamloki?tab=repositories",
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
                <a>
                  <img alt="Image" src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    <Link to="https://github.com/divyanshujamloki?tab=repositories">
                    <button >Visit</button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;