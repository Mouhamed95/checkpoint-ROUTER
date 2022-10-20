import React from "react";
import { useState } from "react";
import { Datas } from "./Datas";
const Add = ()=>{
const [title, setTitle]= useState('')
const [description, setDescription] = useState('')
const [texte, setTexte] = useState('')
const movie = {
   title: title,
   postUrl : texte,
   description : description,
}
Datas.push(movie)
     return (
        <>
           
           
           <div className="ajouter">      
           <div>
           <input 
              type="text"
              name = 'Title'
              value = {title}
              placeholder="Title"
              onChange={(e) => setTitle (e.target.value) }
              required
              /> 
              </div>
              <div>
                <input 
               type="text"
              name="Description"
              placeholder="Description"
              value={description}
              onChange = {(e)=>setDescription(e.target.value)}
              />
              </div>
              <div>
              <input 
              type="text"
              name="PostURL"
              placeholder="PostURL"
              value={texte}
              onChange = {(e)=>setTexte(e.target.value)}
              />
            
           </div>
           <button  className= 'add'>Ajouter</button>
           <p> {title} </p>
           <p> {description} </p>
           <p> {texte} </p>
         </div>
      
      </>  
    
     )
    
}
export default Add;