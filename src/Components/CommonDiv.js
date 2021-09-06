import React, { Component } from "react";
import '../Stylesheets/commonDiv.css';

class CommonDiv extends Component{
    constructor(props) {
        super(props);
        console.log(props);
      }
    render(){
        let vacantPlaces=[];
        return(
            <div id="commonSpaceToDraw">
                {/* <input type="checkbox" style={{position:"absolute",top:"15%"}} place="topleft" onClick={(event) => this.props.updatePlaces(event.target.checked,7)}></input>
                <input type="checkbox" style={{marginTop: "-20px",right:'50%',position:"absolute"}} place="top" onClick={(event) => this.props.updatePlaces(event.target.checked,0)}></input>
                <input type="checkbox" style={{top: "50%",position:"absolute"}} place="bottomleft" onClick={(event) => this.props.updatePlaces(event.target.checked,5)}></input>
                <input type="checkbox" style={{marginRight:"20px"}} place="left" onClick={(event) => this.props.updatePlaces(event.target.checked,6)}></input> */}
                <svg height="300" width="300">
                    <circle cx="150" cy="150" r="150" stroke="black" stroke-width="1" fill="none" />
                    <circle cx="150" cy="150" r="100" stroke="black" stroke-width="1" fill="none" />
                    {
                        this.props.places.map( function (place) {
                            if(place.available == false)
                                vacantPlaces.push(place)
                          })
                    }
                    console.log(vacantPlaces);
                    {    
                        this.props.images.map((image, index) => (
                            <image xlinkHref="http://i.stack.imgur.com/vxCmj.png" x={vacantPlaces[index].x} y={vacantPlaces[index].y} height="30" width="30" place="top"/>
                        ))
                    }
                    {/* <image xlinkHref="http://i.stack.imgur.com/vxCmj.png" x="150" y="25" height="10" width="10" place="top"/>
                    <image xlinkHref="http://i.stack.imgur.com/vxCmj.png" x="250" y="75" height="10" width="10" place="topright"/>
                    <image xlinkHref="http://i.stack.imgur.com/vxCmj.png" x="275" y="150" height="10" width="10" place="right"/>
                    <image xlinkHref="http://i.stack.imgur.com/vxCmj.png" x="250" y="225" height="10" width="10" place="bottomright"/>
                    <image xlinkHref="http://i.stack.imgur.com/vxCmj.png" x="150" y="275" height="10" width="10" place="bottom"/>
                    <image xlinkHref="http://i.stack.imgur.com/vxCmj.png" x="50" y="225" height="10" width="10" place="bottomleft"/>
                    <image xlinkHref="http://i.stack.imgur.com/vxCmj.png" x="25" y="150" height="10" width="10" place="left"/>
                    <image xlinkHref="http://i.stack.imgur.com/vxCmj.png" x="50" y="75" height="10" width="10" place="topleft"/> */}
                </svg>
                {/* <input type="checkbox" 
                    style={{paddingLeft:"20px"}} place="right" 
                    onClick={(event) => this.props.updatePlaces(event.target.checked,2)}></input>
                <input type="checkbox" 
                    style={{top: "15%",position:"absolute"}} place="topright" 
                    onClick={(event) => this.props.updatePlaces(event.target.checked,1)}></input>
                <input type="checkbox" 
                    style={{top: "50%",position:"absolute"}} place="bottomright" 
                    onClick={(event) => this.props.updatePlaces(event.target.checked,3)}></input>
                <input type="checkbox" 
                    style={{top:'60%',left:'50%',marginTop:"10px",position:"absolute"}} place="bottom" 
                    onClick={(event) => this.props.updatePlaces(event.target.checked,4)}></input> */}
            </div>
        )
    }
}

export default CommonDiv;