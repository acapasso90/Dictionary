import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";

export default function Meaning(props){
    return(
<div className="Meaning">
        <h3 className="purple"> {props.meaning.partOfSpeech} </h3>
        {props.meaning.definitions.map(function(definition, index) {
            return (
                <div key={index}>
                    <p className="definition">
                    {definition.definition} 
                    </p>
                    <Example example={definition.example} />
                    <Synonyms synonynms={definition.synonyms} /> 
                </div>
            )
        })}
    

    </div>);

}