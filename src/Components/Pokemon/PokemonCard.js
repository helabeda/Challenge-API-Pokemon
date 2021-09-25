import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Style from "style-it";
import {Link } from "react-router-dom";

const PokeCard = ({el,id}) => {
    const [image, setImage] = useState({})
    function padLeadingZeros(num, size) {
      var s = num + "";
      while (s.length < size) s = "0" + s;
      return s;
    }
     const x = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${padLeadingZeros(
       id.replace("/", ""),
       3
     )}.png`;
     const [type1, setType1] = useState("")
    useEffect(() => {
        const specify = async () => {
          try {
            const response = await axios.get(
              `https://pokeapi.co/api/v2/pokemon/${id}`
            );
                setType1(response.data.types[0].type.name);
          } catch (error) {}
        };specify()
    }, []);

    return (
      <div>
      <Style>
      {
        `.container .card:after{
        content:"#${padLeadingZeros(id.replace("/", ""), 3)}" ;
        position: absolute;
        top: 30%;
        left: -20%;
        font-size: 10em;
        font-weight: 800;
        font-style: italic;
        color: rgba(255,255,25,0.05)`
      }
      <div className="container">
              <div className="card">
                <div className="imgBx">
                  <img src={x} alt={el.name} />
                </div>
                <div className="contentBx">
                  <h2>{el.name}</h2>
                  <div className="size">
                    <span className={type1}>{type1}</span>
                </div>
                 <Link to={`/pokemon-go/${id}`}><button>Details</button></Link>
                </div>
              </div>
            </div>
      </Style>
   </div>
    );
}

export default PokeCard