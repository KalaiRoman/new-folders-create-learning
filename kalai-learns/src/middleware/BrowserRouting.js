import { BrowserRouter } from "react-router-dom";
import SuspenseLoader from "./SuspenseLoader";
function BrowserRouting({ children }) {
  return (
    <BrowserRouter>
      <SuspenseLoader>{children}</SuspenseLoader>
    </BrowserRouter>
  );
}

export default BrowserRouting;
