import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
const Kumbakonam1 = () => {
  return (
    <Container>
    <Row>
      <Col className='mt-5'>
       <ul >
        <li className="text-center ">Kumbakonam</li>
        <li className='d-flex justify-content-center' >Tourist Places Visit</li>
       </ul>
       </Col>
       </Row>
       <Col className='d-lg-flex mt-5 '>
       <Image src={require("../Assets/Kumbakonam.jpeg")} className='d-block w-25 '></Image>
       <p className='mx-lg-3 mt-4 ' style={{textAlign:"justify"}}>
        <h6 >Sarangapani Temple, Overview</h6>
        <span className='ps-5'>Sarangapani Temple, 2n ancient temple dedicated to Lord Vishnu, is located in the town of Kumbakonam in the South-indian state of
Tamil Nadu. The beautiful temple is located on the banks of River Kaveri and is frequented by devotees of Lord Vishnu from all over the world. Along
with being a sacred place of worship, the temple is a work of art in itself, ith several tiers of intricately carved and colourfully decorated mythological
sculptures and images. The grandeur of the temple is breathtking. It has the tallest tower in the town. As one explores the Sarangapani Temple, they
are bound to feel a certain vibe as hundreds of devotees transmit energies through their prayers and the experience is surreal. Sarangapani is the
deity who is an avatar of Lord Vishnu. The temple is considered to be ane of the 108 holy temples dedicated to Lord Vishnu in India. It is also
regarded as one of the five sacred temples.<br /> <br /></span>
    
       </p>
       </Col>

       <Col className='d-lg-flex mt-5 '>
       <p className='mx-lg-3' style={{textAlign:"justify"}}>
        <h6 >Nageswaran Temple, Overview</h6>
        <span className='ps-5'>
        Constructed as a chariot, the Nageswaran temple is an important Shaivite temple. A piece of genius Chola architecture, it is an
important shaivite temple The temple is a marvelous example of the Chola's architectural prowess as the constructed the temple in a way so that it
will only let in sunlight during the month of March-April.
<br /> <br /></span>
        <span className='ps-5'><br /> There are many inscriptions associated with the temple indicating contributions from Cholas, Thanjavur Nayaks and Thanjavur Maratha
kingdom. The oldest parts of the present masonry structure were built during the Chola dynasty in the 9th century, while later expansions, including
the towering gopuram gatehouses, are attributed to later periods, up to the Thanjavur Nayaks during the 16th century.The temple complex is one.
ofthe largest in the state and it houses three gateway towers known as gopurams.
<br /> <br /> </span>
       </p>
       <Image src={require("../Assets/kumbakonam1 (2).jpeg")} className='d-block w-25'></Image>
       </Col>


       <Col className='d-lg-flex mt-5 '>
       <Image src={require("../Assets/kumbakonam1 (3).jpeg")} className='d-block w-25 '></Image>
       <p className='mx-lg-3 mt-4 ' style={{textAlign:"justify"}}>
        <h6 >
        Adi Kumbeshwara Temple, Overview</h6>
        <span className='ps-5'>
        Believed to have been constructed in the 7th century AD by the Cholas, Adi Kumbeshwara Temple is one of the grandest and the oldest
J shiva temple in the town. The temple has a magnificent architecture with the trademark style of the Cholas. It is dedicated to Lord Shiva and houses a
. unique Shiva lingam.
<br /> <br /></span>
        <span className='ps-5'>
        The temple complex covers an area of 30,181 sq ft (2803.9 m2) and houses four gateway towers known as gopurams. The tallest is the
eastem tower, with 11 stories and a height of 128 feet (33 m) The temple has numerous shrines, with those of Kumbeswarar and Mangalambigai
Amman being the most prominent. The temple complex houses many halls the most notable is the sixteen-pillared hall built during the Vijayanagar
period that has al the 27 stars and 12 z0diacs sculpted in 2 single stone.
<br /> <br /> </span>
       </p>
       </Col>

       <Col className='d-lg-flex mt-5 '>
       <p className='mx-lg-3' style={{textAlign:"justify"}}>
        <h6 >
Airavatesvara Temple, Overview</h6>
        <span className='ps-5'>
        Located in the town of Darasuram near Kumbakonam in Tamil Nadu, Alravatesvara Temple is a revered Hindu temple and a UNESCO
world heritage site. Part of the popular trio known as the Great Living Chola Temple along with Brihadeeswara Temple at Thanjavur and the
Gangaikandacholisvaram Temple at Gangaikonda Cholapuram, Airavatesvara Temple was built by the Chola King Rejaraja Chola Il in the 12th
century CE. Presided by the Hindu God Lord Shiva, the temple is amongst the eighteen medieval era Hindu temples in the Kumbakonam area. The
shrine displays the Vaishnavism and Shaktism legs of Hinduism, and the traditional Nayanars- the Bhakti saints of Shaivism. Constructed in the
chariot structure and but in stone, the temple has smaller shrines dedicated to several Vedic and Puranic deities including Indra, Agni, Varuna,
Vayu, Brahma, Surya, Vishnu, Saptamtrikas, Durga, Saraswat, Sr devi (Lakshmi), Ganga, Yamuna, Subrahmanya, Ganesha, Kama, Rati and others.


<br /> <br /></span>
       
       </p>
       <Image src={require("../Assets/kumbakonam1 (4).jpeg")} className='d-block w-25'></Image>
       </Col>
    </Container>
  );
}

export default Kumbakonam1;