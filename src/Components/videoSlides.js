import React, { Component } from 'react';



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