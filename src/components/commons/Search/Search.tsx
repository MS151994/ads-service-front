import "./search.css";
import {SyntheticEvent, useContext, useState} from "react";
import {SearchContext} from "../../../contexts/search.context";

interface Props {
    placeholder: string;
}

export const Search = (props: Props) => {
    const {search, setSearch} = useContext(SearchContext);
    const [value, setValue] = useState(search);

    const setSearchFormFromLocalState = (e: SyntheticEvent) => {
        e.preventDefault();
        setSearch(value);
    }

    return (
        <form className="search__container"
              onSubmit={setSearchFormFromLocalState}
        >
            <input
                type="text"
                placeholder={props.placeholder}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button className="search_button">🔎</button>
        </form>
    )
}