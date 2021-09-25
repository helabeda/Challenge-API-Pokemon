import React, { useEffect, useState }from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import './PokemonDetails.css'

const PokemonDetails = () => {
    const {id} = useParams();
    const [name,setName]=useState("")
    const [image,setImage]=useState("")
    const [weight, setWeight] = useState("")
    const [height, setHeight] = useState("");
    const [moves, setMoves] = useState("");
       useEffect(() => {
        
         const specify = async () => {
           try {
             const response = await axios.get(
               `https://pokeapi.co/api/v2/pokemon/${id}`
             );
             setName(response.data.forms[0].name);
             setImage(response.data.sprites.front_default)
             setWeight(response.data.weight)
             setHeight(response.data.height)
             setMoves(response.data.moves);
           } catch (error) {}
         };
         
         specify();
       });
    return (
     <div className= "body">
      <div className="flip-card-container">
        <div className="flip-card">

          <div className="card-front">
            <figure>
              <div classNameName="img-bg"></div>
              <img src={image} alt={name} />
            </figure>
      
            <ul>
              <li><h1>{name} Details</h1></li>
              <li><h1>{name}</h1></li>
              <li><h4>Height:{height}</h4></li>
              <li><h4>Weight: {weight}</h4></li>
              <li><h4>No of moves: {moves.length}</h4></li>
            </ul>
          </div>
      
          <div className="card-back">
            <figure>
              <div className="img-bg"></div>
              <img src={image} alt={name}/>
            </figure>
            <div className="design-container">
              <span className="design design--1"></span>
              <span className="design design--2"></span>
              <span className="design design--3"></span>
              <span className="design design--4"></span>
              <span className="design design--5"></span>
              <span className="design design--6"></span>
              <span className="design design--7"></span>
              <span className="design design--8"></span>
            </div>
          </div>
      
        </div>
      </div>
    </div>
    )
}

export default PokemonDetails
