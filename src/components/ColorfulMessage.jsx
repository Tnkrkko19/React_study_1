import React from "react";

export const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contentStyle = {
    // 同じ関数名であれば、省略可能
    // color: color,
    // fontSize: "18px"
    color,
    fontSize: "18px",
  };
  return <p style={contentStyle}>{children}</p>;
};

// constをexportで使用できるようにできるから。
// export default ColorfulMessage;
