import React from "react";

//WrappedComponent ile buna gelecek komponenti yakala
const LogButton = (WrappedComponent, info) => {
 const clickHandler = (e) => {
    console.log("Bileşen logButton HOC ile geliştirildi");
  };
  return (props) => {
    return (
      <div>
        <button onClick={clickHandler}>Log Yaz</button>
        {/* //yakalamış olduğumuz komponenti geri göndermek için */}
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default LogButton;
