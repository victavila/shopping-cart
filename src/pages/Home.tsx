import { useState } from "react";
import { Navigate } from "react-router-dom";
import background from "../images/home-background.jpg";

const Home = () => {
  
  const [navigateActive, setNavigateActive] = useState(false);

  const toggleNavigate = () => {
    setNavigateActive(!navigateActive);
  }
  
  return (
    <div className="home">
      <img className="home__background" src={background} alt="background"></img>
      <button className="btn__shop" onClick={() => toggleNavigate()}>Shop Now</button>
      {navigateActive ? 
      <Navigate to="/shopping-cart/shop" />:
      <></>}
    </div>
  )
}

export default Home;