import React, { useState, useEffect } from 'react';
import { fabric } from 'fabric';
const WreathBuilder = () => {
  const [canvas, setCanvas] = useState('');
  const circle1 = new fabric.Circle({
    radius:20,
    borderColor:'red',
    backgroundColor:'red'
  })
  const circle2 = new fabric.Circle({
    radius:30,
    borderColor:'green',
    backgroundColor:'green'
  })
  useEffect(() => {
    setCanvas(initCanvas());
  }, []);
  const initCanvas = () => (
    new fabric.Canvas('canvas', {
        width:'1000',
        height:'300',
    })
  )
  return(
     <div>
      <canvas id="canvas" />
     </div>
  );
}

export default WreathBuilder;
