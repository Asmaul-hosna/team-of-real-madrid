import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import fakeData from '../fakeData/fakeData.json';
import Player from '../Player/Player';
import './Home.css';



const Home = () => {
    const[players,setPlayers]=useState([]);
    const[cart,setCart]=useState([]);
    
    useEffect(()=>{
        setPlayers(fakeData)

    },[])

    const handleAddPlayer = (player) =>{
    const newCart = [...cart,player];
        setCart(newCart);
    }
    
    return (
        <div className="home-container">
           <div className="player-container">
           <ul>
                {
                players.map(player => <Player handleAddPlayer={handleAddPlayer} player={player}></Player>) 
                }
            </ul>
           </div>
           <div className="cart-container">
            <Cart cart={cart}></Cart>
           </div>
           
        </div>
    );
};

export default Home;