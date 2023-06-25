import '../styles/Card.css'

export default function Card(props) {
    const style = {
        backgroundImage: `url(presidents/${props.presidentUrlName}.jpg)`,
        // color: 'red',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',        
    };

    return (
        <div
            className="card"
            onClick={props.handleClick}
            data-value={props.num}
            style={style}
        >
            {/*props.num*/}
        </div>
    )
}



