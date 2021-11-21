import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {handleChange}from "react-redux";
import { increment } from "./Actions/action";
export default function AppRedux(){
    const[step,setStep] = useState(1)
    const counter = useSelector ((state) => state.counter);

    const dispatch = useDispatch();
    const handleChange =e => {
        setStep (e.target.value);
    };
    import "./App.css";
    return(
        <div className="App">
            <select>
                <option></option>
                <option></option>
                <option></option>
                 </select>
        <button onClick ={() => dispatch (increment(step)) } >
        +
        </button>
        <h1>{counter}</h1>
        <button onClick ={() => dispatch ( decrement(step))  } >
        </button>

        </div>
    )
}