import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import './Player.css';
const Player = (props) => {
    const{image,name,salary}=props.player
   
    return (

        <div className="player">
               <div>  
                <img style={{width:'200px'}}src={image} alt=""/>
            </div>
            <div>
                <h4>{name}</h4>
                <p>salary:{salary}</p>
                <button onClick={()=>props.handleAddPlayer(props.player)} style={{color:'blue'}}><FontAwesomeIcon icon={faPlus} />Add Me</button>
                </div>
         
          
           
        </div>
    );
};

export default Player;