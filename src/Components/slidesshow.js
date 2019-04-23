import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
    "mdbreact";

const style = {
    position: "absolute",
    zIndex: -2,
    top: 0,
    left: 0,
    height: "215px",
    width: "100%",

}
const CarouselPage = () => {
    return (
        <MDBContainer>
            <MDBCarousel activeItem={1} length={8} showControls={false} showIndicators={false} className="z-depth-1" data-interval=" 23" class="carousel slide carousel-fade" style={style}>
                <MDBCarouselInner>
                    <MDBCarouselItem itemId="1">
                        <MDBView>
                            <img className="d-block w-100" src="http://drive.google.com/uc?export=view&id=13KX3lZejvP9ClHoSRnm2Z3vYOoQW2OBS" alt="First slide" />
                            {/* 16o2Uo2j7HAKw74dzwrwiW48HZCdwOC8y */}
                            <MDBMask overlay="black-light" />
                        </MDBView>
                        <MDBCarouselCaption>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="2">
                        <MDBView>
                            <img className="d-block w-100" src="http://drive.google.com/uc?export=view&id=1oTTqQL4Oy-5GqE4AMumYVfltK4v35yhd" alt="Second slide" />
                            <MDBMask overlay="black-light" />
                            {/* 1ep-KPOhobnZJT_WdjP4GHUG5ZdXekkH3 */}
                        </MDBView>
                        <MDBCarouselCaption>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>

                    <MDBCarouselItem itemId="3">
                        <MDBView>
                            <img className="d-block w-100" src="http://drive.google.com/uc?export=view&id=1nVCWHIo357gevZ1kZfjxostN5NYw0Bl6" alt="Third slide" />
                            <MDBMask overlay="black-slight" />
                        </MDBView>
                        <MDBCarouselCaption>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>




                    <MDBCarouselItem itemId="5">
                        <MDBView>
                            <img className="d-block w-100" src="http://drive.google.com/uc?export=view&id=1pPdskm6BMa39z0nRKZqnAOg_SIBU3JkE" alt="Thslide" />
                            <MDBMask overlay="black-slight" />
                        </MDBView>
                        <MDBCarouselCaption>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>


                    <MDBCarouselItem itemId="4">
                        <MDBView>
                            <img className="d-block w-100" src="http://drive.google.com/uc?export=view&id=1qKhmKwPycnsAyU7V3fc2BYHiAP_bMT24" alt="Mattonit's item" />
                            <MDBMask overlay="black-light" />
                        </MDBView>
                        <MDBCarouselCaption>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>

                    <MDBCarouselItem itemId="6">
                        <MDBView>
                            <img className="d-block w-100" src="http://drive.google.com/uc?export=view&id=1g4THIERhVJlxOmpjahnzS985oPBq1rne" alt="Mat item" />
                            <MDBMask overlay="black-light" />
                        </MDBView>
                        <MDBCarouselCaption>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>

                    <MDBCarouselItem itemId="7">
                        <MDBView>
                            <img className="d-block w-100" src="http://drive.google.com/uc?export=view&id=148KamsH62EozWhq67KTdbQGDf3M1ztsI" alt="Thi slide" />
                            <MDBMask overlay="black-slight" />
                        </MDBView>
                        <MDBCarouselCaption>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>

                    <MDBCarouselItem itemId="8">
                        <MDBView>
                            <img className="d-block w-100" src="http://drive.google.com/uc?export=view&id=1npcIBMouX6sOKDQsUKLEQ2mbfsOv-3NN" alt="Ma item" />
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