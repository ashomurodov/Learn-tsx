import ReactDOM from "react-dom/client";
import App from "./app";

import "bootstrap/dist/css/bootstrap.min.css";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
// import "assets/style.scss";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <>
    <BrowserRouter>
      <App />
      <Toaster />
    </BrowserRouter>
  </>
);
