import '../styles/Card.css'

export default function Card(props) {



    return (
        <div
            className="card"
            onClick={props.handleClick}
            data-value={props.num}
        >
            {props.num}
        </div>
    )
}



