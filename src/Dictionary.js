import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import Photos from "./Photos";
import moon from "./media/moon.png";

export default function Dictionary(){

let [keyword, setKeyword] = useState("Strawberry"); 
let [language, setLanguage] = useState("en_US");
let [languageDisplay, setLanguageDisplay] = useState("US English");
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
 let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/${language}/${keyword}`
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

function setUSEnglish(){setLanguage("en_US"); setLanguageDisplay("US English")};
function setUKEnglish(){setLanguage("en_GB"); setLanguageDisplay("UK English")};
function setSpanish(){setLanguage("es"); setLanguageDisplay("Spanish")};
function setFrench(){setLanguage("fr"); setLanguageDisplay("French")};
function setJapanese(){setLanguage("ja"); setLanguageDisplay("Japanese")};
function setRussian(){setLanguage("ru"); setLanguageDisplay("Russian")};
function setHindi(){setLanguage("hi"); setLanguageDisplay("Hindi")};
function setGerman(){setLanguage("de"); setLanguageDisplay("German")};
function setItalian(){setLanguage("it"); setLanguageDisplay("Italian")};
function setKorean(){setLanguage("ko"); setLanguageDisplay("Korean")};
function setPortuguese(){setLanguage("pt-BR	"); setLanguageDisplay("Brazilian Portuguese")};
function setArabic(){setLanguage("ar"); setLanguageDisplay("Arabic")};
function setTurkish(){setLanguage("tr"); setLanguageDisplay("Turkish")};

if (loaded){
    return(
        <div className="Dictionary">
            <div className="row" id="headerRow">
                <div className="col-6">
                    <header>
                        <div className="row">
                            <div className="col-1">
                                <img src={moon} alt="moon" className="moon"/>
                            </div>
                            <div className="col-1">
                                <h2> <span className="nobreak">Night Mode </span> Dictionary</h2>
                            </div>
                        </div>
                    </header>
                </div>
                <div className="col-6">
                    <div className="row2">
                        <div className="col-6" id="dropdownLabelRow">
                            <p className="languageLabel">Choose a Language</p>
                            <DropdownButton id="dropdown-basic-button" title={languageDisplay}>
                            <Dropdown.Item href="#/action-1" onClick={setUSEnglish} >English (US)</Dropdown.Item>
                            <Dropdown.Item href="#/action-2" onClick={setUKEnglish}>English (UK)</Dropdown.Item>
                            <Dropdown.Item href="#/action-3" onClick={setSpanish}>Spanish</Dropdown.Item>
                            <Dropdown.Item href="#/action-4" onClick={setFrench}>French</Dropdown.Item>
                            <Dropdown.Item href="#/action-5" onClick={setJapanese}>Japanese</Dropdown.Item>
                            <Dropdown.Item href="#/action-6" onClick={setRussian}>Russian</Dropdown.Item>
                            <Dropdown.Item href="#/action-7" onClick={setHindi}>Hindi</Dropdown.Item>
                            <Dropdown.Item href="#/action-8" onClick={setGerman}>German </Dropdown.Item>
                            <Dropdown.Item href="#/action-9" onClick={setItalian}>Italian</Dropdown.Item>
                            <Dropdown.Item href="#/action-10" onClick={setKorean}>Korean</Dropdown.Item>
                            <Dropdown.Item href="#/action-11" onClick={setPortuguese}>Brazilian Portuguese</Dropdown.Item>
                            <Dropdown.Item href="#/action-12" onClick={setArabic}>Arabic</Dropdown.Item>
                            <Dropdown.Item href="#/action-13" onClick={setTurkish}>Turkish</Dropdown.Item>
                            </DropdownButton>
                        </div>
                        <div className="col-6">
                            <form onSubmit={handleSubmit}>
                                <input type="search" onChange={handleKeywordChange} autoFocus={true} placeholder="Enter a word" autoComplete="off" />
                                <button onClick={search} className="searchButton"><i className="fas fa-search"></i></button>
                            </form>                    
                        </div>
                    </div> 
                    </div>
                       
            </div>
            <div className="results">
                <Results data={results} />
                <Photos photos={photos} />
            </div>
        </div>);
}

else {load();
return "loading";}


}