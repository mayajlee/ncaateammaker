import React, { useState } from 'react';
import { supabase } from '../client.js';


const CreateTeam = () => {

    const playerCardInfo = [
        {
            position: "Point Guard \n (1)",
            players: [
                {name: "Paige Buekers", team: "UConn"},
                {name: "Hannah Hidalgo", team: "Notre Dame"},
                {name: "Georgia Amoore", team: "Virginia Tech"},
                {name: "Hailey Van Lith", team: "LSU"},
                {name: "Chellia Watson", team: "Buffalo"},
                {name: "Tanajah Hayes", team: "FIU"},
                {name: "Kennedy Calhoun", team: "SLU"}]
        },
        {
            position: "Shooting Guard \n (2)",
            players: [
                {name: "Caitlin Clark", team: "USC"},
                {name: "Flau'jae Johnson", team: "LSU"},
                {name: "Lucy Olsen", team: "Villa Nova"},
                {name: "Rickea Jackson", team: "Tennessee"},
                {name: "Rachel Rose", team: "Utah"},
                {name: "Taniya Latson", team: "Syracuse"},
                {name: "Dyaisha Fair", team: "Syracuse"},]
        },
        {
            position: "Small Forward \n (3)",
            players:[
                {name: "Lauren Gustin", team: "BYU"},
                {name: "Angel Reese", team: "LSU"},
                {name: "Cameron Brink", team: "Stanford"},
                {name: "Kiki Iriafen", team: "Stanford"},
                {name: "Ajae Petty", team: "UKentucky"},
                {name: "Laniyah Randall", team: "SIU"}
            ]
        },
        {
            position: "Power Forward \n (4)",
            players:[
                {name: "Laniah Randle", team: "SIU"},
                {name: "Alissa Pili", team: "Utah"},
                {name: "Temira Pointdexter", team: "TLSA"},
                {name: "Mackenzie Holmes", team: "IU"},
                {name: "Yvonne Ejim", team: "Texas"},
                {name: "Katelyn Young", team: "MUR"}
            ]
        },
        {
            position: "Center \n (5)",
            players:[
                {name: "Elizabeth Kitley", team: "South Carolina"},
                {name: "Ayoka Lee", team: "Baylor"},
                {name: "Audi Crooks", team: "Texas"},
                {name: "Desi-Rae Young", team: "UNLV"},
                {name: "Taiyanna Jackson", team: "KU"},
                {name: "Kamilla Cardoso", team: "South Carolina"},
            ]
        }
        ];
    //Save player values
    const [teamRoster, setRoster] = useState([]);
    const [teamName, setTeamName] = useState("");

    const handleRoster = (playerIndex, cardIndex) => {
        let newRoster = [...teamRoster];
        newRoster[cardIndex] = playerCardInfo[cardIndex].players[playerIndex];
        setRoster(newRoster);
    }

    const handleInputChange = (event) => {
        setTeamName(event.target.value);
    }

    //save team to db
    const saveTeam = async() => {
        await supabase.from('teamgallery').insert({teamName: teamName, players: teamRoster});
    };

    //stylings
    const cardcss = {
        border: "6px solid #C3423F",
        borderRadius: "40px",
        padding: "10px",
        margin: "10px",
        width: "245px",
        height: "450px",
        text: "center",
        backgroundColor: "#EFC88B",
        justifyContent: "center",
        alignItems: "center",
    };

    const inputcss = {
        padding: "10px",
        backgroundColor: "#FFFFFF",
        border: "6px solid #C3423F",
        borderRadius: "40px",
        fontSize: "16px",
        color: "black",
    }
    
    return (
        <>
            <h1 style={{color: "white", fontFamily:"Just Another Hand"}}>Create Your Team!</h1>
            <div style={{display: "flex", justifyContent: "center"}}>
                {playerCardInfo.map((playerCard, cardIndex) => {
                    return (
                        <div key={cardIndex} style={cardcss}>
                            <h2 style={{fontFamily: "Knewave"}}>{playerCard.position}</h2>
                                {playerCard.players.map((player, playerIndex) => {
                                    return (<>
                                                <br/>
                                                <input
                                                    M
                                                    type="radio"
                                                    name={playerCard.position}
                                                    id={playerIndex}
                                                    checked={(teamRoster[cardIndex] != undefined && teamRoster[cardIndex].name === player.name)}
                                                    onChange={() => handleRoster(playerIndex, cardIndex)}
                                                />
                                                <label for={playerIndex}>{player.name} - {player.team}</label>
                                                <br/>
                                            </>)
                                    })}
                        </div>
                    )
                })}
            </div>
            <input type="text" placeholder='Insert team name here...' style={inputcss} onChange={handleInputChange}/>
            <button style={{backgroundColor: "#CF5C36", color:"white",fontFamily:"Knewave"}} onClick={saveTeam}>Create Team!</button>
        </>
    );
};

export default CreateTeam;