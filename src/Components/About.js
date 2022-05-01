import { useEffect } from "react";

function About() {

  useEffect( () => {
    console.log('About Page called');
  });
    return (
      <div className="App">
        <h1>About</h1>
      </div>
    );
  }
  
  export default About;
  