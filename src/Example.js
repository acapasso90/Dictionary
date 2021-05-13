import React from "react";

export default function Example(props){
    console.log(props.example)
if (props.example === undefined || props.example === null){return null;}
else return(<div className="Example">
    <strong>Example:</strong>
    <br />
    <em>{props.example}</em>
</div>)
}