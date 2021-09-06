import React, { Component } from "react";
import '../Stylesheets/portlet.css';
import {fabric} from 'fabric';

class Portlet extends Component{
    constructor(props){
        super(props);
        this.state={
            img:this.props.dataImage
        }
        this.addCanvasElement = this.addCanvasElement.bind(this);
        this.circle1 = new fabric.Circle({
            radius:120,
            fill: undefined,
            stroke: "red",
            strokeWidth: 1,
            left:100
          });
        this.circle2 = new fabric.Circle({
            radius:150,
            fill: undefined,
            stroke: "red",
            strokeWidth: 1,
            left:100
          });
    }
    addCanvasElement(){
        console.log('abc');
        console.log(this.props.images);
        // var canvas = new fabric.Canvas('canvas', {
        //     width:'1000',
        //     height:'300',
        // })
        // var img = this.state.img;
        
        // fabric.Image.fromURL(img, function(oImg) {
        //     oImg.set('height', 300);
        //     oImg.set('width', 300);
        //     oImg.scale(0.5).set('borderColor', 'black');
        //     canvas.add(oImg);
        //     canvas.centerObject(oImg);
        //   });
        //   canvas.add(this.circle1);
        //   canvas.centerObject(this.circle1);
        //   canvas.add(this.circle2);
        //   canvas.centerObject(this.circle2);
    }
    render(){
        return(
               <div className="portletDiv" onClick={() => this.props.images.updateImages(this.props.dataImage)}>
                   <img src={this.props.dataImage} height="200" width="120" />
               </div>
        )
    }
}

export default Portlet;