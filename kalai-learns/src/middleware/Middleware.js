import React from "react";
import BrowserRouting from "./BrowserRouting";
import ReduxProvider from "./ReduxProvider";
import ScrollbarArrow from "./ScrollbarArrow";

function Middleware({ children }) {
  return (
    <BrowserRouting>
      <ScrollbarArrow />

      <ReduxProvider>{children}</ReduxProvider>
    </BrowserRouting>
  );
}

export default Middleware;
