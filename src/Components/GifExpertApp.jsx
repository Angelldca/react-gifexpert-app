import React, { useState } from 'react';
import { AddCategories } from './addCategories';
import { GifGrid } from './GifGrid';

const GifExpertApp = ()=>{
    
const [categories,setCategories] =  useState(['One Punch man']);
   
    return(
        <div>
            <h1>
                Gif Expert App
            </h1>
            <AddCategories setCategories={setCategories}/>
            <hr/>

            <ol>
                {
                    categories.map((category) =>{
                           return (
                               <GifGrid category ={category} key ={category}>{category} </GifGrid>)
                    })
                }
            </ol>
        </div>
    )
}

export default GifExpertApp;