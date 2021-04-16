import React, {useContext} from 'react';
import './Home.css';
import { AuthContext} from "../../components/context/AuthContext";

function Home() {
    // const {logout } = useContext(AuthContext)

    return <div className="content">
        <h2>Welkom</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cumque enim est impedit labore nam odit, ratione tenetur. Accusantium dolorum eos incidunt laudantium nam nostrum porro reiciendis reprehenderit veniam. Sunt.</p>


    </div>
}
export default Home
