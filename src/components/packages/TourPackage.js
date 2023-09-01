import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';

const TourPackage = () => {
  return (

    <>
    {/* Chennai */}
     <Container >
      <Row>
        <h4 className='text-center mt-5'>TOUR PACKAGES</h4>
        <Col className='mt-5'>
        <h4 className='mt-5 mb-4'>Chennai 2 Days Tour Packages</h4>
        <Card style={{width:"500px",borderRadius:"13px"}} className='shadow-lg'>
        <Carousel fade>
      <Carousel.Item>
        <Image src={require("../Assets/chennai3...jpeg")} className='d-block w-100' width={500} height={400}style={{borderRadius:"5px"}}></Image>
      </Carousel.Item>
      <Carousel.Item>
      <Image src={require("../Assets/chennai1.jpeg")} className='d-block w-100' width={500} height={400} style={{borderRadius:"5px"}}></Image>
      </Carousel.Item>
      <Carousel.Item>
      <Image src={require("../Assets/chennai2.jpeg")} className='d-block w-100' width={500} height={400} style={{borderRadius:"5px"}}></Image>
      </Carousel.Item>
      <Carousel.Item>
      <Image src={require("../Assets/chennai4.jpeg")} className='d-block w-100' width={500} height={400} style={{borderRadius:"5px"}}></Image>
      </Carousel.Item>
    </Carousel>
        <Card.Body>
          <Card.Text style={{textAlign:"justify"}}>
          Formerly known as Madras, Chennai is the capital city of the state of Tamil Nadu, in the southern part of India. Located on the Coromandel coast of Bay of Bengal, Chennai is as dynamic as it is immersed in tradition. This 'capital of the south', is one among the four metropolitan siblings of India, having a rich cultural history which it perfectly balances with its metropolis lifestyle.
          Chennai's skyline is famous for its towering skyscrapers, but the heart of Chennai has an old-world charm to it that refuses to be overshadowed.
          </Card.Text>
          <span style={{position:"relative",top:"20px",fontWeight:"500"}}>Starting From <br />&#8377;4000</span>
          <button style={{position:"relative",left:"300px",outline:"none",border:"none",background:"orange",padding:"10px",borderRadius:"10px",color:"#ffffff",fontWeight:"500",width:"120px"}} id="btn">EXPLORE</button>
        </Card.Body>
      </Card>
        </Col>

         {/* Rameshwaram */}
         <Col className='mt-5 ' style={{marginLeft:"90px"}}>
        <h4 className='mt-5 mb-4'>Rameshwaram 3 Days Tour Packages</h4>
        <Card style={{width:"500px",borderRadius:"13px",height:"733px"}} className='shadow-lg'>
        <Carousel fade>
      <Carousel.Item>
        <Image src={require("../Assets/dhanush kodi.jpg")} className='d-block w-100' width={500} height={400}style={{borderRadius:"5px"}}></Image>
      </Carousel.Item>
      <Carousel.Item>
      <Image src={require("../Assets/lakeshmana.jpg")} className='d-block w-100' width={500} height={400} style={{borderRadius:"5px"}}></Image>
      </Carousel.Item>
      <Carousel.Item>
      <Image src={require("../Assets/Rameshwaram3..jpeg")} className='d-block w-100' width={500} height={400} style={{borderRadius:"5px"}}></Image>
      </Carousel.Item>
      <Carousel.Item>
      <Image src={require("../Assets/rameshwarem1 (6).jpeg")} className='d-block w-100' width={500} height={400} style={{borderRadius:"5px"}}></Image>
      </Carousel.Item>
    </Carousel>
        <Card.Body>
          <Card.Text style={{textAlign:"justify"}}>
          Rameshwaram is located on a beautiful island in the South Indian state of Tamil Nadu. It is separated by a small Pamban channel from Sri Lanka. According to Hindu mythology, this is the place where Lord Rama created a bridge across the sea to Sri Lanka. The five-faced Hanuman Temple holds the floating stone which was used to build the bridge between India and Sri Lanka. Rameshwaram has the first sea bridge connecting the town of Mandapam with Pamban Island, and Rameswaram.
          </Card.Text>
          <span style={{position:"relative",top:"42px",fontWeight:"500"}}>Starting From <br />&#8377;3000</span>
          <button style={{position:"relative",left:"300px",top:"23px",outline:"none",border:"none",background:"orange",padding:"10px",borderRadius:"10px",color:"#ffffff",fontWeight:"500",width:"120px"}} id="btn">EXPLORE</button>
        </Card.Body>
      </Card>
        </Col>
      </Row>

      {/* Kodaikanal */}
      <Row>
        <Col className='mt-5 '>
        <h4 className='mt-5 mb-4'>Kodaikanal 2 Days Tour Packages</h4>
        <Card style={{width:"500px",borderRadius:"13px"}} className='shadow-lg'>
        <Carousel fade>
      <Carousel.Item>
        <Image src={require("../Assets/kodaikanal1....jpeg")} className='d-block w-100' width={500} height={400}style={{borderRadius:"5px"}}></Image>
      </Carousel.Item>
      <Carousel.Item>
      <Image src={require("../Assets/kodaikanal2.jpeg")} className='d-block w-100' width={500} height={400} style={{borderRadius:"5px"}}></Image>
      </Carousel.Item>
      <Carousel.Item>
      <Image src={require("../Assets/kodaikanal3..jpeg")} className='d-block w-100' width={500} height={400} style={{borderRadius:"5px"}}></Image>
      </Carousel.Item>
      <Carousel.Item>
      <Image src={require("../Assets/kodaikanal4.jpeg")} className='d-block w-100' width={500} height={400} style={{borderRadius:"5px"}}></Image>
      </Carousel.Item>
    </Carousel>
        <Card.Body>
          <Card.Text style={{textAlign:"justify"}}>
          Kodaikanal Tourism Located in the state of Tamil Nadu, Kodaikanal is one of the most famous honeymoon destinations in India. A Lakeside resort town of Tamil Nadu, Kodaikanal has a beautiful climate, mist-covered manicured cliffs and waterfall that come together to create the ideal setting for a perfect getaway. Kodaikanal means ‘the gift of the forests’.Nestled amidst the rolling slopes of the Palani Hills, Kodaikanal stands at an altitude of 7200 feet above sea level, and once you visit this hill station, you will find that every bit of what you have imagined it to be is real.
          </Card.Text>
          <span style={{position:"relative",top:"20px",fontWeight:"500"}}>Starting From <br />&#8377;1500</span>
          <button style={{position:"relative",left:"300px",outline:"none",border:"none",background:"orange",padding:"10px",borderRadius:"10px",color:"#ffffff",fontWeight:"500",width:"120px"}} id="btn">EXPLORE</button>
        </Card.Body>
      </Card>
        </Col>
        {/* Ooty */}
        <Col className='mt-5 ' style={{marginLeft:"90px"}}>
        <h4 className='mt-5 mb-4'>Ooty 1 Days Tour Packages</h4>
        <Card style={{width:"500px",borderRadius:"13px",height:"758px"}} className='shadow-lg'>
        <Carousel fade>
      <Carousel.Item>
        <Image src={require("../Assets/ooty1 (1).jpeg")} className='d-block w-100' width={500} height={400}style={{borderRadius:"5px"}}></Image>
      </Carousel.Item>
      <Carousel.Item>
      <Image src={require("../Assets/ooty1 (2).jpeg")} className='d-block w-100' width={500} height={400} style={{borderRadius:"5px"}}></Image>
      </Carousel.Item>
      <Carousel.Item>
      <Image src={require("../Assets/ooty1 (3).jpeg")} className='d-block w-100' width={500} height={400} style={{borderRadius:"5px"}}></Image>
      </Carousel.Item>
      <Carousel.Item>
      <Image src={require("../Assets/ooty1 (4).jpeg")} className='d-block w-100' width={500} height={400} style={{borderRadius:"5px"}}></Image>
      </Carousel.Item>
    </Carousel>
        <Card.Body>
          <Card.Text style={{textAlign:"justify"}}>
          Nestled amidst Nilgiri hills, Ooty, also known as Udagamandalam, is a hill station in Tamil Nadu which serves as a top-rated tourist destination. Once regarded as the summer headquarters of the East India Company, the Queen of the hills is a picturesque getaway. Nilgiri Mountain Railways, and the Nilgiri Mountains all along Dotted with tea gardens, serene waterfalls, winding country lanes, and charming colonial architecture, Ooty is the perfect respite everyone.
          </Card.Text>
          <span style={{position:"relative",top:"63px",fontWeight:"500"}}>Starting From <br />&#8377;2000</span>
          <button style={{position:"relative",left:"300px",top:"47px",outline:"none",border:"none",background:"orange",padding:"10px",borderRadius:"10px",color:"#ffffff",fontWeight:"500",width:"120px"}} id="btn">EXPLORE</button>
        </Card.Body>
      </Card>
        </Col>
      </Row>
      
      {/* Kanyakumari */}
      <Row>
      <Col className='mt-5 '>
        <h4 className='mt-5 mb-4'>Kanyakumari 3 Days Tour Packages</h4>
        <Card style={{width:"500px",borderRadius:"13px",height:"715px"}} className='shadow-lg'>
        <Carousel fade>
      <Carousel.Item>
        <Image src={require("../Assets/kanyakumari1 (1).jpeg")} className='d-block w-100' width={500} height={400}style={{borderRadius:"5px"}}></Image>
      </Carousel.Item>
      <Carousel.Item>
      <Image src={require("../Assets/kanyakumari1 (4).jpeg")} className='d-block w-100' width={500} height={400} style={{borderRadius:"5px"}}></Image>
      </Carousel.Item>
      <Carousel.Item>
      <Image src={require("../Assets/kanyakumari1.(2).jpeg")} className='d-block w-100' width={500} height={400} style={{borderRadius:"5px"}}></Image>
      </Carousel.Item>
      <Carousel.Item>
      <Image src={require("../Assets/kanyakumari1 (3).jpeg")} className='d-block w-100' width={500} height={400} style={{borderRadius:"5px"}}></Image>
      </Carousel.Item>
    </Carousel>
        <Card.Body>
          <Card.Text style={{textAlign:"justify"}}>
          Kanyakumari Tourism Bordered by the three seas - Arabian, Indian and the Bay of Bengal, Kanyakumari is the southernmost tip of the Indian Peninsula. A small coastal town in the state of Tamil Nadu, Kanyakumari was earlier known as Cape Comorin. Kanyakumari offers the marvellous confluence of the Bay of Bengal, the Arabian Sea and the Indian ocean meeting together at a point. 
          </Card.Text>
          <span style={{position:"relative",top:"20px",fontWeight:"500"}}>Starting From <br />&#8377;4000</span>
          <button style={{position:"relative",left:"300px",outline:"none",border:"none",background:"orange",padding:"10px",borderRadius:"10px",color:"#ffffff",fontWeight:"500",width:"120px"}} id="btn">EXPLORE</button>
        </Card.Body>
      </Card>
        </Col>
       {/* Kumbakonam */}
       <Col className='mt-5 ' style={{marginLeft:"90px"}}>
        <h4 className='mt-5 mb-4'>Kumbakonam 3 Days Tour Packages</h4>
        <Card style={{width:"500px",borderRadius:"13px",height:"716px"}} className='shadow-lg'>
        <Carousel fade>
      <Carousel.Item>
        <Image src={require("../Assets/kumbakonam1.(1).jpeg")} className='d-block w-100' width={500} height={400}style={{borderRadius:"5px"}}></Image>
      </Carousel.Item>
      <Carousel.Item>
      <Image src={require("../Assets/kumbakonam1 (4).jpeg")} className='d-block w-100' width={500} height={400} style={{borderRadius:"5px"}}></Image>
      </Carousel.Item>
      <Carousel.Item>
      <Image src={require("../Assets/kumbakonam1 (3).jpeg")} className='d-block w-100' width={500} height={400} style={{borderRadius:"5px"}}></Image>
      </Carousel.Item>
      <Carousel.Item>
      <Image src={require("../Assets/kumbakonam1.(2).jpeg")} className='d-block w-100' width={500} height={400} style={{borderRadius:"5px"}}></Image>
      </Carousel.Item>
    </Carousel>
        <Card.Body>
          <Card.Text style={{textAlign:"justify"}}>
          Kumbakonam Tourism Sandwiched between two great rivers of southern India, Cauvery and Arsala, Kumbakonam is a gorgeous temple town TENE in the heart of the Thanjavur district of Tamil Nadu.The town is a place for the lovers of history and those seeking to understand India's cultural roots and Hinduism. The town is also known for its grand festival called Mahamaham festival which is celebrated every twelve years at the Mahamaham Tank. 
          </Card.Text>
          <span style={{position:"relative",top:"5px",fontWeight:"500"}}>Starting From <br />&#8377;3000</span>
          <button style={{position:"relative",left:"300px",bottom:"15px",outline:"none",border:"none",background:"orange",padding:"10px",borderRadius:"10px",color:"#ffffff",fontWeight:"500",width:"120px"}} id="btn">EXPLORE</button>
        </Card.Body>
      </Card>
        </Col>
        </Row>

        {/* Madurai */}
        <Row>
        <Col className='mt-5 '>
        <h4 className='mt-5 mb-4'>Madurai 3 Days Tour Packages</h4>
        <Card style={{width:"500px",borderRadius:"13px",height:"715px"}} className='shadow-lg'>
        <Carousel fade>
      <Carousel.Item>
        <Image src={require("../Assets/madurai1.jpeg")} className='d-block w-100' width={500} height={400}style={{borderRadius:"5px"}}></Image>
      </Carousel.Item>
      <Carousel.Item>
      <Image src={require("../Assets/Madurai.jpeg")} className='d-block w-100' width={500} height={400} style={{borderRadius:"5px"}}></Image>
      </Carousel.Item>
      <Carousel.Item>
      <Image src={require("../Assets/madurai2.jpeg")} className='d-block w-100' width={500} height={400} style={{borderRadius:"5px"}}></Image>
      </Carousel.Item>
      <Carousel.Item>
      <Image src={require("../Assets/madurai3.jpeg")} className='d-block w-100' width={500} height={400} style={{borderRadius:"5px"}}></Image>
      </Carousel.Item>
    </Carousel>
        <Card.Body>
          <Card.Text style={{textAlign:"justify"}}>
          Madurai Tourism Madurai, the cultural capital of Tamil Nadu, is one of the oldest continuously inhabited cities of India. Ruled by Pandya kings for the longest time in its history, it is called as the ‘Lotus City" as it was planned and built in the shape of a lotus. Madurai is known for Meenakshi Amman Temple, dedicated to the goddess Meenakshi with a sanctum for her consort, Sundareshwarar.
          </Card.Text>
          <span style={{position:"relative",top:"20px",fontWeight:"500"}}>Starting From <br />&#8377;4000</span>
          <button style={{position:"relative",left:"300px",outline:"none",border:"none",background:"orange",padding:"10px",borderRadius:"10px",color:"#ffffff",fontWeight:"500",width:"120px"}} id="btn">EXPLORE</button>
        </Card.Body>
      </Card>
        </Col>
        {/* Yercaud */}
        <Col className='mt-5 ' style={{marginLeft:"90px"}}>
        <h4 className='mt-5 mb-4'>Yercaud 3 Days Tour Packages</h4>
        <Card style={{width:"500px",borderRadius:"13px",height:"716px"}} className='shadow-lg'>
        <Carousel fade>
      <Carousel.Item>
        <Image src={require("../Assets/yercaud...(1).jpeg")} className='d-block w-100' width={500} height={400}style={{borderRadius:"5px"}}></Image>
      </Carousel.Item>
      <Carousel.Item>
      <Image src={require("../Assets/yercaud1 (2).jpeg")} className='d-block w-100' width={500} height={400} style={{borderRadius:"5px"}}></Image>
      </Carousel.Item>
      <Carousel.Item>
      <Image src={require("../Assets/yercaud1 (4).jpeg")} className='d-block w-100' width={500} height={400} style={{borderRadius:"5px"}}></Image>
      </Carousel.Item>
      <Carousel.Item>
      <Image src={require("../Assets/yercaud1.(3).jpeg")} className='d-block w-100' width={500} height={400} style={{borderRadius:"5px"}}></Image>
      </Carousel.Item>
    </Carousel>
        <Card.Body>
          <Card.Text style={{textAlign:"justify"}}>
          Yercaud Tourism Nestled in the Shivaroy Hills of Tamil Nadu, Yercaud is a hill station in the Eastern Ghats steeped in abundant greenery Commonly called ‘Ooty of the Poor’, this region has a history dating back to the time of the British. Located at an altitude of 4970 feet, Yercaud is known for its vast expanses of coffee plantations and great weather.
          </Card.Text>
          <span style={{position:"relative",top:"40px",fontWeight:"500"}}>Starting From <br />&#8377;3000</span>
          <button style={{position:"relative",left:"300px",top:"22px",outline:"none",border:"none",background:"orange",padding:"10px",borderRadius:"10px",color:"#ffffff",fontWeight:"500",width:"120px"}} id="btn">EXPLORE</button>
        </Card.Body>
      </Card>
        </Col>
        </Row>
       {/* Theni */}
       <Row>
       <Col className='mt-5 mb-5 '>
        <h4 className='mt-5 mb-4'>Theni 3 Days Tour Packages</h4>
        <Card style={{width:"500px",borderRadius:"13px",height:"715px"}} className='shadow-lg'>
        <Carousel fade>
      <Carousel.Item>
        <Image src={require("../Assets/theni1 (2).jpeg")} className='d-block w-100' width={500} height={400}style={{borderRadius:"5px"}}></Image>
      </Carousel.Item>
      <Carousel.Item>
      <Image src={require("../Assets/theni1.(1).jpeg")} className='d-block w-100' width={500} height={400} style={{borderRadius:"5px"}}></Image>
      </Carousel.Item>
      <Carousel.Item>
      <Image src={require("../Assets/theni1.(3).jpeg")} className='d-block w-100' width={500} height={400} style={{borderRadius:"5px"}}></Image>
      </Carousel.Item>
      <Carousel.Item>
      <Image src={require("../Assets/theni1.(4).jpeg")} className='d-block w-100' width={500} height={400} style={{borderRadius:"5px"}}></Image>
      </Carousel.Item>
    </Carousel>
        <Card.Body>
          <Card.Text style={{textAlign:"justify"}}>
          Theni Tourism Dotted by luscious patches of greenery and beautiful waterfalls, Theni is a little hamlet on the Western Ghats. The topography of Theni mainly consists of hills and ranges. It has plenty of rivers and dams and is an abode to 27 forests hence filled with unparalleled greenery. The Kolukkamalai Tea estate is often deemed to be the world's highest organic tea estate. 
          </Card.Text>
          <span style={{position:"relative",top:"58px",fontWeight:"500"}}>Starting From <br />&#8377;4000</span>
          <button style={{position:"relative",left:"300px",top:"45px",outline:"none",border:"none",background:"orange",padding:"10px",borderRadius:"10px",color:"#ffffff",fontWeight:"500",width:"120px"}} id="btn">EXPLORE</button>
        </Card.Body>
      </Card>
        </Col>
        {/* Hogenakal */}
        <Col className='mt-5 ' style={{marginLeft:"90px"}}>
        <h4 className='mt-5 mb-4'> Hogenakal 3 Days Tour Packages</h4>
        <Card style={{width:"500px",borderRadius:"13px",height:"716px"}} className='shadow-lg'>
        <Carousel fade>
      <Carousel.Item>
        <Image src={require("../Assets/hogenakkal1.jpeg")} className='d-block w-100' width={500} height={400}style={{borderRadius:"5px"}}></Image>
      </Carousel.Item>
      <Carousel.Item>
      <Image src={require("../Assets/hogenakkal2..jpeg")} className='d-block w-100' width={500} height={400} style={{borderRadius:"5px"}}></Image>
      </Carousel.Item>
      <Carousel.Item>
      <Image src={require("../Assets/hogenakkal3.jpeg")} className='d-block w-100' width={500} height={400} style={{borderRadius:"5px"}}></Image>
      </Carousel.Item>
      <Carousel.Item>
      <Image src={require("../Assets/hokenakkal4..jpeg")} className='d-block w-100' width={500} height={400} style={{borderRadius:"5px"}}></Image>
      </Carousel.Item>
    </Carousel>
        <Card.Body>
          <Card.Text style={{textAlign:"justify"}}>
          Hogenakkal Tourism Hogenakkal is a waterfall located in Dharmapuri district of Tamil Nadu where the Kaveri river splits into multiple streams of waterfalls, Located at a distance of 180 km from Bangalore, Hogenakkal has water throughout the year. The carbonite rocks, the coracle (basket boat) tides, freshwater fish, oil massages by locals make it a perfect one day trip or a weekend getaway from Bangalore.
          </Card.Text>
          <span style={{position:"relative",top:"40px",fontWeight:"500"}}>Starting From <br />&#8377;3000</span>
          <button style={{position:"relative",left:"300px",top:"22px",outline:"none",border:"none",background:"orange",padding:"10px",borderRadius:"10px",color:"#ffffff",fontWeight:"500",width:"120px"}} id="btn">EXPLORE</button>
        </Card.Body>
      </Card>
        </Col>
       </Row>
     </Container>

    

     
     </>
  );
}

export default TourPackage;