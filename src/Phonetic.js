import React, {useState, useEffect} from "react";
import ReactAudioPlayer from 'react-audio-player';

export default function Phonetic(props){
 const [audio, setAudio] = useState("");
function playMusic(){
let player = document.getElementById('player');
player.play();
}

useEffect(()=>{if (props.phonetic.audio === null){setAudio(null);}
else{setAudio(props.phonetic.audio)};}, [props]);



if (props.phonetic === null || !audio ){return null}

else{return(
<div className="Phonetic">
    <ReactAudioPlayer src={audio} id="player" />
        <i className="fas fa-volume-up" onClick={playMusic}></i> &nbsp;
    {props.phonetic.text}
</div>)}}