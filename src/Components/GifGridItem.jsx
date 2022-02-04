import React from "react"

export const GifGridItem = ({id,title,url})=>{
// animate__delay-2s

    return (
        <div className="card animate__animated animate__bounce"> 
            <img alt = {title} key={id} src={url}/>
            <p>{title}</p>
        </div>
    )
}