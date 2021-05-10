import React from "react";

export default function Synonyms(props){
    if (props.synonynms){
    return( 
        <ul className="Synonyms">
        {props.synonynms.map(function (synonym, index) {
            return <li key={index}> {synonym}  </li>;
        })}
        </ul>
    );
} 
else return null;
}