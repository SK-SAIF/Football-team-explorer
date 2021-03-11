import React, { useState } from 'react';
import './TeamCard.css';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const TeamCard = (props) => {
    const { idTeam, intFormedYear,  strTeam, strTeamBadge } = props.eachTeam;
    return (
        <div className="TeamCard">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={strTeamBadge} />
                <Card.Body>
                    <Card.Title>{strTeam}</Card.Title>
                    <Card.Text>
                        Team established:{intFormedYear}   
                    </Card.Text>
                    <Button variant="primary"> <Link to={`/TeamDetails/${idTeam}`}><span style={{color:"black"}}>Explore Team</span></Link></Button>
                </Card.Body>
            </Card>
        </div>

    );
};

export default TeamCard;