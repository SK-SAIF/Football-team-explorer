import React, { useState } from 'react';
import './TeamCard.css';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const TeamCard = (props) => {
    //console.log(props.eachTeam);
    const { idTeam, intFormedYear, strGender, strTeam, strTeamBadge } = props.eachTeam;
    return (
        <div className="TeamCard">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={strTeamBadge} />
                <Card.Body>
                    <Card.Title>{strTeam}</Card.Title>
                    <Card.Text>
                        Team established:{intFormedYear}
                        <hr />
                        Gender: {strGender}
                    </Card.Text>
                    <Button variant="primary"> <Link to={`/TeamDetails/${idTeam}`}><span style={{color:"black"}}>Explore Team</span></Link></Button>
                </Card.Body>
            </Card>
        </div>

    );
};

export default TeamCard;