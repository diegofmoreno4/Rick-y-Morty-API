import { useState } from "react";

export default function SearchBar(props) {

   const [character, setCharacter] = useState("")

   const handleChange = (e) => {
      const { value } = e.target
         setCharacter(value)
   }

   return (
      <div>
         <input type='search' placeholder="Buscar" onChange={handleChange} />
         <button onClick={() => props.onSearch(character)}>Agregar</button>
      </div>
   );
}
