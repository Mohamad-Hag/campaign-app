import "./styles/Card.css"
import "animate.css";

function Card(props: any)
{
    return <div id={props.id} className="Card animate__animated animate__fadeIn">
        <img className="card-image" alt="" src={props.image} />
        <div className="card-details">
            <label className="card-slogan">{props.slogan}</label>
            <span className="card-title">{props.title}</span>            
        </div>
        <p className="card-description">
            {props.description}
        </p>
    </div>
}

export default Card;