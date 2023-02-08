import React from "react";
import TabX from "./pages/Home/Tab";
import { Container, Row, Col, Card} from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import "./css/MainPage.css";
import { Link } from "react-router-dom";
import { ImQuotesLeft } from "react-icons/im";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const MainPage = (props) => {
  const Navigate = useNavigate()
  console.log(props);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    }
  };

  const responsiveWarehouse = {
    desktop: {
      breakpoint: { max: 3000, min: 0 },
      items: 1,
      slidesToSlide: 1,
    }
  };

  // const responsiveClients = {
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1214 },
  //     items: 3,
  //     slidesToSlide: 1, // optional, default to 1.
  //   },
  //   tablet: {
  //     breakpoint: { max: 1214, min: 866 },
  //     items: 2,
  //     slidesToSlide: 1, // optional, default to 1.
  //   },
  //   mobile: {
  //     breakpoint: { max: 866, min: 0 },
  //     items: 1,
  //     slidesToSlide: 1, // optional, default to 1.
  //   }
  // };
  
  return (
    <>
      <Container fluid className="p-0 mt-5" style={{ zIndex: 7 }}>
        <div className="d-flex flex-row bothUnits">
          <div className="nextPage bg-white">
            <Card className="bg-white">
              <Card.Body className="cardStorageBody">
                <Row>
                  <Col md={12} className="mx-3">
                    <TabX></TabX>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </div>
          <div className="warehouseImages" >
            <div className="d-flex warehouseImgCarouselStyle" style={{margin:"0rem 0 0 -2rem ",padding:"0 0rem", marginLeft:"-2rem"}}>
              <div className="w-100" style={{paddingLeft:"2rem", borderRadius:"2rem", boxShadow:"6rem"}}>
                <Carousel 
                  responsive={responsiveWarehouse}
                  infinite={true}
                  arrows={false}
                  autoPlay={props.deviceType !== "mobile" ? true : false}
                  autoPlaySpeed={5000}
                  customTransition="transform 1s ease-in-out"
                  transitionDuration={1000}
                  containerClass="carousel-container"
                  deviceType={props.deviceType}
                  itemClass="carousel-item-padding-40-px"
                >
                  <div className="frontCar-items"
                    style={{position:"relative", textAlign: "center", color: "white", fontWeight:"900", backgroundColor:"#141414", borderRadius:"0.5rem", boxShadow:"2rem"}}
                    onClick={()=>{Navigate('/storage')}}
                    >
                      <div style={{position: "absolute", top: "5%", left: "0%", zIndex:"9", borderRadius:"0.5rem"}}>
                        NOW STOCK CLOSER TO YOUR CUSTOMERS FOR FASTER DELIVERY
                      </div>
                      <img
                        className="d-block w-100"
                        src="/images/s1.jpg"
                        alt="First slide"
                        style={{ height: "29rem", objectFit: "fill", opacity:"0.7", borderRadius:"0.5rem"}}
                      />
                  </div>
                  <div className="frontCar-items"
                    style={{position:"relative", textAlign: "center", color: "white", fontWeight:"900", backgroundColor:"#141414", borderRadius:"0.5rem"}}
                    onClick={()=>{Navigate('/storage')}}>
                    <div style={{position: "absolute", top: "5%", left: "5%", zIndex:"9", borderRadius:"0.5rem"}}>
                      LEADING WAREHOUSING PLATFORM
                    </div>
                    <img
                      className="d-block w-100"
                      src="/images/s2.jpg"
                      alt="Second slide"
                      style={{ height: "29rem", objectFit: "cover", opacity:"0.7", borderRadius:"0.5rem"}}
                    />
                  </div>
                  <div className="frontCar-items"
                    style={{position:"relative", textAlign: "center", color: "white", fontWeight:"900", backgroundColor:"#141414", borderRadius:"0.5rem"}}
                    onClick={()=>{Navigate('/storage')}}>
                    <div style={{position: "absolute", top: "5%", left: "5%", zIndex:"9", borderRadius:"0.5rem"}}>
                      BEST WAREHOUSING & LOGISTICS PLATFORM
                    </div>
                    <img
                      className="d-block w-100"
                      src="/images/s3.jpg"
                      alt="Third slide"
                      style={{ height: "29rem", objectFit: "fill", opacity:"0.7", borderRadius:"0.5rem"}}
                    />
                  </div>
                  <div className="frontCar-items"
                    style={{position:"relative", textAlign: "center", color: "white", fontWeight:"900", backgroundColor:"#141414", borderRadius:"0.5rem"}}
                    onClick={()=>{Navigate('/storage')}}>
                    <div style={{position: "absolute", top: "5%", left: "5%", zIndex:"9", borderRadius:"0.5rem"}}>
                      WAY TO BOOK WAREHOUSE FROM HOME
                    </div>
                    <img
                      className="d-block w-100"
                      src="/images/s4.jpg"
                      alt="Fourth slide"
                      style={{ height: "29rem", objectFit: "fill", opacity:"0.7", borderRadius:"0.5rem"}}
                    />
                  </div>
                  <div className="frontCar-items"
                    style={{position:"relative", textAlign: "center", color: "white", fontWeight:"900", backgroundColor:"#141414", borderRadius:"0.5rem"}}
                    onClick={()=>{Navigate('/storage')}}>
                    <div style={{position: "absolute", top: "5%", left: "5%", zIndex:"9", borderRadius:"0.5rem"}}>
                      BEST SERVICE PROVIDERS IN INDIA
                    </div>
                    <img
                      className="d-block w-100"
                      src="/images/s5.jpg"
                      alt="Fifth slide"
                      style={{ height: "29rem", objectFit: "fill",backgroundColor:"white", opacity:"0.7", borderRadius:"0.5rem"}}
                    />
                  </div>
                  <div className="frontCar-items"
                    style={{position:"relative", textAlign: "center", color: "white", fontWeight:"900", backgroundColor:"#141414", borderRadius:"0.5rem"}}
                    onClick={()=>{Navigate('/storage')}}>
                    <div style={{position: "absolute", top: "5%", left: "0%", zIndex:"9", borderRadius:"0.5rem"}}>
                    REDUCING POST HARVEST LOSSES AND INCREASING MARKET ACCESS FOR RURAL FARMERS
                    </div>
                    <img
                      className="d-block w-100"
                      src="/images/agriculturalstorage.jpg"
                      alt="Fifth slide"
                      style={{ height: "29rem", objectFit: "fill",backgroundColor:"white", opacity:"0.7", borderRadius:"0.5rem"}}
                    />
                  </div>
                  </Carousel>
              </div>
            </div>
          </div>
        </div>
        <Row className="d-flex" style={{margin:"10rem 3rem"}}>
          <Col md={3} xs={6} className="px-0">
          <card className="d-flex h-100 justify-content-center align-items-center mr-2" style={{boxShadow: "#49505766 2px 0px 10px -1px"}}><h3 className="h-auto text-center mb-0">Our Supporters</h3></card>
          </Col>
          <Col md={9} xs={6} className="px-0"><Carousel 
          responsive={responsive}
          infinite={true}
          arrows={false}
          autoPlay={props.deviceType !== "mobile" ? true : false}
          autoPlaySpeed={3000}
          customTransition="transform 1s ease-in-out"
          transitionDuration={1000}
          containerClass="carousel-container"
          deviceType={props.deviceType}
          itemClass="carousel-item-padding-40-px"
          >
            <div className="sup-items"><img
              className="d-block w-100"
              src="/images/sup-1.png"
              alt="First slide"
              style={{ height: "100%", objectFit: "fill" }}
            /></div>
            <div className="sup-items"><img
              className="d-block w-100"
              src="/images/IIT_MANDI_CATALYST.jpg"
              alt="Second slide"
              style={{ height: "100%", objectFit: "contain" }}
            /></div>
            <div className="sup-items"><img
              className="d-block w-100"
              src="/images/iit_mandi.png"
              alt="Third slide"
              style={{ height: "100%", objectFit: "fill" }}
            /></div>
            <div className="sup-items"><img
              className="d-block w-100"
              src="/images/sup-4.png"
              alt="Fourth slide"
              style={{ height: "100%", objectFit: "fill",backgroundColor:"white" }}
            /></div>
            <div className="sup-items"><img
              className="d-block w-100"
              src="/images/sup-5.webp"
              alt="Fifth slide"
              style={{ height: "100%", objectFit: "fill",backgroundColor:"white" }}
            /></div>
          </Carousel>
          </Col>
        </Row>
        <header className="">
          <div className="headerClass d-flex flex-column justify-content-around">
              <h5 className="textBox">TESTIMONIALS</h5>
              <h1 className="textBox heading">WHAT CLIENTS SAY</h1>
          </div>
        </header>
        <div className="clientsBoxDesignMargin">
          <div className="w-100"><Carousel 
          responsive={responsiveClients}
          infinite={true}
          arrows={false}
          autoPlay={true}
          autoPlaySpeed={5000}
          removeArrowOnDeviceType={["mobile"]}
          customTransition="transform 1s ease-in-out"
          transitionDuration={1000}
          deviceType={props.deviceType}
          keyBoardControl={true}
          itemClass="carousel-item-padding-40-px"
          >
            <div className="cardStyle" >
              <img className="profileStyle" src="images/testimonial-3.jpg"></img>
              <h6 className="textBox nameSize">TIM DAVID1</h6>
              <p className="textBox companyName">ROBO CONSTRUCTION</p>
              <i className="d-flex flex-row justify-content-around iconStyle"><ImQuotesLeft/></i>
              <p className="para textBox">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At lectus urna duis convallis convallis tellus id interdum velit. Eleifend donec pretium vulputate sapien. At volutpat diam ut venenatis tellus in metus. Dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu. Id volutpat lacus laoreet non curabitur.</p>
            </div>
            <div className="cardStyle" >
              <img className="profileStyle" src="images/testimonial-3.jpg"></img>
              <h6 className="textBox nameSize">TIM DAVID2</h6>
              <p className="textBox companyName">ROBO CONSTRUCTION</p>
              <i className="d-flex flex-row justify-content-around iconStyle"><ImQuotesLeft/></i>
              <p className="para textBox">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At lectus urna duis convallis convallis tellus id interdum velit. Eleifend donec pretium vulputate sapien. At volutpat diam ut venenatis tellus in metus. Dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu. Id volutpat lacus laoreet non curabitur.</p>
            </div>
            <div className="cardStyle" >
              <img className="profileStyle" src="images/testimonial-3.jpg"></img>
              <h6 className="textBox nameSize">TIM DAVID3</h6>
              <p className="textBox companyName">ROBO CONSTRUCTION</p>
              <i className="d-flex flex-row justify-content-around iconStyle"><ImQuotesLeft/></i>
              <p className="para textBox">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At lectus urna duis convallis convallis tellus id interdum velit. Eleifend donec pretium vulputate sapien. At volutpat diam ut venenatis tellus in metus. Dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu. Id volutpat lacus laoreet non curabitur.</p>
            </div>
            <div className="cardStyle" >
              <img className="profileStyle" src="images/testimonial-3.jpg"></img>
              <h6 className="textBox nameSize">TIM DAVID4</h6>
              <p className="textBox companyName">ROBO CONSTRUCTION</p>
              <i className="d-flex flex-row justify-content-around iconStyle"><ImQuotesLeft/></i>
              <p className="para textBox">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At lectus urna duis convallis convallis tellus id interdum velit. Eleifend donec pretium vulputate sapien. At volutpat diam ut venenatis tellus in metus. Dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu. Id volutpat lacus laoreet non curabitur.</p>
            </div>
            <div className="cardStyle" >
              <img className="profileStyle" src="images/testimonial-3.jpg"></img>
              <h6 className="textBox nameSize">TIM DAVID5</h6>
              <p className="textBox companyName">ROBO CONSTRUCTION</p>
              <i className="d-flex flex-row justify-content-around iconStyle"><ImQuotesLeft/></i>
              <p className="para textBox">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At lectus urna duis convallis convallis tellus id interdum velit. Eleifend donec pretium vulputate sapien. At volutpat diam ut venenatis tellus in metus. Dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu. Id volutpat lacus laoreet non curabitur.</p>
            </div>
          </Carousel>
          </div>
        </div> */}
      </Container>
    </>
  );
};

export default MainPage;
