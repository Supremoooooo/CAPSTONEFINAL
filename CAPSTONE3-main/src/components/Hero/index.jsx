import './style.css'
import pic1 from '../../assets/images/carouselimage/pic1.jpg'
import pic2 from '../../assets/images/carouselimage/pic2.jpg'
import course3 from '../../assets/images/carouselimage/course3.jpg'
const Hero = () => {
  return (
    <>
<div id="hero-carousel" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

<div className="carousel-item active c-item">
    <img src= {pic1} className="d-block w-100 c-img" alt="..." />
    <div className="carousel-caption top-0 mt-4">
            <p className="mt-5 fs-3 text-uppercase"></p>
            <h1 className="display-1">"LEARN IN A SAFE AND CONTROLLED ENVIRONMENT"</h1>
        <button className="#F94C10 px-4 py-2 fs-5 mt-5"> Learn more</button>
    </div>
</div>
<div className="carousel-item c-item">
    <img src= {pic2} className="d-block w-100 c-img" alt="..." />
        <div className="carousel-caption top-0 mt-4">
            <p className="mt-5 fs-3 text-uppercase"></p>
            <h1 className="display-1">"SAFETY BEGINS WITH PROPER EDUCATION"</h1>
            <button className="#F94C10 px-4 py-2 fs-5 mt-5">Learn more</button>
        </div>
</div>
<div className="carousel-item c-item">
    <img src= {course3} className="d-block w-100 c-img" alt="..." />
        <div className="carousel-caption top-0 mt-4">
            <p className="mt-5 fs-3 text-uppercase"></p>
            <h1 className="display-1">"PRODUCING THE BEST DRIVERS ACROSS THE LAND"</h1>
            <button className="#F94C10 px-4 py-2 fs-5 mt-5">Learn more</button>
        </div>
</div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#hero-carousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#hero-carousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
    </button>
    </div>
    </>
  );
};

export default Hero;
