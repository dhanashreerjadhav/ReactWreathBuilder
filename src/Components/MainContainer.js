import {React,Component} from "react";
import Carousel from './Carousel';
import CommonDiv from './CommonDiv';

class MainContainer extends Component{
    constructor(props){
        super(props);
        this.state={
            images:[],
            places:[{
                available:false,
                x:150,
                y:25
            },
            {
                available:false,
                x:250,
                y:75
            },
            {
                available:false,
                x:275,
                y:150
            },
            {
                available:false,
                x:250,
                y:225
            },
            {
                available:false,
                x:150,
                y:275
            },
            {
                available:false,
                x:50,
                y:225
            },
            {
                available:false,
                x:25,
                y:150
            },
            {
                available:false,
                x:50,
                y:75
            }]
        };
    }
    updateImages=(image,positionx,positiony)=>{
        this.setState({ 
            images: this.state.images.concat(
                {
                    'name':image,
                    'x':positionx,
                    'y':positiony
                })
          })
        console.log("sd",this.state.images);
    }
    updatePlaces=(boolValue,index)=>{
        console.log(boolValue,index);
        let newArray = Array.from(this.state.places);
        for(var i=0;i<newArray.length;i++){
            if(i==index){
                newArray[i].available = boolValue;
            }
        }
        this.setState({
            places:newArray
        })
        console.log(this.state.places);
    }
    render(){
        return(
            <div>
                <CommonDiv images={this.state.images} 
                    updatePlaces={this.updatePlaces} 
                    places={this.state.places}>
                </CommonDiv>
                <Carousel images={this.state.images} 
                    updateImages={this.updateImages}>
                </Carousel>
            </div>
        )
    }
}

export default MainContainer;