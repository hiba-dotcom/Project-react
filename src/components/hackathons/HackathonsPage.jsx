import React, { useEffect,useState } from "react";
import HackarhonList from "../hackathons/HackathonList.jsx";
import HackathonForm from "../hackathons/HackathonForm.jsx";
import HackathonService from "../services/HackathonsService.js";

function HackathonsPage() {
    const [hackathons, setHackathons] = useState([]);
    const [editingHackathon, setEditingHackathon] = useState(null);
    const [error, setError] = useState("");

    const loadHackathons = async () => {
        try {
            const data = await HackathonService.getAll();
            setHackathons(data);
        } catch (error) {
            setError(error.message || "Erreur lors de la récupération des hackathons.");
        }
    };

    useEffect(() => {
        //eslint-disable-next-line react-hooks/set-state-in-effect
        loadHackathons();
    }, []);


    const handleCreate = async (values) => {
        try {
            await HackathonService.create(values);
            await loadHackathons();
        } catch (error) {
            setError(error.message || "Erreur lors de la création du hackathon.");
        }
    };
    const handleUpdate = async (values) => {
        if(!editingHackathon) return;
        try {
            await HackathonService.update(editingHackathon,id, values);
            setEditingHackathon(null);
            await loadHackathons();
        } catch (error) {
            setError(error.message || "Erreur lors de la mise à jour du hackathon.");
        }
    };

    const handleDelete = async (id) => {
        try {
            await HackathonService.remove(id);
            await loadHackathons();
        } catch (error) {
            setError(error.message || "Erreur lors de la suppression du hackathon.");
        }
    };

    return(
        <>
            <h1>Gestion des hackathons</h1>
            {error&& <p>{error}</p>}
            <HackathonForm 
            initialValues={editingHackathon} 
            onSubmit={handleSubmitForm} 
            onCancel={() => setEditingHackathon(null)} 
        />
        <HackarhonList items={hackathons} onEdit={(hackathon) => setEditingHackathon(hackathon)} onDelete={handleDelete}/>
        </>
    );
    
}