import React from "react";

export default function Photos(props){
    console.log(props.photos);
if (props.photos){
    return(
        <div className="Photos">
            <div className="row">
                {props.photos.map(function(photo, index) {
                    return (
                        <div className="col-4" key={index}>
                        <a href={photo.src.original} target="_blank">
                        <img src={photo.src.landscape}  className="img-fluid" />
                        </a>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
else return null;
}