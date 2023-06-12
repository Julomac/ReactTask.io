function Btn(props){
    const clickHandle = () =>{
        console.log("Clicked")
    }
    return(
        <button onClick={clickHandle}>
            button click 
        </button>
    );
};

export default Btn;