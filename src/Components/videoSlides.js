import React, { Component } from 'react';

// const {
//     CSSTransitionGroup
//   } = React.addons;
  
//   class Parent extends React.Component {
//     constructor(props) {
//       super(props);
  
//       this.state = {
//         selectedFooter: 1
//       }
      
//       this.settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         arrows: true,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         beforeChange: (prevIndex, nextIndex) => {
//           this.setState({
//             selectedFooter: [0, 1, 2].indexOf(nextIndex) !== -1 ? 1 : 2
//           });
//         }
//       };
//     }
  
//     render() {
//       console.log('render');
  
//       return (
//         <div>
//           <SimpleSlider settings={this.settings} />
//           <Footer selectedFooter={this.state.selectedFooter} />
//          </div> 
//       );
//     }
//   }
  
//   class SimpleSlider extends React.Component {
//     shouldComponentUpdate (nextProps) {
//       // TODO: add proper implementation that compares objects
//       return false;
//     }
    
//     render () {
//       console.log('slider render');
//       return (
//         <Slider {...this.props.settings}>
//           <div><div className="slide-0"><h3>Graph 1</h3></div></div>
//           <div><div className="slide-1"><h3>Graph 2</h3></div></div>
//           <div><div className="slide-2"><h3>Graph 3</h3></div></div>
//           <div><div className="slide-3"><h3>Set Up</h3></div></div>
//         </Slider>
//       )
//     }
//   }
          
//   const Footer = ({selectedFooter}) => {
//     console.log('reander footer')
//     return (
//     <div className="footer-container">
//         <CSSTransitionGroup
//           transitionName="example"
//           transitionEnterTimeout={500}
//           transitionLeaveTimeout={500}>
//           <div
//             key={selectedFooter}
//             className={`footer${selectedFooter}`}>
//             Footer {selectedFooter}
//           </div>
//         </CSSTransitionGroup>
//       </div>
//     )
//   }       
  
//   ReactDOM.render(<Parent />, document.querySelector('#root'));

// var React = require('react');
// var ReactDOM = require('react-dom');
// var Carousel = require('react-responsive-carousel').Carousel;
// var DemoCarousel = React.createClass({
//     render() {
//         return (
//             <Carousel showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
//                 <div>
//                     <img src="./src/backPic01.png" />
//                     <p className="legend">Legend 1</p>
//                 </div>
//                 <div>
//                     <img src="./src/backPic02.png" />
//                     <p className="legend">Legend 2</p>
//                 </div>
//                 {/* <div>
//                     <img src="assets/3.jpeg" />
//                     <p className="legend">Legend 3</p>
//                 </div> */}
//                 {/* <div>
//                     <img src="assets/4.jpeg" />
//                     <p className="legend">Legend 4</p>
//                 </div>
//                 <div>
//                     <img src="assets/5.jpeg" />
//                     <p className="legend">Legend 5</p>
//                 </div>
//                 <div>
//                     <img src="assets/6.jpeg" />
//                     <p className="legend">Legend 6</p>
//                 </div> */}
//             </Carousel>
//         );
//     }
// });
// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));
// export default class ButtonTest extends Component {

// const listItems = [
//     {title: 'step 1', content: 'Break The UI Into A Component Hierarchy'},
//     {title: 'step 2', content: 'Build A Static Version in React'},
//     {title: 'step 3', content: 'Identify The Minimal (but complete) Representation Of UI State'},
//     {title: 'step 4', content: 'Identify Where Your State Should Live'},
//     {title: 'step 5', content: 'Add Inverse Data Flow'}
//   ];
  
//   function SlideItem(props) {
//     return (
//       <div className="item-slide">
//         <h1>{props.title}</h1>
//         <h2>{props.content}</h2>
//       </div>
//     );
//   }
  
//   const Indicators = (props) => {
//     const listIndicators = listItems.map((item, index) => 
//       <li
//         key={index}
//         className={props.currentSlide === index ? 'active' : ''} 
//         onClick={() => props.changeSlide(index)}
//       >{index + 1}</li>
//     );
//     return (
//       <ul className="indicators">
//         {listIndicators}
//       </ul>
//     );
//   };
  
//   export default class ButtonTest extends Component {
//     constructor(props) {
//        super(props);
//       this.state = {         
//            slideshow: props.slide,         
//            slideIndex: 0
//       };
//       this.currentIndex = 0;
//       this.pause = false;
//     }
     
//     componentDidMount() {
//       var that = this;
//       this.timeout = setTimeout(function () {
//           that.goTo('auto')
//         }, 3000);    
//     }
    
//     componentDidUpdate() {
//       var that = this;
//       if(this.pause === true) {
//         clearInterval(this.timeout);
//         this.timePause = setTimeout(function(){
//           clearInterval(this.timePause);        
//         }, 8000);
//         this.pause = false;
//       }         
//       this.timeout = setTimeout(function () {
//         that.goTo('auto')
//       }, 3000);
      
//     }
      
//     componentWillUnmount() {
//       clearInterval(this.timeout);
//     }
    
//     goTo = (direction) => { 
//         let index = 0;
//         switch(direction) {
//           case 'auto':
//             index = this.currentIndex + 1;
//             this.currentIndex = index >= listItems.length ? 0 : index;          
//           break;
//           case 'prev':
//             index = this.currentIndex - 1;
//             this.currentIndex = index < 0 ? listItems.length - 1 : index;
//             this.pause = true;
//           break;
//           case 'next':
//             index = this.currentIndex + 1;
//             this.currentIndex = index >= listItems.length ? 0 : index;
//             this.pause = true;
//           break;
//           default:
//             this.currentIndex = direction;
//             this.pause = true;
//           break;
//         }
//         console.log('pause:', this.pause);
//          this.setState({
//            slideIndex: this.currentIndex,
//            slideshow: listItems[this.currentIndex]
//          });
        
//     };
     
//     render() {    
//       return (
//         <div className="slideshow-simple">
//           <SlideItem 
//             title={this.state.slideshow.title}
//             content={this.state.slideshow.content}
//           />        
//           <Indicators 
//             changeSlide={this.goTo} // function
//             currentSlide={this.state.slideIndex}
//             />
//           <div className="wrap-control">
//             <button className="btn btn-prev" value="Prev" onClick={() => this.goTo('prev')}>Prev</button>   
//             <button className="btn btn-next" value="Next" onClick={() => this.goTo('next')}>Next</button>          
//           </div>
//         </div>
//       );
//     }    
//   }
  
//   const element = <Slides slide={listItems[0]}/>;
  
//   ReactDOM.render(
//     element,
//     document.getElementById("root")
//   );

class Carousel extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentImageIndex:0
        };
    }
    render(){
        return (
            <div className="carousel">
            <Arrow 
            direction="left"
            clickFunction = {this.previousSlide}
            glyph="$#9664;"/>
            <ImageSlide url={imgUrl[this.state.currentImageIndex]}/>
            <Arrow
            direction="right"
            clickFunction={this.nextSlide}
            glyph="&#9654;"/>
            </div>
        );
    }
}
const Arrow = ({direction,clickFunction,glyph}) =>(
    <div
    className = {'slide-arrow ${direction}'}
    onClick={clickFunction}>{glyph}
    </div>
)
const ImageSlide = ({url})=>{
    const styles = {
        backgroundImage: 'url(${url})',
        backgroundSize:'cover',
        backgroundPosition:'center'
    };
    return (
        <div className="image-slide" style={styles}></div>
    );
}