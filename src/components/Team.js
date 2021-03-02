import React from 'react';

const Team = (props) => { 
    const{name,salary,image} = props.team;
    const imageStyle ={height:'200px'}
    const teamStyle ={border:'1px solid green',margin:'2px',padding:'2px'} 
    const buttonStyle={color:'goldenrod'}
    const handleAddTeam = props.handleAddTeam;
    
    
  
    return (
        <div style ={teamStyle}>
            <img style={imageStyle} src={image} alt=""/>
            <h4>{name}</h4>
            <p>salary:{salary}</p>
            <button onClick={()=>handleAddTeam(props.team)} style={buttonStyle}>info details</button>

        </div>
        
    );
};

export default Team;
