import {Link} from "react-router";

function HomePage(){
    return<>
    Bienvenue dans notre app de gestion des hackathons.
        <nav>
            <li><Link to="/hackathons">Liste des hackathons</Link></li>
        </nav>
    </>
}

export default HomePage;