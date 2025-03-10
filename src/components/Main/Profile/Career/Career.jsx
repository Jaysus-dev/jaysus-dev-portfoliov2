import React from "react";
import "./Career.css";
import Data from "../../../../assets/json/Data.json";
function Career() {
  return (
    <div className="career section">
      <h2 className="section-title">Career Path.</h2>
      <span className="section-subtitle">Evolving every step of the way</span>
      <div className="career__container grid">
        <div className="career__wrapper">
          <h3 className="career__header" id="work">
            Professional Growth
          </h3>
          {Data.career
            .filter((item) => item.id === "work")
            .map((item, index, arr) => (
              <div key={index} className="career__data">
                <div className="career__marker">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="career__pic"
                  />
                  {index !== arr.length - 1 && (
                    <span className="career__line"></span>
                  )}
                </div>
                <div className="career__content">
                  <div className="career__top">
                    <h3 className="career__title">{item.title}</h3>
                    <span className="career__date">{item.date}</span>
                  </div>
                  <div className="career__bottom">
                    <span>{item.subtitle}</span>
                    <p>{item.desc}</p>
                    <div className="career__skill">
                      {item.tech?.map((skill, skillIndex) => (
                        <span key={skillIndex}>{skill.name}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="career__wrapper">
          <h3 className="career__header" id="work">
            Academic History
          </h3>
          {Data.career
            .filter((item) => item.id === "academic")
            .map((item, index, arr) => (
              <div key={index} className="career__data">
                <div className="career__marker">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="career__pic"
                  />
                  {index !== arr.length - 1 && (
                    <span className="career__line"></span>
                  )}
                </div>
                <div className="career__content">
                  <div className="career__top">
                    <h3 className="career__title">{item.title}</h3>
                    <span className="career__date">{item.date}</span>
                  </div>
                  <div className="career__bottom">
                    <span>{item.subtitle}</span>
                    <p>{item.desc}</p>
                    <div className="career__skill">
                      {item.tech?.map((skill, skillIndex) => (
                        <span key={skillIndex}>{skill.name}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Career;
