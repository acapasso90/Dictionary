import React from "react";
import ReactAudioPlayer from 'react-audio-player';

export default function Phonetic(props){

function playMusic(){
let player = document.getElementById('player');
player.play();
}
if (props.phonetic !== null){
return(
<div className="Phonetic">
    <ReactAudioPlayer src={props.phonetic.audio} id="player" />
        <i className="fas fa-volume-up" onClick={playMusic}></i> &nbsp;
    {props.phonetic.text}
</div>)}
else return null;
}