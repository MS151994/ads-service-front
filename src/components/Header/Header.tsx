import {Logo} from "../Logo/Logo";
import {Btn} from "../commons/Button/Btn";
import {Search} from "../commons/Search/Search";
import "./header.css"

export const Header = () => {
    return (
        <header>
            <div className="header__container">
                <Logo/>
                <Btn to="/add" buttonName={"add new ads"}/>
                <Search placeholder={"Search..."}/>
            </div>
        </header>
    )
}