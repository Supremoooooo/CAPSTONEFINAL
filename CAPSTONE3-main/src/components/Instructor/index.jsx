import './style.css';
import course1 from '../../assets/images/carouselimage/course1.png';
import mdp from '../../assets/images/carouselimage/mdp.jpg';
import Joy from '../../assets/images/carouselimage/Joy.png';
import Shaira from '../../assets/images/carouselimage/Shaira.png';

const Instructor = () => {
  return (
    <div>
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
          <h3 className="section-subheading text-muted">
            The instructor is truly amazing, making learning a joy.
          </h3>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="team-member text-center">
              <img
                className="mx-auto rounded-circle img-fluid"
                src={mdp}
                alt="..."
              />
              <div className="teaminfo">
                <h4>Mark Dennis Pague</h4>
                <p className="text-muted">
                  <strong>Instructor</strong>
                  <p>"Patient and Supportive: Known for a patient and supportive teaching style, especially for nervous or new drivers."</p>
                </p>
                <div className="social-media">
                  <a
                    className="btn btn-dark btn-social mx-2"
                    href="#!"
                    aria-label="Mark Twitter Profile"
                  >
                    <i className="bx bxl-twitter"></i>
                  </a>
                  <a
                    className="btn btn-dark btn-social mx-2"
                    href="#!"
                    aria-label="Mark Facebook Profile"
                  >
                    <i className="bx bxl-facebook-circle"></i>
                  </a>
                  <a
                    className="btn btn-dark btn-social mx-2"
                    href="#!"
                    aria-label="Mark Gmail Profile"
                  >
                    <i className="bx bxl-gmail"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="team-member text-center">
              <img
                className="mx-auto rounded-circle img-fluid"
                src={Joy}
                alt="..."
              />
              <div className="teaminfo">
                <h4>Mary Joy Avila</h4>
                <p className="text-muted">
                  <strong>Instructor</strong>
                  <p>"Friendly and Approachable: Builds strong relationships with students, making them feel comfortable and open to asking questions."</p>
                </p>
                <div className="social-media">
                  <a
                    className="btn btn-dark btn-social mx-2"
                    href="#!"
                    aria-label="Mary Joy Twitter Profile"
                  >
                    <i className="bx bxl-twitter"></i>
                  </a>
                  <a
                    className="btn btn-dark btn-social mx-2"
                    href="#!"
                    aria-label="Mary Joy Facebook Profile"
                  >
                    <i className="bx bxl-facebook-circle"></i>
                  </a>
                  <a
                    className="btn btn-dark btn-social mx-2"
                    href="#!"
                    aria-label="Mary Joy Gmail Profile"
                  >
                    <i className="bx bxl-gmail"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="team-member text-center">
              <img
                className="mx-auto rounded-circle img-fluid"
                src={Shaira}
                alt="..."
              />
              <div className="teaminfo">
                <h4>Shaira Almoceda</h4>
                <p className="text-muted">
                  <strong>Instructor</strong>
                  <p>"Vehicle Maintenance Expertise: Provides insights into vehicle maintenance and car care, ensuring students are prepared for emergencies."</p>
                </p>
                <div className="social-media">
                  <a
                    className="btn btn-dark btn-social mx-2"
                    href="#!"
                    aria-label="Shaira Profile"
                  >
                    <i className="bx bxl-twitter"></i>
                  </a>
                  <a
                    className="btn btn-dark btn-social mx-2"
                    href="#!"
                    aria-label="Shaira Facebook Profile"
                  >
                    <i className="bx bxl-facebook-circle"></i>
                  </a>
                  <a
                    className="btn btn-dark btn-social mx-2"
                    href="#!"
                    aria-label="Shaira Gmail Profile"
                  >
                    <i className="bx bxl-gmail"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <p className="large text-muted">
              Joining a driving lesson is a crucial step towards gaining
              independence and freedom. It opens up new opportunities for
              personal and professional growth, as a driver's license can
              enhance job prospects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
