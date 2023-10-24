import './style.css';
import featured1 from '../../assets/images/carouselimage/featured1.png';
import featured2 from '../../assets/images/carouselimage/featured2.jpg';
import featured3 from '../../assets/images/carouselimage/featured3.jpg';
import { Link } from 'react-router-dom';
const Section = () => {
  return (
    <div className="container text-center">
      <h4>Featured Courses & Services</h4>

      <div className="row align-items-start">
        <div className="col-lg-4 ">
          <img src={featured1} alt="" className='img-fluid'/>
          <h2>
            {/* <a href="">Theoretical Driving Course (TDC)</a> */}
            <Link to='/Header' className='link'>Theoretical Driving Course (TDC)</Link>
          </h2>
          <p>
            Aspiring drivers are now required to attend 15-hour Theoretical
            Driving Course before applying for student permits.
          </p>
          <p><a className='container3' href="">Starts at Php 1,000</a></p>
        </div>
        <div className="col-lg-4 ">
          <img src={featured2} alt=""className='img-fluid' />
          <h2>
            <a href="">Practical Driving Course (PDC)</a>
          </h2>
          <p>
            Drive any of our 170+ latest training vehicles at scheduled time
            slots.
          </p>
          <p><a className='container3' href="">Starts at Php 4,000</a></p>
        </div>
        <div className="col-lg-4">
          <img src={featured3} alt=""className='img-fluid' />
          <h2>
            <a href="">Motorcycle Riding Course (MRC)</a>
          </h2>
          <p>Future riders can now learn how to navigate the roads safely.</p>
          <p><a className='container3' href="">Starts at Php 2,500</a></p>
        </div>
      </div>

      <button type="submit" Link to='/Course' className='link'>Browse All Courses</button>
    </div>
  );
};

export default Section;
