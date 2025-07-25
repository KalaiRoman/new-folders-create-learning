import React, { useEffect, useRef, useState } from "react";
import RoutingPaths from "../constKeys/RoutingData";
import { Route, Routes } from "react-router-dom";
import ProtectedRouter from "./ProtectedRouter";

function Routings() {
   const [scrollTop, setScrollTop] = useState(0);
  const scrollRef = useRef(null);

  useEffect(() => {
    const handleDivScroll = () => {
      setScrollTop(scrollRef.current.scrollTop);
      console.log("Div scrollTop:", scrollRef.current.scrollTop);
    };

    const div = scrollRef.current;
    div.addEventListener("scroll", handleDivScroll);

    return () => div.removeEventListener("scroll", handleDivScroll);
  }, []);

  console.log(scrollTop,'scrollTop')

  return (
    <div ref={scrollRef}>
      <Routes>
        {RoutingPaths?.map((item, index) => {
          const Component = item.component;
          if (item?.sidebar) {
            return (
              <Route
                key={index}
                element={<Component />}
                path={item.path}
                index={item.index}
              ></Route>
            );
          } else {
            return (
              <Route key={index} element={<ProtectedRouter />}>
                <Route
                  element={<Component />}
                  path={item.path}
                  index={item.index}
                ></Route>
              </Route>
            );
          }
        })}
      </Routes>
    </div>
  );
}

export default Routings;
