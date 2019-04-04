import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";

const style={
  position: "absolute",
  zIndex: -2,
  top: 0,
  left:0,
  height: "215px",
  width: "100%",

}
const CarouselPage = () => {
  return (
    <MDBContainer>
      <MDBCarousel activeItem={1} length={4} showControls={true} showIndicators={true} className="z-depth-1" data-interval=" 34" class="carousel slide carousel-fade"  style ={style}>
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img className="d-block w-100" src="http://drive.google.com/uc?export=view&id=1vqczlYYgnq-79ZT-e8cYFTTgGIx6kBnR"  alt="First slide"/>
              {/* 16o2Uo2j7HAKw74dzwrwiW48HZCdwOC8y */}
              <MDBMask overlay="black-light" />
            </MDBView>
            <MDBCarouselCaption>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img className="d-block w-100" src="http://drive.google.com/uc?export=view&id=1ac92gSUW60d2naGgzTiqL3_3QedM_MCG" alt="Second slide" />
              <MDBMask overlay="black-light" />
              {/* 1ep-KPOhobnZJT_WdjP4GHUG5ZdXekkH3 */}
            </MDBView>
            <MDBCarouselCaption>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img className="d-block w-100" src="http://drive.google.com/uc?export=view&id=1agtUB186RIUol8y3NpgLHljKnQTt8Vzu" alt="Third slide" />
              <MDBMask overlay="black-slight" />
            </MDBView>
            <MDBCarouselCaption>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="4">
            <MDBView>
              <img className="d-block w-100" src="http://drive.google.com/uc?export=view&id=1W0jlVMnOADUu05YLZZKMjKW5713QFVp9" alt="Mattonit's item" />
              <MDBMask overlay="black-light" />
            </MDBView>
            <MDBCarouselCaption>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
}

export default CarouselPage;