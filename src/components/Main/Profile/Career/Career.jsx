import React from "react";
import "./Career.css";
import Data from "../../../../assets/json/Data.json";
function Career() {
  return (
    <section className="career ">
      <h2 className="section__title">Career Path.</h2>
      <span className="section__subtitle">Evolving every step of the way</span>
      <div className="career__container grid">
        {["work", "academic"].map((sectionId) => (
          <div className="career__wrapper" key={sectionId}>
            <h3 className="career__header" id={sectionId}>
              {sectionId === "work"
                ? "Relevant Experience"
                : "Academic History"}
            </h3>
            {Data.career
              .filter((item) => item.id === sectionId)
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
        ))}
      </div>
    </section>
  );
}

export default Career;
