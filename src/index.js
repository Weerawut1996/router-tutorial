import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";




const rootElement = document.getElementById("Navbar1");
render(
    <>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </>,
    rootElement
  
);