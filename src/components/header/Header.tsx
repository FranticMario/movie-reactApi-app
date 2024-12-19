import { Link, NavLink } from "react-router-dom";
import "./Header.css"
import { useState } from "react";
import Logo from "../logo/Logo";

interface PropsSearch {
    search: string,
    setSearch: React.Dispatch<React.SetStateAction<string>>,
}

const Header:React.FC<PropsSearch> = (props) => {
    const [inputValue, setInputValue] = useState<string>("");

    const handleSearchClick = () => {
            props.setSearch(inputValue); 
    };

    return ( 
        <header className="header">
            <div className="wrapper header__wrapper">
                <Link to="/"><Logo/></Link>
                <nav className="navigation">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="about">About</NavLink>
                </nav>

                <div className="search__container">
                    {/* <input className="input__serach" type="search"
                        placeholder="Search movies..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)} /> */}



                    <input className="gate" id="class" type="search"
                        placeholder="Search movies..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)} /><label  htmlFor="class">Movies</label>

                    <button className="btn" onClick={handleSearchClick}>Search</button>
                </div>



            </div>

        </header>
     );
}
 
export default Header;