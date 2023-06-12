/*
    In this component you can choose to display the text
That you Enter in the input field in real time

To accomplish this you've have created descontruct a array with [text, setext] = useState(' default info here')

if u need to re learn this 
cousera  react Basic week 2 using hook Reading

*/




import {useState} from 'react'
export default function InputOnChange(){
    
    const [inputText, setInputText] = useState('')

    const evenHandler = event =>{
        setInputText(event.target.value)
    }
    return (
        <div>
        <h1>Enter text Below</h1>
        <input
        type='text'
        value={inputText}
        onChange={evenHandler}>
        </input>
        <p>
            {inputText}
        </p>
        </div>
    );
}


