import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import moon from "./media/moon.png";

export default function Dictionary(){

let [keyword, setKeyword] = useState("Strawberry"); 
let [results, setResults] = useState(null);
let [loaded, setLoaded] = useState(false);
let [photos, setPhotos] = useState(null);

function handleResponse(response){
    setResults(response.data[0]);
}

function handlePexelsResponse(response){
    setPhotos(response.data.photos);
}

function search(){ 
 //api documentation https://dictionaryapi.dev/
 let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`
 axios.get(apiURL).then(handleResponse);
const pexelsApiKey = '563492ad6f91700001000001c20edfc6c7e14112a4ba15789c52d868';
let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
axios.get(pexelsApiUrl, {
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
            <div className="row">
                <div className="col-6">
                    <header>
                        <div className="row">
                            <div className="col-1">
                                <img src={moon} alt="moon" className="moon"/>
                            </div>
                            <div className="col-1">
                                <h2>Night Mode Dictionary</h2>
                            </div>
                        </div>
                    </header>
                </div>
                <div className="col-6">
                    <form onSubmit={handleSubmit}>
                    <input type="search" onChange={handleKeywordChange} autoFocus={true} autoComplete="off" />
                    <button onClick={search}><i className="fas fa-search"></i></button>
                    </form>
                </div>
            </div>
            <Results data={results} />
            <Photos photos={photos} />
        </div>);
}

else {load();
return "loading";}


}