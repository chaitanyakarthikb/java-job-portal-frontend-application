import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
        <h1>CK Job Portal</h1>
        <div className="nav--input">
            <input placeholder="search for jobs..."/>
        </div>

        <div className="nav--links">
            <Link to={"/"}>
                <h3>Home</h3>
            </Link>

            <Link to={"/addJob"}>
                <h3>Add Job</h3>
            </Link>
            
        </div>
    </header>
  )
}

export default Header
