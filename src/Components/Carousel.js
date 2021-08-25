import React, { Component } from "react";
import '../Stylesheets/carousel.css';
import Portlet from "./Portlet";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

class CarouselClass extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let carouselItems = ['Select a wreath form',
        'Add upto 3 stems & bushes',
        'Add upto 3 picks',
        'Add upto 3 accessories'];
        var wreathImages=["/Images/wreath1.jpg","/Images/wreath2.jpg",
                          "/Images/wreath3.jpg","/Images/wreath4.jpg"];
        var stemsbushesImages=["/Images/stem1.jpg","/Images/stem2.jpg",
        "/Images/stem3.jpg","/Images/stem4.jpg"];
        var pickImages = ["/Images/pick1.jpg","/Images/pick2.jpg",
        "/Images/pick3.jpg","/Images/pick4.jpg"];
        var accessoryImages=["/Images/accessory1.jpg","/Images/accessory2.jpg",
        "/Images/accessory3.jpg","/Images/accessory4.jpg"]
        let portletNumberArray=[8,8,8,8];
        return(
            <div>
                <Carousel interval={null} className="carouselDiv">
                {carouselItems.map(function(item,i){
                    return(<Carousel.Item>
                        <Carousel.Caption>
                            <h3>{item}</h3>
                        </Carousel.Caption>
                        {portletNumberArray.map(function(item1,i){
                            if(item == 'Select a wreath form'){
                                return(
                                    <Portlet dataImage={wreathImages[i]}/>
                                )
                            }
                            else if(item == 'Add upto 3 stems & bushes'){
                                return(
                                    <Portlet dataImage={stemsbushesImages[i]}/>
                                )
                            }
                            else if(item == 'Add upto 3 picks'){
                                return(
                                    <Portlet dataImage={pickImages[i]}/>
                                )
                            }
                            else if(item == 'Add upto 3 accessories'){
                                return(
                                    <Portlet dataImage={accessoryImages[i]}/>
                                )
                            }  
                            })}
                    </Carousel.Item>)
                })}
                </Carousel>
            </div>
        )
    }
}

export default CarouselClass;