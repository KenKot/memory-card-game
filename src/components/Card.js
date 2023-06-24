import '../styles/Card.css'

export default function Card(props) {


    // var imageName = props.presidentUrlName;


    const style = {
        backgroundImage: `url(presidents/${props.presidentUrlName}.jpg)`,

        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',        
    };

    // console.log("!!!", style.backgroundImage)

    return (
        <div
            className="card"
            onClick={props.handleClick}
            data-value={props.num}
            style={style}
        >
            {props.num}
        </div>
    )
}



