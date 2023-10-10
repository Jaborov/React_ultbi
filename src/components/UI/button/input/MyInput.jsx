import clasess from "./MyInput.module.css";
import React from "react";
const MyInput = React.forwardRef((props, ref) => {
  return <input ref={ref} className={clasess.myInput} {...props} />;
});

export default MyInput;
