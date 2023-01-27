import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Detail(){
    
    const [character,setCharacter] = useState ({})
    
    const { detailId } = useParams()

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [id]);

    return(
        <div>
            <h1></h1>
        </div>
    )
}