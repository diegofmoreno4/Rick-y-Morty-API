//import { isContentEditable } from "@testing-library/user-event/dist/utils"
import './Card.css'
import { Link } from 'react-router-dom';

export default function Card(props) {
   return (
      <div style = {{display:'flex', justifyContent:'space-around'}}>
         <button onClick={() => props.OnClose(props.OnClose)}>X</button>
         <Link to={`/detail/${props.id}`}><h2>{props.name}</h2></Link>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <img  src={props.image} alt="not found" />
      </div>
   );
}
