import React from "react";
import Header from "./Header";

function main(props) {
  //   const [show, setShow] = React.useState();
  //   const { user, yas } = props;
  //   console.log(user, yas);
  //   const myStyle={
  //     color:"blue",
  //   }
  return (
    <div style={{ backgroundColor: "bisque" }}>
      <div>Main</div>
      <h1>Header</h1>
      <Header />
      {props.user}-{props.yas}
    </div>
  );
}

export default main;
