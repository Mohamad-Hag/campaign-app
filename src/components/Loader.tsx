import "./styles/Loader.css"

function Loader(props: any)
{
    return <div id={props.id} className={`Loader loader-${props.size ? props.size : "medium"}`}>
    </div>
}

export default Loader;