import { Link } from "react-router-dom";

function Navbar () {
  return (
    <div id="container">
      <div  id="navbar" >{/* navigation here */}
        <Link to="/blue"><h2 className="h2blue">Blue</h2></Link>
        <Link to="/red"><h2 className="h2red">Red</h2></Link>
        <Link to="/green"><h2 className="h2green">Green</h2></Link>
        <Link to="/purple"><h2 className="h2purple">Purple</h2></Link>
        <Link to="/"><h2 className="h2home">Home</h2></Link>
      </div>
    </div>
  );
}

export default Navbar;