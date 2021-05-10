import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";

export default function Dictionary(){

let [keyword, setKeyword] = useState(""); 
let [results, setResults] = useState(null);


function handleResponse(response){
    setResults(response.data[0]);
   // let firstDef = response.data[0].meanings[0].definitions[0].definition;
   // if (response.data[0].meanings.length > 1) { setSecondDef(response.data[0].meanings[1].definitions[0].definition)}
   // console.log(secondDef)
}

function search(event){
    event.preventDefault();
    //api documentation https://dictionaryapi.dev/
    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`
    axios.get(apiURL).then(handleResponse);
}

function handleKeywordChange(event){
setKeyword(event.target.value);
}

return(
    <div className="Dictionary">
        <form onSubmit={search}>
            <input type="search" onChange={handleKeywordChange} autoFocus={true} autoComplete="off" />
        </form>
        <Results data={results} />
    </div>);

}