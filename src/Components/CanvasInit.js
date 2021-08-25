import React, { useContext } from 'react';
import { FabricContext } from './FabricContext';

const MyComponent = () => {
    const [canvas, initCanvas] = useContext(FabricContext);
    useEffect(() => {
        const localCanvas = new fabric.Canvas('c');
        initCanvas(localCanvas);
    }, []);

  return (
    <canvas
      id='c'
      width={1000}
      height={1000}
    />
  );
}