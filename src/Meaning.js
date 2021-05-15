import React, {useState, useEffect} from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";

export default function Meaning(props){
    const [partofSpeech, setPartofSpeech] = useState(props.meaning.partOfSpeech)
    if (partofSpeech === undefined){  setPartofSpeech(null);}


    useEffect(()=>{ if (partofSpeech === "undefined"){  setPartofSpeech(null);}
    else{ setPartofSpeech(props.meaning.partOfSpeech)};}, [props.meaning.partOfSpeech]);
    
    console.log(partofSpeech)
 return(
<div className="Meaning">
        <h3 className="purple" id="partOfSpeech"> {partofSpeech} </h3>
        {props.meaning.definitions.map(function(definition, index) {
            let formattedIndex = ++index
            return (
                <div key={index} className="definitionColumn">
                    <p className="definition">
                        {formattedIndex}: {definition.definition} 
                    </p>
                    <Example example={definition.example} />
                    <Synonyms synonynms={definition.synonyms} /> 
                </div>
            )
        })}
    

    </div>);

}