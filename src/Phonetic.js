import React from "react";

export default function Phonetic(props){
if (props.phonetic !== null){
return(
<div className="Phonetic">
    <a href={props.phonetic.audio} target="_blank"><i className="fas fa-volume-up"></i></a> &nbsp;
    {props.phonetic.text}
</div>)}
else return null;
}