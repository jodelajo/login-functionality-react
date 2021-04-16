import React, {useContext} from 'react';
import { AuthContext} from "../../components/context/AuthContext";
import './Profile.css';

function Profile() {
    const { user, logout } = useContext(AuthContext)
    console.log(user)

    return <div className="content">
        <h2>Jouw profielpagina</h2>
        <h3>Gegevens</h3>
        <p><strong>Gebruikersnaam:</strong> {user && user.username}</p>
        <p><strong>Email:</strong> {user && user.email}</p>
        <button type="button" onClick={logout} className="button">uitloggen</button>
    </div>
}
export default Profile
