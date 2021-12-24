import "./styles/IconButton.css"

function IconButton(props: any)
{
    return <button id={props.id} className={`IconButton icon-button-${props.type ? props.type : "primary"}`}>
        <i className={props.iconClass}></i>
    </button>
}

export default IconButton;