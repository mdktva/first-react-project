function Card(props) {
    console.log(props);
    return (
        <div className="card" style={{width: "15rem", margin: "10px 0"}}>
            <img 
                src={
                    props.imgUrl 
                    ? props.imgUrl 
                    : "https://s.auto.drom.ru/i24231/c/photos/fullsize/porsche/cayenne/porsche_cayenne_886645.jpg" 
                }
                    className="card-img-top" alt="#"/>
                <div className="card-body">
                    <h5 className="card-title">{props.title} за {props.price}</h5>
                    <p className="card-text">{props.description}</p>
                    <a href="#" className="btn btn-primary">Подробнее</a>
                </div>
        </div>
    )
}

export default Card;