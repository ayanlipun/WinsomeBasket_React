import User from "./Users";
import UserClass from "./UserClass";
import React from "react";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);

    //console.log("Parent Constructor");
  }

  componentDidMount() {
    //console.log("Parent Component Did Mount!");
  }

  render() {
    console.log("Parent render");
    return (
      <div>
        <h1>About Class Component</h1>
        <h2>This is Namaste React Web Series</h2>
        {/* <UserClass
          name={"1st "}
          location={"Bangalore"}
        ></UserClass> */}
        <UserClass name={"2nd "} location={"Gujurat"}></UserClass>
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About Us</h1>
//       <h2>This is Namaste React Web Series.</h2>
//       <User name={"Akhaya saini (function)"} location={"Bangalore class"} />

//       <UserClass
//         name={"Akhaya saini (function)"}
//         location={"Bangalore class"}
//       />
//     </div>
//   );
// };

export default About;
