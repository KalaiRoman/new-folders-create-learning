import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Middleware from "./middleware/Middleware";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Middleware>
    <App />
  </Middleware>
)
reportWebVitals();
