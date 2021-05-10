import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";

export default function Dictionary(){

let [keyword, setKeyword] = useState("Persnickety"); 
let [results, setResults] = useState(null);
let [loaded, setLoaded] = useState(false);

function handleResponse(response){
    setResults(response.data[0]);
}

function handlePexelsResponse(response){
    console.log(response);
}
function search(){ 
 //api documentation https://dictionaryapi.dev/
 let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`
 axios.get(apiURL).then(handleResponse);
const pexelsApiKey = '563492ad6f91700001000001c20edfc6c7e14112a4ba15789c52d868';
let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=1`;
axios
.get(pexelsApiUrl, {
    headers: { Authorization : `Bearer ${pexelsApiKey}` },
})
.then(handlePexelsResponse);
}

function handleSubmit(event){
    event.preventDefault();
    search();
}

function handleKeywordChange(event){
setKeyword(event.target.value);
}

function load(){
    setLoaded(true);
    search();
}

if (loaded){
    return(
        <div className="Dictionary">
            <form onSubmit={handleSubmit}>
                <input type="search" onChange={handleKeywordChange} autoFocus={true} autoComplete="off" />
                <button onClick={search}><i className="fas fa-search"></i></button>
            </form>
            <Results data={results} />
        </div>);
}

else {load();
return "loading";}


}