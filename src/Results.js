import React from "react";
import Meaning from "./Meaning";

export default function Result(props){
    if (props.data != null){ return(
        <div className="result">
            <h2>{props.data.word}</h2>
            {props.data.meanings.map(function(meaning, index) {
               return(<div key={index}>
                   <Meaning meaning={meaning} />
                   </div>)
            })}
        </div>)
    }
    else {return null;}
}