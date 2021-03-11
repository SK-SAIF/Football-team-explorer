import React, { useEffect, useState } from 'react';
import TeamCard from '../TeamCard/TeamCard';
import './Teams.css';
const Teams = () => {
    const [count,setCount]=useState({});

    useEffect(()=>{
        fetch("https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League")
        .then(res=>res.json())
        .then(data=>setCount(data))
    },[])
    const value=Object.values(count);
    
    return (
        <div className="Teams">
           
            {
                value.map(x=>x.map(y=><TeamCard eachTeam={y} key={y.idTeam}></TeamCard>))
            }
        </div>
    );
};

export default Teams;