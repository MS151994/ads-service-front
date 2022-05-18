import "./search.css";

interface Props {
    placeholder: string;
}

export const Search = (props: Props) => {
    return (
        <div className="search__container">
            <input type="text" placeholder={props.placeholder}/>
            <button className="search_button">🔎</button>
        </div>
    )
}