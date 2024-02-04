import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div>
        <Link to="/blue"><h3>Blue</h3></Link>
        <Link to="/red"><h3>Red</h3></Link>
        <Link to="/green"><h3>Green</h3></Link>
        <Link to="/purple"><h3>Purple</h3></Link>
        <Link to="/"><h3>Home</h3></Link>
      </div>
     </footer>
   );
}