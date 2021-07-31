import { Link } from "react-router-dom";
import './ShopNavigation.css';

function ShopNavigation() {
  return (
    <nav>
      <ul className="shopMenu">
        <Link className="Link" to="/category/CD" >
          CD
        </Link>
        <Link to="/category/Vinyl" className="Link">
          VINYL
        </Link>
        <Link to="/category/SheetMusic" className="Link">
          SHEET MUSIC
        </Link>
      </ul>
    </nav>
  );
}

export default ShopNavigation;