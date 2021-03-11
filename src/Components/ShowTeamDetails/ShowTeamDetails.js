import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faFlag, faGamepad, faMars, faRainbow } from '@fortawesome/free-solid-svg-icons';
import './ShowTeamDetails.css';
import malePicture from '../../images/He.jpg';
import femalePicture from '../../images/She.jpg';

const ShowTeamDetails = (props) => {
    const { strTeam, intFormedYear, strSport, strCountry, strGender, strTeamBadge, strStadiumDescription, strDescriptionEN, strTeamFanart3, strTeamFanart1, strFacebook, strTwitter, strYoutube } = props.details;
    let imageUrl;
    if (strGender == "Male") {
        imageUrl = malePicture;
    }
    else{
        imageUrl =femalePicture;
    }
    return (
        <div>
            <div className="upper-section">
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">

                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={strTeamFanart3} className="d-block w-100" alt="..."></img>
                            <div className="carousel-caption d-none d-md-block">
                                <img style={{ width: "200px", height: "200px" }} src={strTeamBadge} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="main-section">
                <div className="middle-part-team-details">
                    <div className="team-info">
                        <h1 style={{ fontSize: "40px", color: "indigo" }}><FontAwesomeIcon icon={faRainbow} />Team-Name:{strTeam}</h1>
                        <h1><FontAwesomeIcon icon={faFlag} />Country:{strCountry}</h1>
                        <h1><FontAwesomeIcon icon={faBuilding} />Founded:{intFormedYear}</h1>
                        <h1><FontAwesomeIcon icon={faMars} />Gender:{strGender}</h1>
                        <h1><FontAwesomeIcon icon={faGamepad} />Game type:{strSport}</h1>

                    </div>
                    <div className="team-photo">
                        <img src={imageUrl} alt="" />
                    </div>
                </div>
                <div className="description-part">
                    <h1 style={{ color: "black", marginTop: "20px" }}>Description:</h1>
                    <hr />
                    <br />
                    <p>
                        {
                            strDescriptionEN
                        }
                    </p>
                    <p>
                        {
                            strStadiumDescription
                        }
                    </p>
                </div>

                <div className="social-media-part">
                    <a target="_blank" className="each-social-link" href={strFacebook}><FontAwesomeIcon icon={['fab', 'facebook']} size="4x" /></a>
                    <a target="_blank" className="each-social-link" href={strTwitter}><FontAwesomeIcon icon={['fab', 'twitter']} size="4x" /></a>
                    <a target="_blank" className="each-social-link" href={strYoutube}><FontAwesomeIcon icon={['fab', 'youtube']} size="4x" /></a>
                </div>
            </div>

        </div>

    );
};

export default ShowTeamDetails;