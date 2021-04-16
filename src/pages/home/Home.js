import React from 'react';
import './Home.css';
import {useHistory, Link } from 'react-router-dom';


function Home() {


    return <div className="content">
        <h2>Welkom</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cumque enim est impedit labore nam odit, ratione tenetur.</p>
        <br />
        <p>Al een account? <Link to='/log-in'>Log dan direct in.</Link> </p>
        <p>Of <Link to='/register'>registreer je hier</Link></p>


    </div>
}
export default Home
