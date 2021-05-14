import React from "react";

export default function Synonyms(props){
if (props.synonynms !== undefined && props.synonynms.length > 0){
    return( 
        <div className="Synonyms">
            <strong>Synonyms:</strong>&nbsp;
        <ul className="Synonyms">
        {props.synonynms.map(function (synonym, index) {
            return <li key={index}> {synonym}  </li>;
        })}
        </ul>
        </div>
    );
}
else return null}