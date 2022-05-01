import { useEffect } from "react";
function Home() {
  useEffect( () => {
    console.log('Home Page called');
  });
  return (
    <div className="App">
      <h1>Welcome to Home</h1>
    </div>
  );
}

export default Home;
