import { useContext, useEffect, useState } from 'react';
import '../Header/style.css';
import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import course3 from '../../assets/images/carouselimage/course3.jpg';
import featured1 from '../../assets/images/carouselimage/featured1.png';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { MyContext } from './../../context/userContext';

const Header = () => {
  const { state, setState } = useContext(MyContext);

  const navigate = useNavigate();
  const [branch, setBranch] = useState('');
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const [users, setUsers] = useState([]);
  console.log(branch, time, date, state);

  // fetch all students
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await fetch('http://127.0.0.1:8000/api/student/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          branch,
          time,
          date,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          if (res.status == 200) {
            alert('Enrolled successfully');
            navigate('/');
          }
        });
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {}, []);

  return (
    <>
      <Navbar />
      <img className="photo1" src={course3} alt="" />
      <div className="row gx-0 mb-4 mb-lg-5 align-items-center">
        <p className="text">
          Choosing to take a driving course is a wise investment in your safety,
          legal compliance, and overall driving competence. It's a responsible
          step towards becoming a proficient and responsible driver.
        </p>

        <div className="col-xl-8 col-lg-7">
          <img className="img-fluid mb-3 mb-lg-0" src={featured1} alt="..." />
        </div>
        <div className="col-xl-4 col-lg-5">
          <div className="featured-text text-center text-lg-left">
            <h4>Theoretical Driving Course (TDC)</h4>
            <p className="text-black-50">
              We are currently working on our online slot reservation. For now,
              reservation of slots will be coordinated after the processing of
              enrollment is complete. We recommend you continue with the
              enrollment only if your time is flexible. For interested students
              with a preferred schedule, kindly coordinate directly to an A-1
              branch near you or our Customer Service Team first. The
              Theoretical Driving Course (TDC) is a 15-hr classroom module for 2
              days. This is a mandatory course for Student Permit applicants.
              Students are required to pass the Final Written Exam after course
              completion. If passed, A-1 electronically transmits to LTO-IT
              System and issues TDC Certification of Completion.
            </p>

            <Form onSubmit={handleSubmit}>
              <div className="container4">
                <label className="myDropdown1" for="myDropdown">
                  <strong>Classroom Branch</strong>:
                </label>
                <div className="dropdown-container">
                  <div className="dropdown">
                    <select
                      id="myDropdown"
                      onChange={(e) => setBranch(e.target.value)}
                    >
                      <option
                        value=""
                        disabled
                        selected
                        className="placeholder"
                      >
                        Select an option
                      </option>
                      <option value="Batangas City">Batangas City</option>
                      <option value="Laguna City">Laguna City</option>
                      <option value="Alabang Town Center">
                        Alabang Town Center
                      </option>
                    </select>
                  </div>
                </div>
                <label className="myDropdown1" for="myDropdown">
                  <strong>Time</strong>:
                </label>
                <div className="dropdown-container">
                  <div className="dropdown">
                    <select
                      id="myDropdown"
                      onChange={(e) => setTime(e.target.value)}
                    >
                      <option
                        value=""
                        disabled
                        selected
                        className="placeholder"
                      >
                        Select an option
                      </option>
                      <option value="7:00am - 12:00pm">
                        7:00am - 12:00pm{' '}
                      </option>
                      <option value="12:00pm - 5:00pm">12:00pm - 5:00pm</option>
                    </select>
                  </div>
                </div>
                <label className="myDropdown1" for="myDropdown">
                  <strong>Date</strong>:
                </label>
                <div className="dropdown-container">
                  <div className="dropdown">
                    <select
                      id="myDropdown"
                      onChange={(e) => setDate(e.target.value)}
                    >
                      <option
                        value=""
                        disabled
                        selected
                        className="placeholder"
                      >
                        Select an option
                      </option>
                      <option value="October 1, 2023 onwards">
                        October 1, 2023 onwards
                      </option>
                      <option value="November 1, 2023 onwards">
                        November 1, 2023 onwards
                      </option>
                    </select>
                  </div>
                </div>
                <button id="btn1" type="submit">
                  ENROLL NOW
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Header;
