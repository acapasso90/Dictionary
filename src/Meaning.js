import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props){
    console.log(props.meaning);
    return(<div className="Meaning">
        <h3> {props.meaning.partOfSpeech} </h3>
        {props.meaning.definitions.map(function(definition, index) {
            return (
                <div key={index}>
                    <p>
                    {definition.definition} 
                    <br />
                    <strong>Example: </strong>&nbsp;
                    <em>{definition.example} </em>
                    <br />
                    <strong>Synonyms: </strong>&nbsp;
                    </p>
                    <Synonyms synonynms={definition.synonyms} /> 
                </div>
            )
        })}
    

    </div>);

}