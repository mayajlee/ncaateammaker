import { useEffect, useState } from "react";
import { supabase } from "../client.js";
import { Link, Outlet } from "react-router-dom";

const TeamGallery = () => {
    const [Teams, setTeams] = useState([]);
    // READ all post from table
    useEffect(() => {
    const fetchTeams = async () => {
        const {data} = await supabase
        .from('teamgallery')
        .select();
  
        // set state of posts
        setTeams(data);
    }
    fetchTeams();
    }, []);

    //css variables
    const cardcss = {
        border: "6px solid #C3423F",
        borderRadius: "40px",
        padding: "10px",
        margin: "10px",
        width: "300px",
        height: "300px",
        text: "center",
        backgroundColor: "#EFC88B",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexWrap: "wrap",
    };

    const namecss = {
       backgroundColor: "#D9D9D9",
       padding: "10px",
       margin: "5px",
       width: "100px",
       fontFamily: "Knewave",
    };

    console.log(Teams);

    return (
        <>
        <h1>Team Gallery</h1>
        <div style={{display: "flex", justifyContent: "center", flexWrap: "wrap"}}>
            {Teams.length != 0 ? Teams.map((team, index) => {
            return (
                <Link to={ `/TeamDetails/${team.id}`} style={{color:"black", fontFamily:"Knewave"}} key={team.id}>
                <div>
                <div key={index} style={cardcss}>
                    {team.players.map((player, playerIndex) => {
                    return (
                        <div key={playerIndex} style={namecss}>{player.name}</div>
                    );
                    })}
                </div>
                <h2 style={{color: "white", fontFamily:"Knewave"}}>{team.teamName}</h2>
                <Link to={ `/UpdateTeam/${team.id}`} style={{backgroundColor: "#CF5C36", color:"white",fontFamily:"Knewave", padding: "10px", borderRadius: "50px"}} key={team.id}>Edit Team</Link>
                </div>
                </Link>
            );
            }) : <h1 style={{color: "white"}}>No Teams Yet!!</h1>}
        </div>
        <Outlet />
        </>
    );
};

export default TeamGallery;