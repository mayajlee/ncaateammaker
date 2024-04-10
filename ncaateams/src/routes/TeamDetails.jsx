import { useEffect, useState } from 'react';
import { supabase } from '../client.js';
import { Outlet, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const TeamDetails = () => {
    const { id } = useParams();
    const [team, setTeam] = useState(null);

    useEffect(() => {
        const fetchTeam = async () => {
            const { data } = await supabase
            .from('teamgallery')
            .select()
            .eq('id', id);
            
            setTeam(data[0]);
        }
        fetchTeam();
    }, [id]);

    if (!team) {
        return <div>Loading...</div>;
    }
    
    console.log(team);
    return (
        <div style={{color: "white"}}>
        <h1>Team Name: {team.teamName}</h1>
        <h2>Players:</h2>
        <div>
            {team.players ? team.players.map((player, index) => {
                return (
                    <div key={index}>
                        <h3>{player.name}</h3>
                        <p>{player.team}</p>
                    </div>
                );
            }) : <h1>Loading...</h1>}
        </div>
        <Link to={ `/UpdateTeam/${team.id}`} style={{backgroundColor: "#CF5C36", color:"white",fontFamily:"Knewave", padding: "10px", borderRadius: "50px"}} key={team.id}>Edit Team</Link>
        <Outlet/>
        </div>
    );
}

export default TeamDetails;