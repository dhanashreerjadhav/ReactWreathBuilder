import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import WreathBuilder from './Components/WreathBuilder';
import MainContainer from './Components/MainContainer';
import CanvasObject from './Components/CanvasObject';
import RenderCanvas from './Components/RenderCanvas';

// import { FabricContextProvider } from './Components/FabricContext';

ReactDOM.render(
  <React.StrictMode>
    {/* <WreathBuilder/> */}
    
    <MainContainer></MainContainer>
    {/* <FabricContext>

    </FabricContext> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
