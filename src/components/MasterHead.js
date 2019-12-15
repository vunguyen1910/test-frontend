import React,{useState} from "react";
import Carousel from 'react-bootstrap/Carousel'


export default function MasterHead() {
    const [index, setIndex] = useState(0)
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="Path_1_Class" src={require('../img/900x520_piano-min.jpg')} alt="First slide" />

        <Carousel.Caption className="Knowledge_is_power_Class">
          <h3>Knowledge is power</h3>
          <div class="Any_succesfull_career_starts_w_Class">
            <span>Any succesfull career starts with good education</span>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="Path_1_Class" src={require('../img/d1.jpg')} alt="Second slide" />

        <Carousel.Caption className="Knowledge_is_power_Class">
          <h3>Second slide label</h3>
          <div class="Any_succesfull_career_starts_w_Class">
            <span>Any succesfull career starts with good education</span>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="Path_1_Class" src={require('../img/hailey-reed-Martin+Sepia+crop.jpg')} alt="Third slide" /> 

        <Carousel.Caption className="Knowledge_is_power_Class">
          <h3>Third slide label</h3>
          <div class="Any_succesfull_career_starts_w_Class">
            <span>Any succesfull career starts with good education</span>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}