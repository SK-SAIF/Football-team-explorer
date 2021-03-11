import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ShowTeamDetails from '../ShowTeamDetails/ShowTeamDetails';
import './TeamDetails.css';

const TeamDetails = () => {
    let {teamId}=useParams();
    const [teamData,setTeamData]=useState({});
    useEffect(()=>{
        let url=`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setTeamData(data))
    },[teamId])
    const value=Object.values(teamData);
    return (
        <div className="team-details">
            {
                value.map(x=>x.map(y=><ShowTeamDetails details={y} key={y.idTeam}></ShowTeamDetails>))
            }
        </div>
    );
};

export default TeamDetails;