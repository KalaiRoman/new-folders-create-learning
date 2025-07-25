import React from "react";
import AllButtons from "../constKeys/ButtonsData";

function Buttons({ title, type, onClick }) {
  const findColor = AllButtons.find((item, index) => item?.type === type);

  console.log(findColor?.type,'findColor')
  return (
    <div>
      <button className={`${findColor?.type}-btn`} onClick={onClick}>
        {title}
      </button>
    </div>
  );
}

export default Buttons;
