import { Col, Container, Row } from 'react-bootstrap';
import { FaQuoteLeft, FaQuoteRight, FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import avatar1 from '@/assets/images/avatar/01.jpg';
import { BsShieldFillCheck } from 'react-icons/bs';
import avatar2 from '@/assets/images/avatar/02.jpg';
import avatar3 from '@/assets/images/avatar/03.jpg';
import avatar4 from '@/assets/images/avatar/04.jpg';
import avatar9 from '@/assets/images/avatar/09.jpg';
import pattern2 from '@/assets/images/pattern/02.png';
const Reviews = () => {
  return <section className="bg-light">
   <Container>
  <Row className="g-4 g-lg-5 align-items-center">
    <Col xl={7} className="order-2 order-xl-1">
      <Row className="mt-0 mt-xl-5">
        <Col md={7} className="position-relative mb-0 mt-0 mt-md-5">
          <figure className="fill-danger opacity-2 position-absolute top-0 start-0 translate-middle mb-3">
            <svg width="211px" height="211px">
              <path d="M210.030,105.011 C210.030,163.014 163.010,210.029 105.012,210.029 C47.013,210.029 -0.005,163.014 -0.005,105.011 C-0.005,47.015 47.013,-0.004 105.012,-0.004 C163.010,-0.004 210.030,47.015 210.030,105.011 Z" />
            </svg>
          </figure>
          <div className="bg-body shadow text-center p-4 rounded-3 position-relative mb-5 mb-md-0">
            <div className="avatar avatar-xl mb-3">
              <img className="avatar-img rounded-circle" src={avatar1} alt="avatar" />
            </div>
            <blockquote>
              <p>
                <span className="me-1 small">
                  <FaQuoteLeft />
                </span>
                "Kattraan has transformed the way I learn. The expert-led courses and structured content make skill-building effortless!"
                <span className="ms-1 small">
                  <FaQuoteRight />
                </span>
              </p>
            </blockquote>
            <ul className="list-inline mb-2">
              {Array(Math.floor(4.5)).fill(0).map((_star, idx) => (
                <li key={idx} className="list-inline-item me-1 small">
                  <FaStar size={14} className="text-warning" />
                </li>
              ))}
              {!Number.isInteger(4.5) && (
                <li className="list-inline-item me-1 small">
                  <FaStarHalfAlt size={14} className="text-warning" />
                </li>
              )}
              {4.5 < 5 &&
                Array(5 - Math.ceil(4.5))
                  .fill(0)
                  .map((_star, idx) => (
                    <li key={idx} className="list-inline-item me-1 small">
                      <FaRegStar size={14} className="text-warning" />
                    </li>
                  ))}
            </ul>
            <h6 className="mb-0">Carolyn Ortiz</h6>
          </div>
        </Col>
        <Col md={5} className="mt-5 mt-md-0 d-none d-md-block">
          <div className="bg-body shadow p-4 rounded-3 d-inline-block position-relative">
            <div className="icon-lg bg-warning rounded-circle position-absolute top-0 start-100 translate-middle">
              <BsShieldFillCheck className="text-dark" />
            </div>
            <h6 className="mb-3">100+ Verified Mentors</h6>
            <div className="d-flex align-items-center mb-3">
              <div className="avatar avatar-sm">
                <img className="avatar-img rounded-1" src={avatar9} alt="avatar" />
              </div>
              <div className="ms-2">
                <h6 className="mb-0">Pushparaj</h6>
                <p className="mb-0 small">Instructor - Python</p>
              </div>
            </div>
            <div className="d-flex align-items-center mb-3">
              <div className="avatar avatar-sm">
                <img className="avatar-img rounded-1" src={avatar4} alt="avatar" />
              </div>
              <div className="ms-2">
                <h6 className="mb-0">Ranjith</h6>
                <p className="mb-0 small">Instructor - Flutter</p>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <div className="avatar avatar-sm">
                <img className="avatar-img rounded-1" src={avatar2} alt="avatar" />
              </div>
              <div className="ms-2">
                <h6 className="mb-0">Krithika Varshini</h6>
                <p className="mb-0 small">Instructor - Communication</p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="mt-5 mt-xl-0">
        <Col xs={7} className="mt-0 mt-xl-5 text-end position-relative z-index-1 d-none d-md-block">
          <div className="p-3 bg-primary d-inline-block rounded-4 shadow-lg text-center" style={{
            background: `url(${pattern2}) no-repeat center center`,
            backgroundSize: 'cover'
          }}>
            <h5 className="text-white mb-0">4.8/5.0</h5>
            <ul className="list-inline mb-2">
              {Array(Math.floor(4.8)).fill(0).map((_star, idx) => (
                <li key={idx} className="list-inline-item me-1 small">
                  <FaStar size={14} className="text-warning" />
                </li>
              ))}
              {!Number.isInteger(4.8) && (
                <li className="list-inline-item me-1 small">
                  <FaStarHalfAlt size={14} className="text-warning" />
                </li>
              )}
              {4.8 < 5 &&
                Array(5 - Math.ceil(4.8))
                  .fill(0)
                  .map((_star, idx) => (
                    <li key={idx} className="list-inline-item me-1 small">
                      <FaRegStar size={14} className="text-warning" />
                    </li>
                  ))}
            </ul>
            <p className="text-white mb-0">Based on 5000+ reviews</p>
          </div>
        </Col>
        <Col md={5} className="mt-n6 mb-0 mb-md-5">
          <div className="bg-body shadow text-center p-4 rounded-3">
            <div className="avatar avatar-xl mb-3">
              <img className="avatar-img rounded-circle" src={avatar3} alt="avatar" />
            </div>
            <blockquote>
              <p>
                <span className="me-1 small">
                  <FaQuoteLeft />
                </span>
                "Kattraan's mentorship program is outstanding! The hands-on approach helped me land my dream job in tech."
                <span className="ms-1 small">
                  <FaQuoteRight />
                </span>
              </p>
            </blockquote>
            <ul className="list-inline mb-2">
              {Array(Math.floor(4.9)).fill(0).map((_star, idx) => (
                <li key={idx} className="list-inline-item me-1 small">
                  <FaStar size={14} className="text-warning" />
                </li>
              ))}
              {!Number.isInteger(4.9) && (
                <li className="list-inline-item me-1 small">
                  <FaStarHalfAlt size={14} className="text-warning" />
                </li>
              )}
              {4.9 < 5 &&
                Array(5 - Math.ceil(4.9))
                  .fill(0)
                  .map((_star, idx) => (
                    <li key={idx} className="list-inline-item me-1 small">
                      <FaRegStar size={14} className="text-warning" />
                    </li>
                  ))}
            </ul>
            <h6 className="mb-0">Dennis Barrett</h6>
          </div>
        </Col>
      </Row>
    </Col>
    <Col xl={5} className="order-1 text-center text-xl-start">
      <h2 className="fs-1">What Our Students Say</h2>
      <p>
        Real stories from our learners! Hear how Kattraan has helped students across the globe gain valuable skills and achieve their career goals.
      </p>
      <a href="#" className="btn btn-primary mb-0">
        View More Reviews
      </a>
    </Col>
  </Row>
</Container>

    </section>;
};
export default Reviews;
