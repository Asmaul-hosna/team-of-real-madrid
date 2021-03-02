import './App.css';
import teamData from './fakeData/fakeData.json';
import { useEffect, useState } from 'react';
import Team from './components/Team';
import Cart from './components/Cart/Cart';


function App() {
  const[team,setTeam] = useState([])
  const [cart,setCart] = useState([]);

  useEffect(()=>{
    setTeam(teamData);
    const names=teamData.map(team=>team.name)
    
  },[])

  const handleAddTeam =(team)=>{
    const newCart = [...cart,team];
    setCart(newCart);
   
  }
  
  return (
    <div>
     <h1>Team Details:{team.length}</h1>
     <h4>Team members added:{cart.length}</h4>
     <Cart cart={cart}></Cart>
     
        <ul>
          {
            team.map(team => <Team team={team}handleAddTeam={handleAddTeam}key={team.id}></Team>)
          }
        </ul>
    </div>
    
  );
}; 
  
export default App;
