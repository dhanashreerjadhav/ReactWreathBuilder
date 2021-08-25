import React, { Component } from "react";
import { fabric } from 'fabric';

class CanvasObject extends Component{
    constructor(){
        super();
        this.canvasObj = new fabric.Canvas('globalCanvas', {
            width:'1000',
            height:'300'
        })
    }
    
    render(){
        return this.canvasObj;
    }
}

export default CanvasObject.canvasObj;