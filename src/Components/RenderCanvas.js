import React, { Component } from "react";
import CanvasObject from "./CanvasObject";
import {fabric} from 'fabric';

class RenderCanvas extends Component{
    constructor(){
        super();
    }
    render(){
        CanvasObject.renderAll();
        return(
            <div></div>
        )
    }
    
}

export default RenderCanvas;