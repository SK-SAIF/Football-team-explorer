import React from 'react';
import Header from '../Header/Header';
import Teams from '../Teams/Teams';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


const Home = () => {
    return (
        <div>

            <Header></Header>
            <Teams></Teams> 
        </div>
    );
};

export default Home;