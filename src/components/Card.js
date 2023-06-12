

function Card(props){
    const style = {
        border:"solid 1px black",
        margin: "10px auto",
        width: "40%",
        borderRadius: "10px" 
    }
    
    return(
    <div style={style}>
        <h2>{props.h2}</h2>
        <h3>{props.h3}</h3>
    </div>
    );
};

export default Card;