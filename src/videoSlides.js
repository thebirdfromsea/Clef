const {
    CSSTransitionGroup
  } = React.addons;
  
  class Parent extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        selectedFooter: 1
      }
      
      this.settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (prevIndex, nextIndex) => {
          this.setState({
            selectedFooter: [0, 1, 2].indexOf(nextIndex) !== -1 ? 1 : 2
          });
        }
      };
    }
  
    render() {
      console.log('render');
  
      return (
        <div>
          <SimpleSlider settings={this.settings} />
          <Footer selectedFooter={this.state.selectedFooter} />
         </div> 
      );
    }
  }
  
  class SimpleSlider extends React.Component {
    shouldComponentUpdate (nextProps) {
      // TODO: add proper implementation that compares objects
      return false;
    }
    
    render () {
      console.log('slider render');
      return (
        <Slider {...this.props.settings}>
          <div><div className="slide-0"><h3>Graph 1</h3></div></div>
          <div><div className="slide-1"><h3>Graph 2</h3></div></div>
          <div><div className="slide-2"><h3>Graph 3</h3></div></div>
          <div><div className="slide-3"><h3>Set Up</h3></div></div>
        </Slider>
      )
    }
  }
          
  const Footer = ({selectedFooter}) => {
    console.log('reander footer')
    return (
    <div className="footer-container">
        <CSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}>
          <div
            key={selectedFooter}
            className={`footer${selectedFooter}`}>
            Footer {selectedFooter}
          </div>
        </CSSTransitionGroup>
      </div>
    )
  }       
  
  ReactDOM.render(<Parent />, document.querySelector('#root'));




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
