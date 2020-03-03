import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
<Link to="/"><button>Home</button></Link>
<Link to="/beers"><button>Beer Page</button></Link>
<Link to="/bread"><button>Bread</button></Link>
      </nav>
    </header>
  );
};



export default Header;
