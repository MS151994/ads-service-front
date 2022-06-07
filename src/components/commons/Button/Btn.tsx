import "./btn.css"
import {Link} from "react-router-dom";

interface Props {
    buttonName: string;
    to?: string;
}

export const Btn = (props: Props) => {
    return (
        props.to
            ? <Link to={props.to} className={"linkBtn"}>{props.buttonName}</Link>
            : <button className={"Button"}>{props.buttonName}</button>

    )
}