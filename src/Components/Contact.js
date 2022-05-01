import { useEffect } from "react";
function Contact() {

  useEffect( () => {
    console.log('Contact Page called');
  });
    return (
      <div className="App">
        <h1>Contact</h1>
      </div>
    );
  }
  
  export default Contact;
  