import React,{Component} from 'react';

export default class Slider extends Component{
    constructor(props){
        super(props);
        this.state = {
            images:[
            "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg",
            "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
            "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg",
            "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
            "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/mountains.jpg",
            "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/redsky.jpg",
            "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/sandy-shores.jpg",
            "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg"
            ],
            currentIndex: 0,
            translateValue: 0
        }
    }
        goToPrevSlide = () => {
            if(this.state.currentIndex === 0)
            return;
            this.setState(prevState => ({
                currentIndex: prevState.currentIndex - 1,
                translateValue: prevState.translateValue + this.slideWidth()
            }))
        }
    
        goToNextSlide = () => {
            if(this.state.currentIndex === this.state.image.length - 1){
                return this.setState({
                    currentIndex: 0,
                    translateValue:0
                })
            }
            this.setState(prevState => ({
                currentIndex: prevState.currentIndex + 1,
                translateValue: prevState.translateValue + -(this.slideWidth())
            }));
        }
    
    render(){
        return (
            <div className = "slider">

            <div className = "slider-wrapper"
            style={{
                transform:
                'tranlateX(${this.state.translateValue}px)',
                transition: 'transform ease-out 0.45s'
            }}>
            {
                this.state.images.map((image,i)=>(
                    <Slide key={i} image={image}/>
                ))
            }
            </div>
            <Slide/>
            <LeftArrow
                goToPrevSlide = {this.goToPrevSlide}
            />
            <RightArrow
                goToNextSlide = {this.goToNextSlide}
            />
            </div>
        );
    }
}

const Slide = ({image}) => {
    const styles = {
        backgroundImage:'url(${image})',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 60%'
    }
    return <div className = "slide" style={styles}>
    </div>
}

const LeftArrow = (props)=>{
    return (
        <div className = "backArrow arrow" onClick = {props.goToPrevSlide}>
        <i className = " fa fa-arrow-left fa-2x" aria-hidden="true"></i>
        </div>
    );
}

// const RightArrow = (props) => {
//     return (
//       <div className="nextArrow arrow" onClick={props.goToNextSlide}>
//         <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
//       </div>
//     );
//   }

const RightArrow = (props)=>{
    return (
        <div className="nextArrow arrow" onClick={props.goToNextSlide}>
        <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
        </div>
    );
}

// ReactDOM.render(
//     <Slider />,
//     document.querySelector('.app')
// )

// ReactDOM.render(
//     <Slider />,
//     document.querySelector('.app')
//   )
// render() {
//     return (
//       <div className="slider">
//         {/* There are no more individual slides, you only need one Slide Component */}
//         <Slide background={this.state.background} current={1} />
//       </div>
//     );
//     // }
// }
// render() {
//     return (
//     <div>
//        <div className="slider">
//         {/* There are no more individual slides, you only need one Slide Component */}
//         <Slide background={this.state.background} current={1} />
//       </div>
//         </div>
//         );
//     }
// }
