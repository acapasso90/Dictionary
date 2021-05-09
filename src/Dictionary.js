import React, {useState} from "react";
import axios from "axios";

export default function Dictionary(){

let [keyword, setKeyword] = useState(""); 

function handleResponse(response){
    console.log(response.data);
}

function search(event){
    event.preventDefault();
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
    </div>);

}