import React, { useState } from "react";
import "./Courses.css";
import Data from "../../../../assets/json/Data.json";

function Courses() {
  const [selectedCert, setSelectedCert] = useState(null);

  //const imgClick = (cert) => {
  //  setSelectedCert(cert);
  // };

  const closeModal = () => {
    setSelectedCert(null);
  };
  return (
    <section className="course">
      <h2 className="section__title">Certificates.</h2>
      <span className="section__subtitle">Credentials and Achievements</span>
      <div className="course__container">
        <div className="course__wrapper">
          <div className="course__content grid">
            {Data.certificates.map((cert) => (
              <div key={cert.id} className="course__data ">
                <img
                  src={cert.img}
                  alt="Certificate"
                  width="300"
                  height="200"
                  loading="lazy"
                  onClick={() => imgClick(cert)}
                />
                <div className="course__info ">
                  <h3>{cert.title}</h3>
                  <span>{cert.subtitle}</span>
                  <p>{cert.issue}</p>
                  <p>{cert.cred}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for Preview */}
      {selectedCert && (
        <div className="modal__overlay" onClick={closeModal}>
          <div className="modal__content" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedCert.img}
              alt="Certificate Preview"
              className="modal__image"
            />
            <button className="modal__close" onClick={closeModal}>
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Courses;
