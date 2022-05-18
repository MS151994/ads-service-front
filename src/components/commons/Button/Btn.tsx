import "./btn.css"
interface Props {
    buttonName: string;
}

export const Btn = (props: Props) => {
    return (
        <button className={"Button"}>{props.buttonName}</button>
    )
}