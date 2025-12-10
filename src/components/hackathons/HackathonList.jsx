import React from "react";

function HackathonList({ items, onEdit, onDelete}) {
    if(!items || items.lenght ===0){
        return <p>Aucun hackathon pour le moment.</p>;
    }

    return(
        <ul>
            {items.map((hackathon) => (
                <li key={hackathon.id}>
                    <strong>{hackathon.name}</strong> - {hackathon.location} -{" "}
                    <button onClick={() => onEdit(hackathon)}>Modifier</button>
                    <button onClick={() => onDelete(hackathon)}>Supprimer</button>
                </li>
            ))}
        </ul>
    )
}

export default HackathonList;