import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";

function Home() {
  return (
    <div>
      <Navigation />
      <h1>WorldWise</h1>
      <Link to="/app">Go to the app</Link>
    </div>
  );
}

export default Home;
